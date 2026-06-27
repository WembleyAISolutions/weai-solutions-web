import { footer, nav, site } from "@/content/landing";

export function SiteFooter() {
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

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
            >
              {nav.cta}
            </a>
          </nav>
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
