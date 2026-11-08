import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProductBlock } from "@/components/ProductBlock";
import { WorkflowBand } from "@/components/WorkflowBand";
import { CaseCard } from "@/components/CaseCard";
import { CtaBand } from "@/components/CtaBand";
import { VERSION_CONVENTION } from "@/content/versioning";
import { opsBlocks, opsCta, opsHero, opsInPractice, OPS_ORDER, opsWorkflow } from "@/content/ops";
import { getProduct } from "@/content/products";
import { caseForPerspective } from "@/content/cases";

export const metadata: Metadata = {
  title: "Ops — WEAI.solutions",
  description:
    "How work is organised and completed: CoStudio, DomainOps, OpsBoard and MailOps — " +
    "the four signal-source projects every WEAI operation runs on.",
};

export default function OpsPage() {
  const practiceCase = caseForPerspective("ops");

  return (
    <>
      <SiteHeader current="ops" />
      <main>
        {/* 00 Hero */}
        <section className="relative overflow-hidden border-b border-line">
          <div aria-hidden className="grid-backdrop pointer-events-none absolute inset-0 opacity-60" />
          <div className="shell relative pb-20 pt-20 sm:pb-28 sm:pt-28">
            <p className="eyebrow mb-7 flex items-center gap-3">
              <span aria-hidden className="inline-block h-2 w-2 rounded-full bg-accent" />
              {opsHero.eyebrow}
            </p>
            <h1 className="t-display max-w-4xl text-balance text-ink">{opsHero.headline}</h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft sm:text-xl">
              {opsHero.lead}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={opsHero.ctaPrimary.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-medium text-paper-raised transition-opacity hover:opacity-90"
              >
                {opsHero.ctaPrimary.label}
                <span aria-hidden>↓</span>
              </a>
              <a
                href={opsHero.ctaSecondary.href}
                className="inline-flex items-center justify-center rounded-full border border-line-strong px-6 py-3 text-base font-medium text-ink transition-colors hover:bg-paper-raised"
              >
                {opsHero.ctaSecondary.label}
              </a>
            </div>
            <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-faint">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{VERSION_CONVENTION.dev}</span>
              <span aria-hidden>·</span>
              <span>{VERSION_CONVENTION.live}</span>
            </p>
          </div>
        </section>

        {/* 01 How they fit together */}
        <section id="workflow" className="border-b border-line bg-band">
          <div className="shell section">
            <p className="eyebrow">{opsWorkflow.eyebrow}</p>
            <h2 className="t-h2 mt-5 max-w-3xl text-balance text-ink">{opsWorkflow.title}</h2>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
              {opsWorkflow.body}
            </p>
            <WorkflowBand />
          </div>
        </section>

        {/* 02–05 Products, by weight */}
        {OPS_ORDER.map((id, i) => {
          const product = getProduct(id);
          const copy = opsBlocks.find((b) => b.id === id);
          if (!product || !copy) return null;
          return <ProductBlock key={id} product={product} copy={copy} flip={i % 2 === 1} band={i % 2 === 1} />;
        })}

        {/* 06 In practice — omitted entirely when no supported case exists */}
        {practiceCase ? (
          <section id="in-practice" className="border-b border-line bg-band">
            <div className="shell section">
              <p className="eyebrow">{opsInPractice.eyebrow}</p>
              <h2 className="t-h2 mt-5 text-ink">{opsInPractice.title}</h2>
              <div className="mt-8">
                <CaseCard item={practiceCase} perspective="ops" />
              </div>
            </div>
          </section>
        ) : null}

        <CtaBand title={opsCta.title} label={opsCta.label} href={opsCta.href} />
      </main>
      <SiteFooter current="ops" />
    </>
  );
}
