/**
 * Site navigation (WEB-NAV-001). Top-level pages are Foundation · Ops · Workforce ·
 * Platforms plus the Contact button. Pages that have not shipped yet are rendered
 * as forthcoming, non-link labels — never as placeholder routes.
 */
export type PageId = "foundation" | "ops" | "workforce" | "platforms";

export interface NavItem {
  id: PageId;
  label: string;
  /** Route once the page ships; omitted while the page is forthcoming. */
  href?: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { id: "foundation", label: "Foundation", href: "/foundation" },
  { id: "ops", label: "Ops" },
  { id: "workforce", label: "Workforce" },
  { id: "platforms", label: "Platforms" },
] as const;

export const NAV_CONTACT = { id: "contact", label: "Contact", href: "/contact" } as const;

export const FORTHCOMING_LABEL = "forthcoming";

export const FORTHCOMING_NOTE =
  "Ops, Workforce and Platforms pages are forthcoming.";

export const GITHUB_ORG = {
  label: "GitHub",
  href: "https://github.com/WembleyAISolutions",
} as const;

/** Page labels used wherever a known page id is resolved to its public name. */
export const PAGE_NAMES: Record<PageId, string> = {
  foundation: "Foundation",
  ops: "Ops",
  workforce: "Workforce",
  platforms: "Platforms",
};

export function isPageId(value: string | undefined): value is PageId {
  return value === "foundation" || value === "ops" || value === "workforce" || value === "platforms";
}
