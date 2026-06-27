import { nav, site } from "@/content/landing";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-baseline gap-2.5">
          <span className="display text-lg font-semibold tracking-tight text-ink">
            {site.wordmark}
          </span>
          <span className="system-label hidden sm:inline">
            {site.systemLabel}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#demo"
          className="rounded-full border border-line-strong bg-ink px-4 py-2 text-sm font-medium text-paper transition-opacity hover:opacity-90"
        >
          {nav.cta}
        </a>
      </div>
    </header>
  );
}
