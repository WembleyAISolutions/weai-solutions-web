import { deliveryMap } from "@/content/landing";

/**
 * Stronger industrial delivery map: a single horizontal flow on desktop, stacked
 * on mobile. Thin lines, mono labels, restrained — the proof that AI capability
 * can be produced, governed, and delivered like infrastructure.
 *
 * All stage labels and captions come from `src/content/landing.ts` (policy §8).
 * No internal component/architecture names are rendered here.
 */
export function DeliveryMap() {
  const { stages } = deliveryMap;

  return (
    <section id="method" className="border-y border-line bg-sunken">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="dot-texture pointer-events-none absolute inset-0 opacity-40"
        />
        <div className="shell section relative">
          <p className="eyebrow">{deliveryMap.sectionLabel}</p>
          <h2 className="t-h2 mt-5 max-w-3xl text-balance text-ink">
            {deliveryMap.title}
          </h2>
          <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-ink-soft">
            {deliveryMap.caption}
          </p>

          <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-6">
            {stages.map((stage, i) => (
              <li
                key={stage.id}
                className="relative flex flex-col bg-paper-raised p-5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line-strong bg-paper font-mono text-xs text-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < stages.length - 1 ? (
                    <span
                      aria-hidden
                      className="font-mono text-line-strong lg:rotate-0"
                    >
                      →
                    </span>
                  ) : (
                    <span
                      aria-hidden
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                  )}
                </div>
                <h3 className="eyebrow mt-4 !tracking-[0.12em] text-ink">
                  {stage.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {stage.caption}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
