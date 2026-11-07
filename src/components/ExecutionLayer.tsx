import { layer } from "@/content/landing";
import { PillarGrid } from "./PillarGrid";

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

        <PillarGrid pillars={layer.pillars} />
      </div>
    </section>
  );
}
