import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PillarGrid } from "@/components/PillarGrid";
import { DeliversList } from "@/components/DeliversList";
import { MiniCards } from "@/components/MiniCards";
import { CaseCard } from "@/components/CaseCard";
import { VersionBadge } from "@/components/VersionBadge";
import { CtaBand } from "@/components/CtaBand";
import { delivers, layer } from "@/content/landing";
import {
  foundationCta,
  foundationHero,
  foundationInPractice,
  foundationPackage,
  foundationWhy,
  pillars,
  securityShield,
  type PillarSection,
} from "@/content/foundation";
import { getProduct, PRODUCTS } from "@/content/products";
import { caseForPerspective } from "@/content/cases";

export const metadata: Metadata = {
  title: "Foundation — WEAI.solutions",
  description:
    "The foundation for WEAI's capabilities and platforms: governance, harness, " +
    "runtime, gateway, and the security shield across them.",
};

/**
 * One-line progress note built only from confirmed records: products whose
 * `worksNow` names the pillar. Returns undefined when nothing is confirmed.
 */
function progressNote(section: PillarSection): string | undefined {
  const names = section.progressFrom
    .map((id) => getProduct(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p && p.worksNow.length > 0))
    .map((p) => p.name);
  if (names.length === 0) return undefined;
  return `Currently connected: ${names.join(" · ")}.`;
}

function GithubRow({ links }: { links: PillarSection["github"] }) {
  if (links.length === 0) return null;
  return (
    <p className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink-soft">
      <span>On GitHub</span>
      <span aria-hidden>→</span>
      {links.map((l, i) => (
        <span key={l.href} className="inline-flex items-center gap-2">
          {i > 0 ? <span aria-hidden className="text-ink-faint">·</span> : null}
          <a href={l.href} rel="noopener" className="font-medium text-accent hover:opacity-80">
            {l.label}
          </a>
        </span>
      ))}
    </p>
  );
}

function Pillar({ section, band }: { section: PillarSection; band: boolean }) {
  const note = progressNote(section);
  return (
    <section id={section.id} className={"border-b border-line" + (band ? " bg-band" : "")}>
      <div className="shell section">
        <p className="eyebrow">{section.eyebrow}</p>
        <h2 className="t-h2 mt-5 max-w-3xl text-balance text-ink">{section.title}</h2>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
          {section.body}
        </p>
        <MiniCards cards={section.cards} />
        {note ? <p className="mt-8 text-sm text-ink-soft">{note}</p> : null}
        <GithubRow links={section.github} />
        {section.closingLine ? (
          <p className="mt-8 text-sm font-medium text-ink-faint">{section.closingLine}</p>
        ) : null}
      </div>
    </section>
  );
}

export default function FoundationPage() {
  const shield = getProduct(securityShield.id);
  const protectedNames = PRODUCTS.filter(
    (p) => p.line === "platforms" && p.worksNow.some((w) => /security shield/i.test(w)),
  ).map((p) => p.name);
  const practiceCase = caseForPerspective("foundation");

  return (
    <>
      <SiteHeader current="foundation" />
      <main>
        {/* 00 Hero */}
        <section className="relative overflow-hidden border-b border-line">
          <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" />
          <div className="shell relative pb-20 pt-20 sm:pb-28 sm:pt-28">
            <p className="eyebrow mb-7 flex items-center gap-3">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {foundationHero.eyebrow}
            </p>
            <h1 className="t-display max-w-4xl text-balance text-ink">{foundationHero.headline}</h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
              {foundationHero.lead}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={foundationHero.ctaPrimary.href}
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-medium text-paper-raised transition-opacity hover:opacity-90"
              >
                {foundationHero.ctaPrimary.label}
              </a>
              <a
                href={foundationHero.ctaSecondary.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-paper-raised"
              >
                {foundationHero.ctaSecondary.label}
                <span aria-hidden>↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* 01 Why a foundation — copied from Home "Why WEAI exists" */}
        <section id="why" className="border-b border-line">
          <div className="shell section">
            <p className="eyebrow">{foundationWhy.eyebrow}</p>
            <h2 className="t-h2 mt-5 max-w-3xl text-balance text-ink">{foundationWhy.title}</h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
              {layer.body}
            </p>
            <PillarGrid pillars={layer.pillars} />
          </div>
        </section>

        {/* 02–05 Governance · Harness · Runtime · Gateway */}
        {pillars.map((section, i) => (
          <Pillar key={section.id} section={section} band={i % 2 === 0} />
        ))}

        {/* 06 Security Shield */}
        <section id={securityShield.id} className="border-b border-line">
          <div className="shell section">
            <p className="eyebrow">{securityShield.eyebrow}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <h2 className="t-h2 max-w-3xl text-balance text-ink">{securityShield.title}</h2>
              <VersionBadge version={shield?.version} />
            </div>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
              {securityShield.body}
            </p>
            <MiniCards cards={securityShield.cards} />
            {protectedNames.length > 0 ? (
              <p className="mt-8 text-sm text-ink-soft">
                Currently protected: {protectedNames.join(" · ")}.
              </p>
            ) : null}
          </div>
        </section>

        {/* 07 In practice — omitted entirely when no supported case exists */}
        {practiceCase ? (
          <section id="in-practice" className="border-b border-line bg-band">
            <div className="shell section">
              <p className="eyebrow">{foundationInPractice.eyebrow}</p>
              <div className="mt-8">
                <CaseCard item={practiceCase} perspective="foundation" />
              </div>
            </div>
          </section>
        ) : null}

        {/* 08 The package — copied from Home "What WEAI delivers" */}
        <section id="package" className="border-b border-line">
          <div className="shell section">
            <p className="eyebrow">{foundationPackage.eyebrow}</p>
            <div className="mt-5 grid gap-x-12 gap-y-8 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <h2 className="t-h2 max-w-xl text-balance text-ink">{foundationPackage.title}</h2>
                <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-ink-soft">
                  {delivers.hook}
                </p>
              </div>
              <DeliversList items={delivers.items} />
            </div>
          </div>
        </section>

        <CtaBand title={foundationCta.title} label={foundationCta.label} href={foundationCta.href} />
      </main>
      <SiteFooter current="foundation" />
    </>
  );
}
