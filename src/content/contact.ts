/**
 * Contact page copy and the shared field contract used by both the form and the
 * API handler (WEB-NAV-001 A5). Form only — no AI chat, no analytics.
 */
export const AREAS = [
  { id: "foundation", label: "Foundation" },
  { id: "ops", label: "Ops" },
  { id: "workforce", label: "Workforce / HR-AR OS" },
  { id: "platforms", label: "Platforms" },
  { id: "partnership", label: "Partnership or integration" },
  { id: "unsure", label: "Not sure yet" },
] as const;

export type AreaId = (typeof AREAS)[number]["id"];

export function isAreaId(value: unknown): value is AreaId {
  return typeof value === "string" && AREAS.some((a) => a.id === value);
}

export const LIMITS = {
  name: 120,
  email: 254,
  organisation: 160,
  message: 4000,
  about: 80,
  body: 16 * 1024,
} as const;

export const contactCopy = {
  eyebrow: "WEAI · CONTACT",
  title: "Tell us what you are working on.",
  lead:
    "One form, read by people. Describe the workflow, platform or question and we " +
    "will reply by email.",
  enquiryAbout: "Enquiry about:",
  fields: {
    name: "Name",
    email: "Email",
    organisation: "Organisation",
    area: "Area of interest",
    message: "Message",
    optional: "optional",
  },
  submit: "Send enquiry",
  sending: "Sending…",
  success: "Your enquiry has been received",
  successDetail: "We will reply to the email address you gave.",
  notEnabled:
    "The enquiry form is not yet taking submissions. It opens once the receiving " +
    "inbox has been confirmed.",
  errors: {
    invalid: "Please check the highlighted fields and try again.",
    rate_limited: "Too many attempts from this connection. Please try again later.",
    not_configured: "The enquiry form is not yet taking submissions.",
    timeout: "The receiving service did not respond in time. Your enquiry was not confirmed — please try again.",
    upstream: "The receiving service could not take your enquiry. It was not confirmed — please try again.",
    unconfirmed: "We could not confirm that your enquiry was received. Please try again.",
    network: "Your enquiry could not be sent. Check your connection and try again.",
  },
} as const;

export type ContactErrorCode = keyof typeof contactCopy.errors;
