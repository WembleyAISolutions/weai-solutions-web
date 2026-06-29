import { whyWEAI } from "@/content/landing";

/**
 * 02 — "Why companies come to WEAI." The commercial "why hire" section: four
 * structured cards answering the buyer's question without exposing architecture.
 */
export function WhyWEAI() {
  return (
    <section id="why" className="border-b border-line bg-band">
      <div className="shell section">
        <p className="eyebrow">{whyWEAI.sectionLabel}</p>
        <h2 className="t-h2 mt-5 max-w-3xl text-balance text-ink">
          {whyWEAI.title}
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
          {whyWEAI.intro}
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {whyWEAI.cards.map((card, i) => (
            <div key={card.id} className="bg-paper-raised p-7">
              <div className="flex items-center justify-between">
                <h3 className="t-h3 text-ink">{card.label}</h3>
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
