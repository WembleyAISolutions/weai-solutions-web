import { engagement } from "@/content/landing";

/**
 * 06 — "How an engagement works." The commercial engagement process (five steps):
 * how a buyer works with WEAI from assessment to review, without revealing IP.
 */
export function Engagement() {
  return (
    <section id="engagement" className="border-b border-line bg-paper-raised">
      <div className="shell section">
        <p className="eyebrow">{engagement.sectionLabel}</p>
        <h2 className="t-h2 mt-5 max-w-3xl text-balance text-ink">
          {engagement.title}
        </h2>

        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {engagement.steps.map((step) => (
            <li key={step.n} className="bg-paper p-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong font-mono text-sm text-ink">
                {step.n}
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {step.text}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-faint">
          {engagement.note}
        </p>
      </div>
    </section>
  );
}
