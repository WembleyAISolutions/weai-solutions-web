import { site } from "@/content/landing";
import { FORTHCOMING_LABEL, NAV_CONTACT, NAV_ITEMS, type PageId } from "@/content/nav";

type Current = PageId | "contact" | undefined;

/**
 * Site header. `current` marks the active top-level item (underline + weight);
 * items without an href are forthcoming and render as muted, non-interactive text.
 */
export function SiteHeader({ current }: { current?: Current }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-baseline gap-2.5">
          <span className="display text-lg font-semibold tracking-tight text-ink">
            {site.wordmark}
          </span>
          <span className="system-label hidden sm:inline">
            {site.systemLabel}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item) =>
            item.href ? (
              <a
                key={item.id}
                href={item.href}
                aria-current={current === item.id ? "page" : undefined}
                className={
                  current === item.id
                    ? "text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-8"
                    : "text-sm text-ink-soft transition-colors hover:text-ink"
                }
              >
                {item.label}
              </a>
            ) : (
              <span
                key={item.id}
                aria-disabled="true"
                title="Forthcoming"
                className="cursor-default select-none text-sm text-ink-faint/70"
              >
                {item.label}
                <span className="sr-only"> ({FORTHCOMING_LABEL})</span>
              </span>
            ),
          )}
        </nav>

        <a
          href={NAV_CONTACT.href}
          aria-current={current === "contact" ? "page" : undefined}
          className="hidden whitespace-nowrap rounded-full border border-line-strong bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90 sm:inline-flex"
        >
          {NAV_CONTACT.label}
        </a>
      </div>
    </header>
  );
}
