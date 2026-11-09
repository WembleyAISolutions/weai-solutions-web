import { isAreaId, LIMITS, type AreaId } from "@/content/contact";
import { isPageId, PAGE_NAMES } from "@/content/nav";
import { getProduct, PRODUCTS } from "@/content/products";

export interface ContactInput {
  name: string;
  email: string;
  organisation?: string;
  area: AreaId;
  message: string;
  /** Resolved subject of the enquiry (a page or product name), if any. */
  about?: string;
}

export type FieldErrors = Partial<Record<"name" | "email" | "organisation" | "area" | "message", string>>;

// Strip control characters (including CR/LF) so values can never carry header or
// line injection into the receiving service. Tabs and newlines are kept in the
// message body only.
function cleanLine(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
}

function cleanBlock(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, " ").replace(/\r\n?/g, "\n").trim().slice(0, max);
}

// Deliberately simple: one @, no whitespace, a dot in the domain.
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Resolve untrusted `from` / `product` query values against known ids. Anything
 * unknown falls back to a general enquiry (undefined).
 */
export function resolveAbout(from?: string, product?: string): { about?: string; area?: AreaId } {
  const p = getProduct(product);
  if (p) {
    const area: AreaId | undefined =
      p.line === "ops"
        ? "ops"
        : p.line === "workforce"
          ? "workforce"
          : p.line === "payments"
            ? "payments"
            : p.line === "platforms"
              ? "platforms"
              : "foundation";
    return { about: p.name, area };
  }
  if (isPageId(from)) return { about: PAGE_NAMES[from], area: from };
  return {};
}

export function validateContact(raw: unknown): { ok: true; value: ContactInput } | { ok: false; errors: FieldErrors } {
  const r = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const errors: FieldErrors = {};

  const name = cleanLine(r.name, LIMITS.name);
  if (!name) errors.name = "Please give your name.";

  const email = cleanLine(r.email, LIMITS.email);
  if (!email || !EMAIL_RE.test(email)) errors.email = "Please give a valid email address.";

  const organisation = cleanLine(r.organisation, LIMITS.organisation);

  const area = r.area;
  if (!isAreaId(area)) errors.area = "Please choose an area of interest.";

  const message = cleanBlock(r.message, LIMITS.message);
  if (!message) errors.message = "Please write a message.";

  if (Object.keys(errors).length > 0 || !isAreaId(area)) return { ok: false, errors };

  // `about` is only ever a value we resolved ourselves from known ids.
  const aboutRaw = cleanLine(r.about, LIMITS.about);
  const about = aboutRaw && resolveAboutName(aboutRaw) ? aboutRaw : undefined;

  return {
    ok: true,
    value: { name, email, organisation: organisation || undefined, area, message, about },
  };
}

/** `about` is accepted only when it is exactly a known page or product name. */
function resolveAboutName(name: string): boolean {
  return Object.values(PAGE_NAMES).includes(name) || PRODUCTS.some((p) => p.name === name);
}
