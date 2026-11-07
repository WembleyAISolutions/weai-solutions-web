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
export type Line = "foundation" | "ops" | "workforce" | "platforms";

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
}

export const PRODUCTS: readonly Product[] = [
  // Foundation-level record — exists for the version badge only.
  { id: "security-shield", name: "Security Shield", line: "foundation", purpose: "", worksNow: [] },

  // Ops
  { id: "opsboard", name: "OpsBoard", line: "ops", purpose: "", worksNow: [] },
  { id: "costudio", name: "CoStudio", line: "ops", purpose: "", worksNow: [] },
  { id: "mailops", name: "MailOps", line: "ops", purpose: "", worksNow: [] },

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
