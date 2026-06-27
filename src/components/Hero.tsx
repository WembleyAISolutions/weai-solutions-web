import { hero } from "@/content/landing";
import { SystemPath } from "./SystemPath";
import { CompactIntake } from "./CompactIntake";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="grid-backdrop pointer-events-none absolute inset-0 opacity-60"
      />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-20 sm:pt-28">
        <p className="system-label mb-6 flex items-center gap-3">
          <span
            aria-hidden
            className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
          />
          {hero.eyebrow}
        </p>

        <h1 className="display max-w-4xl text-balance text-4xl font-semibold leading-[1.08] text-ink sm:text-6xl">
          {hero.headline}
        </h1>

        <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
          {hero.subhead}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#demo"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-medium text-paper-raised transition-opacity hover:opacity-90"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#method"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-paper-raised"
          >
            {hero.ctaSecondary}
            <span aria-hidden>→</span>
          </a>
        </div>

        <SystemPath />

        <CompactIntake />
      </div>
    </section>
  );
}
