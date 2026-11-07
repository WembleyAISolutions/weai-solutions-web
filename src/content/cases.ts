import type { PageId } from "./nav";

/**
 * Case records. Verified evidence stays in the record; only customer-facing
 * summary copy is rendered. No internal evidence or private source material is
 * published. Empty until a supported case exists.
 */
export interface Case {
  id: string;
  problem: string;
  used: string[]; // product ids
  implemented: string;
  evidence: "demonstration" | "pilot" | "operational";
  result: string; // qualitative allowed; measured only when supported
  destination?: string;
  perspectives?: Partial<Record<PageId, string>>;
}

export const CASES: readonly Case[] = [];

/** First case that carries a summary for the given perspective, if any. */
export function caseForPerspective(perspective: PageId): Case | undefined {
  return CASES.find((c) => c.perspectives?.[perspective]);
}
