import { NextResponse } from "next/server";
import { LIMITS } from "@/content/contact";
import { validateContact } from "@/lib/contact-validate";
import { contactWebhookUrl } from "@/lib/contact-config";
import { createRateLimiter } from "@/lib/rate-limit";

/**
 * POST /api/contact — forwards one validated enquiry to the confirmed business
 * inbox via `CONTACT_WEBHOOK_URL` (set in Vercel only; never committed).
 *
 * Success (`delivered: true`) is returned only when the receiving service
 * acknowledges acceptance: HTTP 202, or a 2xx whose JSON body carries
 * `accepted: true` (also `ok: true` / `success: true`). A bare 2xx without that
 * acknowledgement is reported as `unconfirmed`, never as success.
 *
 * No enquiry contents and no secrets are written to logs or returned to the client.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UPSTREAM_TIMEOUT_MS = 8000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 5;

// Best-effort, per-instance rate limit (no shared store exists in this repo).
// Only allowed requests are recorded; the key map is capped at 1000 entries.
const limiter = createRateLimiter({ windowMs: RATE_WINDOW_MS, max: RATE_MAX, maxKeys: 1000 });

function clientKey(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  const ip = fwd ? fwd.split(",")[0].trim() : req.headers.get("x-real-ip") ?? "unknown";
  return ip || "unknown";
}

function fail(status: number, error: string, extra?: Record<string, unknown>) {
  return NextResponse.json({ delivered: false, error, ...extra }, { status, headers: { "cache-control": "no-store" } });
}

export async function POST(req: Request) {
  const url = contactWebhookUrl();
  if (!url) return fail(503, "not_configured");

  if (!limiter.allow(clientKey(req))) return fail(429, "rate_limited");

  const contentType = req.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) return fail(415, "invalid");

  const declared = Number(req.headers.get("content-length") ?? "0");
  if (declared > LIMITS.body) return fail(413, "invalid");
  let text: string;
  try {
    text = await req.text();
  } catch {
    return fail(400, "invalid");
  }
  if (text.length > LIMITS.body) return fail(413, "invalid");

  let raw: unknown;
  try {
    raw = JSON.parse(text);
  } catch {
    return fail(400, "invalid");
  }

  // Honeypot: real visitors never fill `website`. Pretend to accept nothing.
  if (raw && typeof raw === "object" && (raw as Record<string, unknown>).website) {
    return fail(400, "invalid");
  }

  const result = validateContact(raw);
  if (!result.ok) return fail(422, "invalid", { fields: result.errors });

  const payload = {
    source: "weai.solutions/contact",
    receivedAt: new Date().toISOString(),
    ...result.value,
  };

  let res: Response;
  try {
    res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
      cache: "no-store",
    });
  } catch (err) {
    const timedOut = err instanceof Error && (err.name === "TimeoutError" || err.name === "AbortError");
    console.warn(`[contact] upstream ${timedOut ? "timeout" : "unreachable"}`);
    return fail(timedOut ? 504 : 502, timedOut ? "timeout" : "upstream");
  }

  if (!res.ok) {
    console.warn(`[contact] upstream status ${res.status}`);
    return fail(502, "upstream");
  }

  let acknowledged = res.status === 202;
  if (!acknowledged) {
    try {
      const body = (await res.json()) as Record<string, unknown>;
      acknowledged = body?.accepted === true || body?.ok === true || body?.success === true;
    } catch {
      acknowledged = false;
    }
  }
  if (!acknowledged) {
    console.warn(`[contact] upstream 2xx without acknowledgement`);
    return fail(502, "unconfirmed");
  }

  return NextResponse.json({ delivered: true }, { headers: { "cache-control": "no-store" } });
}
