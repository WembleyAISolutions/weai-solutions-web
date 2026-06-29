/**
 * Centralized landing copy for the WEAI.solutions public homepage.
 *
 * This file is the single source of truth for on-page strings. All claims here
 * are governed by `docs/guardrails/landing-claims-policy.md` — including the
 * public-safe vocabulary and product-line discipline in §9. Do not introduce
 * pricing, login, runtime/API, marketplace, or chatbot framing, and never expose
 * internal trust-core or architecture terms. Locked strings are marked LOCKED.
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
  /** LOCKED (commercial) — see landing-claims-policy.md §6 */
  subhead:
    "WEAI helps organizations turn real workflows into governed AI capability " +
    "packages — scoped, auditable, and ready for the owning team or platform to " +
    "operate.",
  /** Primary CTA — site-wide. */
  ctaPrimary: "Start a capability assessment",
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
    { id: "handoff", label: "Operational Handoff" },
    { id: "audit", label: "Audit Record" },
  ],
} as const;

/**
 * Compact capability-intake entry placed on the first screen. Capture-only (policy
 * §4): chips + free text, hands intent to the assessment/demo section. No
 * processing, no network, no automated AI response.
 */
export const compactIntake = {
  label: "Start with one workflow",
  placeholder:
    "Describe the workflow you want to make AI-ready, auditable, or easier to operate…",
  chips: ["Assess a workflow for AI", "Make a decision process auditable"],
  submitLabel: "Start a capability assessment",
} as const;

/**
 * 01 — The execution layer. WEAI's thesis. No claim about operating third-party
 * runtimes.
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
 * 02 — Why companies come to WEAI. Answers "why would I hire WEAI?" (PR3.1 §B-2).
 */
export const whyWEAI = {
  sectionLabel: "02 / Why companies come to WEAI",
  title: "Why companies come to WEAI.",
  intro:
    "You don't need another model. You need a real workflow turned into something " +
    "your organization can safely operate, own, and audit.",
  cards: [
    {
      id: "ai-ready",
      label: "Make a workflow AI-ready",
      text:
        "You have a real business process, but it is too risky or undefined to " +
        "automate directly.",
    },
    {
      id: "boundary",
      label: "Define the boundary",
      text:
        "WEAI helps define what the capability may do, what it must not do, who owns " +
        "the outcome, and what evidence is needed.",
    },
    {
      id: "package",
      label: "Package the capability",
      text:
        "The workflow is shaped into a governed package with scope, acceptance " +
        "criteria, and handoff requirements.",
    },
    {
      id: "inspectable",
      label: "Keep it inspectable",
      text:
        "The capability leaves records that can be reviewed, improved, and governed " +
        "over time.",
    },
  ],
} as const;

/**
 * 03 — What WEAI delivers. Productizes the service without exposing architecture
 * (PR3.1 §B-3).
 */
export const delivers = {
  sectionLabel: "03 / What WEAI delivers",
  title: "What WEAI delivers.",
  hook:
    "A capability package is not a chatbot, a prompt, or a slide deck. It is a " +
    "governed service package that defines:",
  items: [
    { id: "workflow", text: "The workflow being addressed" },
    { id: "scope", text: "What the AI capability may and may not do" },
    { id: "owner", text: "The human owner responsible for the outcome" },
    { id: "acceptance", text: "The acceptance criteria" },
    { id: "evidence", text: "The audit evidence" },
    { id: "handoff", text: "The handoff path to operations" },
  ],
} as const;

/**
 * 04 — Delivery map. WEAI's engineer → govern → deliver process. Public-safe stage
 * wording only (policy §8); no internal component/architecture names. "Governance
 * Boundary" is a stage marker, not a system reveal. "Auditable Operation" is run by
 * the owning platform, not a WEAI runtime. Anchor: #method.
 */
export const deliveryMap = {
  sectionLabel: "04 / Delivery map",
  title: "How a capability is engineered, governed, and delivered.",
  caption:
    "One pass from a stated need to an operation the owning organization can run and " +
    "audit. WEAI engineers and governs the package; the platform owner operates it.",
  stages: [
    {
      id: "intake",
      label: "Need Intake",
      caption: "We identify one real workflow and the business owner responsible for it.",
    },
    {
      id: "design",
      label: "Capability Design",
      caption:
        "We define what the capability should do, what it must not do, and how " +
        "success is accepted.",
    },
    {
      id: "boundary",
      label: "Governance Boundary",
      caption:
        "Scope, authority, human responsibility, and audit requirements are fixed " +
        "before build.",
    },
    {
      id: "package",
      label: "Production Package",
      caption:
        "The capability is packaged with operating logic, evidence requirements, and " +
        "handoff instructions.",
    },
    {
      id: "handoff",
      label: "Platform Handoff",
      caption: "The owning team or platform receives the package for operation.",
    },
    {
      id: "operation",
      label: "Auditable Operation",
      caption: "The workflow can be run with records that remain inspectable.",
    },
  ],
} as const;

/**
 * 05 — Reference surfaces. Per policy §3 these are independent operational DOMAINS
 * only — never claimed as WEAI-built, -owned, -dependent, or -executed. DryCleanOne
 * and TaxEnd are full evidence cards; the rest are emerging. Each full card carries
 * one "What WEAI packages" row (policy §3) connecting the surface to WEAI's
 * deliverable without claiming WEAI built or operates the business.
 */
