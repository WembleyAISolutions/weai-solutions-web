import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MiniCards } from "@/components/MiniCards";
import { CaseCard } from "@/components/CaseCard";
import { VersionBadge } from "@/components/VersionBadge";
import { CtaBand } from "@/components/CtaBand";
import { getProduct } from "@/content/products";
import { caseForPerspective } from "@/content/cases";
import {
  workforceCta,
  workforceEntry,
  workforceHero,
  workforceInPractice,
  workforceProduction,
  workforceProgress,
  workforcePurpose,
  workforceScenarios,
  workforceSupply,
} from "@/content/workforce";

export const metadata: Metadata = {
  title: "Workforce — WEAI.solutions",
  description:
    "HR-AR OS, WEAI's workforce platform: enterprises bring problems, roles and budgets; " +
    "people, teams and AI bring verifiable supply. Matching, delivery and evidence in one place.",
};

export default function WorkforcePage() {
  const product = getProduct(workforceHero.productId);
  const practiceCase = caseForPerspective("workforce");
  const productUrl = product?.links?.product;

  return (
    <>
      <SiteHeader current="workforce" />
      <main>
        {/* 00 Hero */}
        <section className="relative overflow-hidden border-b border-line">
          <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" />
          <div className="shell relative pb-20 pt-20 sm:pb-28 sm:pt-28">
            <p className="eyebrow mb-7 flex items-center gap-3">
              <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-accent" />
              {workforceHero.eyebrow}
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <p className="display text-2xl text-ink sm:text-3xl">{product?.name ?? "HR-AR OS"}</p>
              <VersionBadge version={product?.version} />
            </div>
            <h1 className="t-display mt-5 max-w-4xl text-balance text-ink">{workforceHero.headline}</h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
              {workforceHero.lead}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={workforceHero.ctaPrimary.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-medium text-paper-raised transition-opacity hover:opacity-90"
              >
                {workforceHero.ctaPrimary.label}
                <span aria-hidden>↓</span>
              </a>
              <a
                href={workforceHero.ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-full border border-line-strong px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-paper-raised"
              >
                {workforceHero.ctaSecondary.label}
              </a>
            </div>
          </div>
        </section>

        {/* 01 Purpose */}
        <section id="purpose" className="border-b border-line">
          <div className="shell section">
            <p className="eyebrow">{workforcePurpose.eyebrow}</p>
            <h2 className="t-h2 mt-5 max-w-3xl text-balance text-ink">{workforcePurpose.title}</h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
              {workforcePurpose.body}
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {workforcePurpose.entries.map((e) => (
                <div key={e.id} className="rounded-2xl border border-accent-soft bg-accent-soft/55 p-6">
                  <p className="eyebrow text-accent">Entry</p>
                  <h3 className="t-h3 mt-3 text-ink">{e.label}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{e.text}</p>
                </div>
              ))}
            </div>
            <MiniCards cards={workforcePurpose.roles} />
            <p className="mt-6 text-sm text-ink-soft">{workforcePurpose.rolesNote}</p>
          </div>
        </section>

        {/* 02 Capability supply */}
        <section id="supply" className="border-b border-line bg-band">
          <div className="shell section">
            <p className="eyebrow">{workforceSupply.eyebrow}</p>
            <h2 className="t-h2 mt-5 max-w-3xl text-balance text-ink">{workforceSupply.title}</h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
              {workforceSupply.body}
            </p>
            <MiniCards cards={workforceSupply.cards} />
          </div>
        </section>

        {/* 03 Roles and work scenarios — stronger tint: the market-facing core */}
        <section id="scenarios" className="border-b border-accent-soft bg-accent-soft/40">
          <div className="shell section">
            <p className="eyebrow text-accent">{workforceScenarios.eyebrow}</p>
            <h2 className="t-h2 mt-5 max-w-3xl text-balance text-ink">{workforceScenarios.title}</h2>
            <ol className="mt-12 grid gap-4 lg:grid-cols-3">
              {workforceScenarios.paths.map((p, i) => (
                <li key={p.id} className="card card-raised flex flex-col p-7">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                    {String.fromCharCode(65 + i)}
                  </p>
                  <h3 className="t-h3 mt-3 text-ink">{p.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <p className="max-w-md text-pretty leading-relaxed text-ink-soft">
                {workforceScenarios.rolePacksIntro}
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {workforceScenarios.rolePacks.map((g) => (
                  <div key={g.group} className="card p-5">
                    <p className="eyebrow">{g.group}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {g.items.map((it) => (
                        <li
                          key={it}
                          className="rounded-full border border-line-strong bg-paper px-3 py-1 text-sm text-ink"
                        >
                          {it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 04 Production support */}
        <section id="production" className="border-b border-line">
          <div className="shell section">
            <p className="eyebrow">{workforceProduction.eyebrow}</p>
            <h2 className="t-h2 mt-5 max-w-3xl text-balance text-ink">{workforceProduction.title}</h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
              {workforceProduction.body}
            </p>
            <ol className="dot-texture mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-5">
              {workforceProduction.steps.map((s, i) => (
                <li key={s.id} className="bg-paper-raised p-5">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-3 font-semibold text-ink">{s.label}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 05 Progress and outcomes */}
        <section id="progress" className="border-b border-line bg-band">
          <div className="shell section">
            <p className="eyebrow">{workforceProgress.eyebrow}</p>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <h2 className="t-h2 max-w-3xl text-balance text-ink">{workforceProgress.title}</h2>
              <VersionBadge version={product?.version} />
            </div>

            {product && product.worksNow.length > 0 ? (
              <div className="mt-10">
                <p className="eyebrow">Works now</p>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {product.worksNow.map((w) => (
                    <li key={w} className="flex gap-3 text-sm leading-relaxed text-ink">
                      <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {workforceProgress.direction.map((d) => (
                <div key={d.version} className="card p-6">
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-ink-faint">
                    Direction · {d.version}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink">{d.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-ink-faint">{workforceProgress.directionNote}</p>

            {product?.nextMilestone ? (
              <p className="mt-8 text-sm text-ink-soft">
                <span className="eyebrow">Next </span>
                {product.nextMilestone}
              </p>
            ) : null}

            <div className="mt-12 max-w-2xl">
              <p className="eyebrow">{workforceProgress.nonGoalsLabel}</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {workforceProgress.nonGoals.map((n) => (
                  <li key={n} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full border border-ink-faint" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 06 Platform entry */}
        <section id="entry" className="border-b border-line">
          <div className="shell section">
            <p className="eyebrow">{workforceEntry.eyebrow}</p>
            <h2 className="t-h2 mt-5 max-w-3xl text-balance text-ink">{workforceEntry.title}</h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
              {workforceEntry.body}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              {productUrl ? (
                <a
                  href={productUrl}
                  rel="noopener"
                  className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-base font-medium text-paper transition-opacity hover:opacity-90"
                >
                  {workforceEntry.enterLabel}
                </a>
              ) : null}
              <a
                href={workforceEntry.contactHref}
                className={
                  productUrl
                    ? "inline-flex items-center justify-center rounded-full border border-line-strong px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-paper-raised"
                    : "inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-base font-medium text-paper transition-opacity hover:opacity-90"
                }
              >
                {workforceEntry.contactLabel}
              </a>
            </div>
          </div>
        </section>

        {/* 07 In practice — omitted entirely when no supported case exists */}
        {practiceCase ? (
          <section id="in-practice" className="border-b border-line bg-band">
            <div className="shell section">
              <p className="eyebrow">{workforceInPractice.eyebrow}</p>
              <h2 className="t-h2 mt-5 text-ink">{workforceInPractice.title}</h2>
              <div className="mt-8">
                <CaseCard item={practiceCase} perspective="workforce" />
              </div>
            </div>
          </section>
        ) : null}

        <CtaBand title={workforceCta.title} label={workforceCta.label} href={workforceCta.href} />
      </main>
      <SiteFooter current="workforce" />
    </>
  );
}
