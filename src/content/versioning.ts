/**
 * Public version convention. A product version is the product's own public
 * version; repo or package versions never substitute for it. Shown wherever a
 * version appears.
 */
export const VERSION_CONVENTION = {
  dev: "v0.x — development-stage product at its confirmed version",
  live: "v1.0 — formally launched into operation",
  later: "later versions — subsequent operational releases",
} as const;
