/**
 * Ops page copy (WEB-NAV-002). Ops is the signal-source line: four products, no
 * more. Blocks are ordered by weight (CoStudio · DomainOps · OpsBoard · MailOps);
 * the workflow band runs the other way, small to large, and DomainOps sits under
 * it as the precondition. Copy states pain points and direction, never mechanism.
 */

export const opsHero = {
  eyebrow: "WEAI · OPS",
  headline: "How work is organised and completed.",
  lead:
    "Four projects for the signals every operation runs on — the platform that " +
    "connects agents, the identity they need before going live, the board that " +
    "supervises them, and the mailbox where most work still arrives. Each one " +
    "answers a pain that is already here.",
  ctaPrimary: { label: "See the four projects", href: "#costudio" },
  ctaSecondary: { label: "Contact", href: "/contact?from=ops" },
} as const;

/** Product ids in display order — by weight, largest first. */
export const OPS_ORDER = ["costudio", "domainops", "opsboard", "mailops"] as const;

export interface OpsBlockCopy {
  readonly id: (typeof OPS_ORDER)[number];
  readonly number: string;
  /** Short role word shown with the eyebrow. */
  readonly role: string;
  /** Direction: what WEAI is building here. Planned until the record says otherwise. */
  readonly direction: readonly string[];
  /** Exits. `product`/`demo` come from the record's links; `enquire` is always present. */
  readonly enquireLabel: string;
}

export const opsBlocks: readonly OpsBlockCopy[] = [
  {
    id: "costudio",
    number: "02",
    role: "Platform",
    direction: [
      "Route one piece of work across agents and models without losing its thread",
      "Connect agents that cannot otherwise reach each other",
      "Keep the record of who did what, so the result is reviewable",
    ],
    enquireLabel: "Enquire about CoStudio",
  },
  {
    id: "domainops",
    number: "03",
    role: "Identity & deployment",
    direction: [
      "Domain trading — search, suggest, register, transfer in; no bundling",
      "DNS and name-server hosting",
      "Certificates and mail security — SSL, SPF, DKIM, DMARC in one step",
      "Mailbox identity assigned by role and authority, not per agent",
    ],
    enquireLabel: "Enquire about DomainOps",
  },
  {
    id: "opsboard",
    number: "04",
    role: "Supervision",
    direction: [
      "One board for many owners, agents and projects",
      "Human decision points marked and kept on record",
      "Derived views of what is in flight, grouped by line and status",
    ],
    enquireLabel: "Enquire about OpsBoard",
  },
  {
    id: "mailops",
    number: "05",
    role: "Signal unit",
    direction: [
      "One mailbox per agent, reading from many sources",
      "Every message becomes a structured signal with its origin attached",
    ],
    enquireLabel: "Enquire about MailOps",
  },
];

export const opsWorkflow = {
  eyebrow: "01 / How they fit together",
  title: "Ordered by weight above. Signals flow the other way — small to large.",
  body:
    "The blocks below are arranged by how much each one carries. The flow of a " +
    "signal runs in the opposite direction: it arrives in a mailbox, is routed and " +
    "supervised on the board, and is executed on the platform. DomainOps is not a " +
    "station on that path — it is the precondition under all of it.",
  stations: [
    { id: "mailops", label: "Intake · smallest unit", text: "A mailbox per agent turns incoming mail into a structured signal." },
    { id: "opsboard", label: "Supervision", text: "The signal is routed, and the human decision points are recorded." },
    { id: "costudio", label: "Platform · execution", text: "Work runs across agents and models; the result is reviewable." },
  ],
  /** Connection status between consecutive stations. `built` only when confirmed. */
  links: [
    { from: "mailops", to: "opsboard", label: "signal", status: "planned" as const },
    { from: "opsboard", to: "costudio", label: "task", status: "planned" as const },
  ],
  precondition: {
    id: "domainops",
    label: "Precondition",
    text: "Domain, mailbox, DNS and certificates — the identity every agent must have before any signal above can exist.",
  },
} as const;

export const opsInPractice = {
  eyebrow: "06 / In practice",
  title: "How work was executed.",
} as const;

export const opsCta = {
  title: "Want to see these four under your own workflow?",
  label: "Contact",
  href: "/contact?from=ops",
} as const;

export const opsLabels = {
  pain: "The pain",
  direction: "Direction",
  planned: "planned",
  worksNow: "Works now",
  next: "Next",
  openProduct: "Open",
  watchDemo: "Watch demo",
  screenshotMissing: "Screenshot follows once the product surface is confirmed.",
} as const;
