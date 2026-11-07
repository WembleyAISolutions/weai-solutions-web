/**
 * The configured contact delivery endpoint, or undefined when the form must stay
 * disabled. HTTPS only, except plain HTTP to the local machine for development.
 */
export function contactWebhookUrl(): string | undefined {
  const raw = process.env.CONTACT_WEBHOOK_URL?.trim();
  if (!raw) return undefined;
  try {
    const u = new URL(raw);
    if (u.protocol === "https:") return u.toString();
    const local = u.hostname === "localhost" || u.hostname === "127.0.0.1" || u.hostname === "[::1]";
    if (u.protocol === "http:" && local && process.env.NODE_ENV !== "production") return u.toString();
    return undefined;
  } catch {
    return undefined;
  }
}
