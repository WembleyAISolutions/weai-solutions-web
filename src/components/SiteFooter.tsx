import { footer, site } from "@/content/landing";
import {
  FORTHCOMING_LABEL,
  FORTHCOMING_NOTE,
  GITHUB_ORG,
  NAV_CONTACT,
  NAV_ITEMS,
  type PageId,
} from "@/content/nav";

type Current = PageId | "contact" | undefined;

export function SiteFooter({ current }: { current?: Current }) {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-8 border-b border-line pb-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-baseline gap-2.5">
              <span className="display text-lg font-semibold text-ink">
                {site.wordmark}
              </span>
              <span className="system-label">{site.systemLabel}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              {footer.tagline}
            </p>
          </div>

          <div>
            <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3">
              {NAV_ITEMS.map((item) =>
                item.href ? (
                  <a
                    key={item.id}
                    href={item.href}
                    aria-current={current === item.id ? "page" : undefined}
                    className={
                      current === item.id
                        ? "text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4"
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
              <a
                href={NAV_CONTACT.href}
                aria-current={current === "contact" ? "page" : undefined}
                className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
              >
                {NAV_CONTACT.label}
              </a>
              <a
                href={GITHUB_ORG.href}
                rel="noopener"
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {GITHUB_ORG.label}
              </a>
            </nav>
            <p className="mt-3 text-xs text-ink-faint">{FORTHCOMING_NOTE}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl leading-relaxed">{footer.legalNote}</p>
          <p className="shrink-0">
            © {footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
