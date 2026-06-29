import { layer } from "@/content/landing";

export function ExecutionLayer() {
  return (
    <section id="layer" className="border-b border-line">
      <div className="shell section">
        <p className="eyebrow">{layer.sectionLabel}</p>
        <h2 className="t-h2 mt-5 max-w-3xl text-balance text-ink">
          {layer.title}
        </h2>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
          {layer.body}
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {layer.pillars.map((pillar, i) => (
            <div key={pillar.id} className="bg-paper-raised p-7">
              <div className="flex items-center justify-between">
                <span className="t-h3 text-ink">{pillar.label}</span>
                <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
