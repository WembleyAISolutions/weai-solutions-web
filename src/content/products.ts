/**
 * Product records — the single source of product facts for every page.
 *
 * Rules (WEB-NAV-001 A3): unknown scalars are omitted; unknown lists are `[]`;
 * links are optional; never the string `TODO`. An unconfirmed `version` is omitted
 * and therefore not rendered. Ownership after the baseline: Ops owns the `ops`
 * records, Workforce owns `hr-ar-os`, Platforms owns the `platforms` records.
 * The record *types* have one implementation owner; page agents edit records only.
 *
 * `purpose` is filled only where existing public copy supports it; otherwise it is
 * the empty string until confirmed (components omit an empty purpose).
 */
export type Line = "foundation" | "ops" | "workforce" | "payments" | "platforms";

export interface Product {
  id: string;
  name: string; // public name, e.g. 'HR-AR OS'
  line: Line;
  group?: string; // Platforms: industry / application domain
  purpose: string;
  intendedUser?: string;
  problem?: string; // Platforms: the customer problem, shown in the card
  version?: string; // public product version; omit when unconfirmed
  worksNow: string[]; // empty when unknown
  nextMilestone?: string; // no invented dates
  links?: { product?: string; demo?: string; github?: string };
  /** Real product screenshot under /public. Omitted until one exists — never a mock-up. */
  screenshot?: { src: string; alt: string };
}

export const PRODUCTS: readonly Product[] = [
  // Foundation-level record — exists for the version badge only.
  { id: "security-shield", name: "Security Shield", line: "foundation", purpose: "", worksNow: [] },

  // Ops — ordered by weight (WEB-NAV-002): CoStudio · DomainOps · OpsBoard · MailOps.
  // Copy states the pain point and the direction, not the mechanism. No versions
  // are confirmed; `worksNow` stays empty until the Owner confirms each item.
  {
    id: "costudio",
    name: "CoStudio",
    line: "ops",
    purpose:
      "The platform layer of Ops: designed as a router and connector between agents " +
      "and between models, so a piece of work survives the switch from one to the next.",
    intendedUser: "Teams running more than one agent, or one agent across more than one model.",
    problem:
      "Agents from the same vendor cannot talk to each other. Switching models loses " +
      "context, invites hallucination, runs out of memory and drags conversations past " +
      "their useful length. Projects stall in the gaps between tools.",
    worksNow: [],
  },
  {
    id: "domainops",
    name: "DomainOps",
    line: "ops",
    purpose:
      "The identity layer an agent needs before it goes live — domain, mailbox, DNS, " +
      "certificates — designed so they can be chosen, bought, configured and migrated " +
      "in one place.",
    intendedUser: "Anyone putting an agent, a product or a company online.",
    problem:
      "Hundreds of suffixes; the obvious name is taken or priced for speculation; " +
      "registrars bundle services nobody asked for and bill mailboxes per head. " +
      "The right combination (weai.solutions + weai.au; StoryOne → .life) takes " +
      "judgement most people do not have time for.",
    worksNow: [],
  },
  {
    id: "opsboard",
    name: "OpsBoard",
    line: "ops",
    purpose:
      "The supervision board: designed to put many owners, many agents and many " +
      "projects on one surface, with the human decision points on record.",
    intendedUser: "Owners and operators who need to see everything in flight without opening every tool.",
    problem:
      "Work spread across agents and projects has no single place where a person can " +
      "see what is waiting on them, what has been decided, and what moved on without " +
      "them.",
    worksNow: [],
  },
  {
    id: "mailops",
    name: "MailOps",
    line: "ops",
    purpose:
      "The smallest unit of signal: designed as one mailbox per agent, pulling from " +
      "many sources and handing on a structured signal with its origin attached.",
    intendedUser: "Any agent that has to read and act on email.",
    problem:
      "Email is still where most work arrives, and it arrives unstructured. An agent " +
      "that reads it directly has no record of what came in, from where, or why it " +
      "acted.",
    worksNow: [],
  },

  // Workforce
  { id: "hr-ar-os", name: "HR-AR OS", line: "workforce", purpose: "", worksNow: [] },

  // Platforms
  {
    id: "drycleanone",
    name: "DryCleanOne",
    line: "platforms",
    purpose:
      "A physical service workflow spanning customer order tracking, store operations, " +
      "pricing, pickup, production, delivery, settlement, and audit.",
    worksNow: [],
  },
  {
    id: "taxend",
    name: "TaxEnd",
    line: "platforms",
    purpose:
      "A regulated professional workflow where calculations, explanations, human " +
      "responsibility, and compliance boundaries must remain inspectable.",
    worksNow: [],
  },
  { id: "millionproperty", name: "MillionProperty", line: "platforms", purpose: "", worksNow: [] },
  { id: "acapro", name: "ACAPRO", line: "platforms", purpose: "", worksNow: [] },
  { id: "storyone", name: "StoryOne", line: "platforms", purpose: "", worksNow: [] },
  { id: "agencyone", name: "AgencyOne", line: "platforms", purpose: "", worksNow: [] },
  { id: "skilltok", name: "Skilltok", line: "platforms", purpose: "", worksNow: [] },
  { id: "godeliveryone", name: "GoDeliveryOne", line: "platforms", purpose: "", worksNow: [] },
  { id: "askposs", name: "AskPOSS", line: "platforms", purpose: "", worksNow: [] },
  { id: "cleansupply", name: "CleanSupply", line: "platforms", purpose: "", worksNow: [] },
];

export function getProduct(id: string | undefined): Product | undefined {
  if (!id) return undefined;
  return PRODUCTS.find((p) => p.id === id);
}

export function productsByLine(line: Line): Product[] {
  return PRODUCTS.filter((p) => p.line === line);
}
