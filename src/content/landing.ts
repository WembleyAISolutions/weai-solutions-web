/**
 * Centralized landing copy for the WEAI.solutions public homepage.
 *
 * This file is the single source of truth for on-page strings. All claims here
 * are governed by `docs/guardrails/landing-claims-policy.md`. Do not introduce
 * pricing, login, runtime/execution claims, or attribution that conflicts with
 * that policy. Locked strings are marked LOCKED and must not be reworded.
 */

export const site = {
  name: "WEAI",
  wordmark: "WEAI.solutions",
  /** Short system descriptor used in header/footer. */
  systemLabel: "Execution Layer",
} as const;

export const hero = {
  eyebrow: "AI capability systems for the real economy",
  /** LOCKED — see landing-claims-policy.md §6 */
  headline:
    "The missing execution layer between AI intelligence and the real economy.",
  /** LOCKED — see landing-claims-policy.md §6 */
  subhead:
    "WEAI turns platform needs into governed, auditable, executable AI capability packages for real-world industries and human-facing services.",
  /** Primary CTA label */
  ctaPrimary: "Request a capability demo",
  ctaSecondary: "See the method",
} as const;

/**
 * Lightweight system path shown near the hero. A plain left-to-right sequence —
 * NOT an internal architecture diagram. Conveys the shape of the work only.
 */
export const systemPath = {
  label: "The path",
  steps: [
    { id: "need", label: "Platform Need" },
    { id: "package", label: "Governed Package" },
    { id: "workflow", label: "Executable Workflow" },
    { id: "audit", label: "Audit Record" },
  ],
} as const;

/**
 * Compact capability-intake entry placed on the first screen. Capture-only, same
 * rules as the full intake (policy §4): chips + free text, hands intent to the
 * demo request section. No processing, no network.
 */
export const compactIntake = {
  label: "Capability intake",
  placeholder: "Describe a workflow you need to make governed and executable…",
  chips: ["Automate a regulated workflow", "Make an AI decision auditable"],
  submitLabel: "Start a demo request",
} as const;

/**
 * The "execution layer" explainer — framed as industrial system clarity.
 * Describes WEAI's own method. Makes no claim about operating third-party runtimes.
 */
export const layer = {
  sectionLabel: "01 / The execution layer",
  title: "Between capable models and real-world outcomes sits a gap.",
  body:
    "Modern models are capable. Turning that capability into work a regulated, " +
    "operational business can actually adopt is a different problem. WEAI specializes " +
    "in that translation — packaging intelligence into capability systems an " +
    "organization can govern, audit, and run on its own terms.",
  pillars: [
    {
      id: "governed",
      label: "Governed",
      text:
        "Every capability package carries explicit scope, ownership, and control " +
        "boundaries — defined before anything is built.",
    },
    {
      id: "auditable",
      label: "Auditable",
      text:
        "Decisions and actions are designed to be inspectable and traceable, so the " +
        "system can be reviewed rather than trusted blindly.",
    },
    {
      id: "executable",
      label: "Executable",
      text:
        "Packages are shaped to be adopted into real operations and human-facing " +
        "services — not left as a demo or a slide.",
    },
  ],
} as const;

/**
 * "How a need becomes a package" — describes WEAI's design method.
 * No runtime claims; this is process, not live execution.
 */
export const method = {
  sectionLabel: "02 / From need to package",
  title: "A platform need becomes a capability package.",
  steps: [
    {
      n: "1",
      title: "Capture the need",
      text:
        "Start from a real platform or operational need, stated in the language of " +
        "the business that has it.",
    },
    {
      n: "2",
      title: "Define governance",
      text:
        "Scope, controls, and accountability are fixed up front so the package is " +
        "defensible from day one.",
    },
    {
      n: "3",
      title: "Package the capability",
      text:
        "Intelligence is composed into an auditable, executable package shaped for " +
        "the target industry.",
    },
    {
      n: "4",
      title: "Hand to operations",
      text:
        "The package is designed to be adopted and run by the organization that " +
        "owns the work.",
    },
  ],
} as const;

/**
 * Reference surfaces. Per policy §3 these are illustrative real-world DOMAINS
 * only — never claimed as WEAI-built, -owned, -dependent, or -executed.
 * DryCleanOne and TaxEnd are stronger reference surfaces; the rest are emerging.
 */
export const references = {
  sectionLabel: "03 / Reference surfaces",
  title: "The kinds of real-world surfaces this work targets.",
  disclaimer:
    "Reference surfaces are illustrative real-world domains shown to convey the type " +
    "of execution problem WEAI addresses. They are not claimed as WEAI-built, " +
    "WEAI-operated, or running on any WEAI runtime.",
  stronger: [
    {
      id: "drycleanone",
      name: "DryCleanOne",
      domain: "Operations · service logistics",
      text:
        "A physical service workflow involving customer order tracking, store " +
        "operations, pricing, pickup, production, delivery, settlement, and audit.",
    },
    {
      id: "taxend",
      name: "TaxEnd",
      domain: "Compliance · financial services",
      text:
        "A regulated professional workflow where calculations, explanations, human " +
        "responsibility, and compliance boundaries must remain inspectable.",
    },
  ],
  emergingLabel: "Emerging domains",
  emerging: [
    { id: "storyone", name: "StoryOne", domain: "Emerging" },
    { id: "acapro", name: "ACAPRO", domain: "Emerging" },
    { id: "longfellows", name: "Longfellows", domain: "Emerging" },
  ],
} as const;

/**
 * Capability intake. Capture-only per policy §4: chips + free text. On submit it
 * populates / scrolls to the demo request section. No processing, routing, or
 * AI response is implied or performed.
 */
export const intake = {
  sectionLabel: "04 / Capability intake",
  title: "Describe the capability you need.",
  helper:
    "Pick a starting point or write your own. Nothing is sent or processed here — " +
    "your description is carried straight into a demo request below.",
  placeholder:
    "e.g. We need a governed way to automate intake triage across our service branches…",
  chips: [
    "Automate a regulated workflow",
    "Govern an existing AI process",
    "Make an AI decision auditable",
    "Package a capability for operations",
    "Reduce manual back-office work",
    "Add controls to a customer-facing service",
  ],
  submitLabel: "Carry this into a demo request",
  capturedLabel: "Captured intent",
} as const;

/**
 * Demo request section. Target of the primary CTA and the intake hand-off.
 * No account/login/checkout — this section only frames the request and shows the
 * captured intent. There is no backend submission in this scope.
 */
export const demo = {
  id: "demo",
  sectionLabel: "05 / Request a demo",
  title: "Request a capability demo",
  body:
    "Tell us the surface you want to make governed, auditable, and executable. " +
    "A capability system demo is a working conversation about your specific need — " +
    "not a product login.",
  intentFieldLabel: "What you want to make executable",
  intentPlaceholder:
    "Describe the capability or workflow you'd want a demo to address…",
  contactNote:
    "In this scope the homepage captures intent only and does not transmit it. " +
    "A future release will connect this to a real intake channel.",
  ctaLabel: "Request a capability demo",
} as const;

export const footer = {
  tagline: "The execution layer between AI intelligence and the real economy.",
  legalNote:
    "Reference surfaces named on this page are illustrative real-world domains and " +
    "are not claimed as WEAI-built, WEAI-operated, or WEAI-executed.",
  copyright: "WEAI.solutions",
} as const;

export const nav = {
  links: [
    { href: "#layer", label: "The layer" },
    { href: "#method", label: "Method" },
    { href: "#references", label: "Surfaces" },
    { href: "#intake", label: "Intake" },
  ],
  cta: "Request a demo",
} as const;
