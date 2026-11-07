/**
 * Foundation page copy (WEB-NAV-001 A4, approved). Homepage material is reused by
 * copy, not move. Progress notes and the case card are drawn from the records at
 * render time and omitted when nothing is confirmed.
 */
export const foundationHero = {
  eyebrow: "WEAI · FOUNDATION",
  headline: "The foundation for WEAI's capabilities and platforms.",
  lead:
    "Governance, harness, runtime and gateway provide the foundation for how WEAI " +
    "capabilities are designed to operate. Explore their roles, current " +
    "implementation and the products being connected to them.",
  ctaPrimary: { label: "Contact", href: "/contact?from=foundation" },
  ctaSecondary: { label: "See the four pillars", href: "#governance" },
} as const;

export const foundationWhy = {
  eyebrow: "01 / Why a foundation",
  title: "Capable models do not become safe operations on their own.",
} as const;

export type MiniCard = { readonly id: string; readonly label: string; readonly text: string };

export interface PillarSection {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly body: string;
  readonly cards: readonly MiniCard[];
  /** Rendered as "On GitHub → a · b". Omitted when empty. */
  readonly github: readonly { readonly label: string; readonly href: string }[];
  /** Product ids whose confirmed status would feed the one-line progress note. */
  readonly progressFrom: readonly string[];
  readonly closingLine?: string;
}

const GH = "https://github.com/WembleyAISolutions";

export const pillars: readonly PillarSection[] = [
  {
    id: "governance",
    eyebrow: "02 / Governance",
    title: "The rules are written, versioned, and machine-held.",
    body:
      "The corridors an agent may move in are written before anything is built: " +
      "operating model, communication protocol, terminology discipline, charter and " +
      "contracts. The rules are versioned like code and enforced by the WEAI kernel, " +
      "so a change to the rules is a change on record — reviewed, adjudicated and " +
      "merged, never applied silently.",
    cards: [
      { id: "corridors", label: "Written corridors", text: "Scope, authority and human responsibility fixed in text before build." },
      { id: "cadence", label: "Cadenced correction", text: "Rules are reviewed on a schedule and amended through the same pipeline as code." },
      { id: "responsibility", label: "Defined responsibility", text: "Human responsibility and escalation points are defined; routine work proceeds within its established scope." },
    ],
    github: [
      { label: "weai-charter", href: `${GH}/weai-charter` },
      { label: "weai-contracts", href: `${GH}/weai-contracts` },
    ],
    progressFrom: [],
  },
  {
    id: "harness",
    eyebrow: "03 / Harness",
    title: "A model-agnostic control frame for agents.",
    body:
      "The model supplies intelligence; the harness supplies discipline. It defines " +
      "what an agent can see, which tools it may call, how each step's output is " +
      "checked, what happens on failure, and what is recorded. Model independence is " +
      "a design principle of the harness: the controls are specified separately from " +
      "the model underneath, so they can stay constant as models change.",
    cards: [
      { id: "bounded", label: "Bounded", text: "Actions run inside a declared scope with a declared tool set." },
      { id: "checked", label: "Checked", text: "Each step's output is validated before the next step runs." },
      { id: "recorded", label: "Recorded", text: "Inputs, decisions and outputs are kept as inspectable evidence." },
    ],
    // weai-harness is not public at PR time — link row omitted (A4 §03).
    github: [],
    progressFrom: [],
  },
  {
    id: "runtime",
    eyebrow: "04 / Runtime",
    title: "Capabilities run under contract.",
    body:
      "A capability is not deployed loosely. It binds to a runtime contract that " +
      "states what it may do, what it must not do, who owns the outcome, what counts " +
      "as acceptance, and what evidence it must leave behind. The runtime integrates " +
      "execution against that contract and returns result evidence alongside the " +
      "result. How a capability is produced is a separate lifecycle, described under " +
      "Workforce.",
    cards: [
      { id: "binding", label: "Contract binding", text: "A capability is bound to its runtime contract before it runs." },
      { id: "integration", label: "Execution integration", text: "What the capability does is integrated against the bound contract." },
      { id: "evidence", label: "Result evidence", text: "Each result is returned together with the evidence behind it." },
    ],
    github: [{ label: "weai-contracts", href: `${GH}/weai-contracts` }],
    progressFrom: [],
  },
  {
    id: "gateway",
    eyebrow: "05 / Gateway",
    title: "One gate for connected channels.",
    body:
      "For connected channels and integrations — email, forms, webhooks and API " +
      "calls — signals enter through a gateway where each is authenticated, " +
      "normalised and tagged with its origin before being routed onward. The gateway " +
      "keeps the record of what came in.",
    cards: [
      { id: "authenticated", label: "Authenticated", text: "Callers are identified before anything is routed." },
      { id: "normalised", label: "Normalised", text: "Different channels become one signal shape." },
      { id: "routed", label: "Routed", text: "Signals are routed onward with their origin attached." },
    ],
    github: [],
    progressFrom: [],
    closingLine: "Continues in Ops",
  },
];

export const securityShield = {
  id: "security-shield",
  eyebrow: "06 / Security Shield",
  title: "Security engineering across the layers.",
  body:
    "The Security Shield is the protection layer applied across WEAI platforms as " +
    "they are connected to it. It sits alongside the four pillars rather than above " +
    "them: Governance decides what is allowed; the Shield ensures nothing outside " +
    "that decision gets through — segment isolation, authorisation checks at each " +
    "boundary, and a record of every denial.",
  cards: [
    { id: "isolated", label: "Isolated", text: "A segment reaches only what it is authorised to reach." },
    { id: "boundary", label: "Checked at each boundary", text: "Authorisation is re-verified, not inherited." },
    { id: "denials", label: "Denials on record", text: "Every refusal is logged as evidence." },
  ],
} as const;

export const foundationInPractice = { eyebrow: "07 / In practice" } as const;

export const foundationPackage = {
  eyebrow: "08 / The package",
  title: "What leaves the foundation.",
} as const;

export const foundationCta = {
  title: "Want to see the foundation under a real workflow?",
  label: "Contact",
  href: "/contact?from=foundation",
} as const;