export const references = {
  sectionLabel: "05 / Reference surfaces",
  title: "The kinds of real-world surfaces this work targets.",
  disclaimer:
    "Reference surfaces are independent operational domains shown to convey the type " +
    "of execution problem WEAI addresses. They are not claimed as WEAI-built, " +
    "WEAI-operated, or running on any WEAI runtime.",
  strongerLabel: "Operational reference surfaces",
  packagesLabel: "What WEAI packages",
  stronger: [
    {
      id: "drycleanone",
      name: "DryCleanOne",
      tag: "Reference surface",
      domain: "Operations · service logistics",
      text:
        "A physical service workflow spanning customer order tracking, store " +
        "operations, pricing, pickup, production, delivery, settlement, and audit.",
      rows: [
        { label: "Workflow", value: "Physical, human-facing service operation" },
        {
          label: "Order lifecycle",
          value: "Tracking → production → pickup → delivery",
        },
        {
          label: "Settlement",
          value: "Ready status visible before payment; payment at pickup",
        },
        { label: "Audit", value: "Order and settlement records retained" },
      ],
      packages:
        "A governed order-lifecycle capability that makes status, settlement, and " +
        "audit records inspectable.",
    },
    {
      id: "taxend",
      name: "TaxEnd",
      tag: "Reference surface",
      domain: "Compliance · financial services",
      text:
        "A regulated professional workflow where calculations, explanations, human " +
        "responsibility, and compliance boundaries must remain inspectable.",
      rows: [
        { label: "Surface", value: "Regulated calculation workflow" },
        { label: "Explanation", value: "Results are explained, not opaque" },
        { label: "Responsibility", value: "The human user remains accountable" },
        { label: "Boundary", value: "Compliance limits stay inspectable" },
      ],
      packages:
        "A governed calculation capability where explanations, boundaries, and " +
        "responsibility remain inspectable.",
    },
  ],
  emergingLabel: "Emerging capability domains",
  emergingNote:
    "Future export surfaces — early-stage, with no operational or maturity claims.",
  emerging: [
    { id: "storyone", name: "StoryOne", domain: "Emerging" },
    { id: "acapro", name: "ACAPRO", domain: "Emerging" },
    { id: "longfellows", name: "Longfellows", domain: "Emerging" },
  ],
} as const;

/**
 * 06 — How an engagement works. The commercial process (PR3.1 §B-6): how a buyer
 * works with WEAI, without revealing IP.
 */
export const engagement = {
  sectionLabel: "06 / How an engagement works",
  title: "How an engagement works.",
  steps: [
    {
      n: "1",
      title: "Capability assessment",
      text:
        "We review one workflow and determine whether it can become a governed AI " +
        "capability.",
    },
    {
      n: "2",
      title: "Package design",
      text:
        "We define the boundary, acceptance criteria, human responsibility, and " +
        "evidence needed.",
    },
    {
      n: "3",
      title: "Capability build",
      text: "WEAI packages the capability for the operating context.",
    },
    {
      n: "4",
      title: "Handoff",
      text:
        "The owning team or platform receives the package and operating guidance.",
    },
    {
      n: "5",
      title: "Review",
      text:
        "The capability can be reviewed, improved, or extended as the workflow " +
        "changes.",
    },
  ],
} as const;

/**
 * 07 — Intake. Capture-only per policy §4: chips + free text. On submit it
 * populates / scrolls to the assessment section. It starts a capability assessment
 * conversation, NOT an automated AI response.
 */
export const intake = {
  sectionLabel: "07 / Start with one workflow",
  title: "Start with one workflow.",
  helper:
    "Tell us about one workflow you want to make AI-ready, auditable, or easier to " +
    "operate. This starts a capability assessment conversation, not an automated AI " +
    "response.",
  placeholder:
    "Describe the workflow you want to make AI-ready, auditable, or easier to operate…",
  chips: [
    "Assess a workflow for AI",
    "Package a customer-facing service",
    "Make a decision process auditable",
    "Reduce manual back-office work",
    "Prepare an AI capability for operations",
  ],
  submitLabel: "Start a capability assessment",
  capturedLabel: "Captured intent",
} as const;

/**
 * 08 — Capability assessment request. Target of the primary CTA and the intake
 * hand-off. No account/login/checkout. There is no backend submission in this
 * scope: intent is captured on-page only and is not transmitted or auto-answered.
 */
export const demo = {
  id: "demo",
  sectionLabel: "08 / Start a capability assessment",
  title: "Start a capability assessment",
  body:
    "Tell us the workflow you want to make governed, auditable, and operable. A " +
    "capability assessment is a working conversation about your specific workflow — " +
    "not a product login and not an automated AI response.",
  intentFieldLabel: "The workflow you want to make AI-ready",
  intentPlaceholder:
    "Describe the workflow or capability you'd want assessed…",
  contactNote:
    "In this scope the homepage captures your request on this page only — nothing is " +
    "transmitted and there is no automated AI response. It is a starting point you " +
    "carry into a capability assessment conversation. As real follow-up channels are " +
    "added, this wording will be updated to match.",
  ctaLabel: "Start a capability assessment",
} as const;

export const footer = {
  tagline: "The execution layer between AI intelligence and the real economy.",
  legalNote:
    "Reference surfaces named on this page are independent operational domains and " +
    "are not claimed as WEAI-built, WEAI-operated, or WEAI-executed.",
  copyright: "WEAI.solutions",
} as const;

export const nav = {
  links: [
    { href: "#layer", label: "The layer" },
    { href: "#deliver", label: "What we deliver" },
    { href: "#references", label: "Surfaces" },
    { href: "#engagement", label: "Engagement" },
  ],
  cta: "Start a capability assessment",
} as const;
