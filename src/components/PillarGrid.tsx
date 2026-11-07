/**
 * Three-card "pillar" row — the numbered hairline card grid first used by the
 * homepage's "Why WEAI exists" section. Extracted so other pages can reuse the
 * same block by copy. Markup is identical to the original inline version.
 */
export type Pillar = {
  readonly id: string;
  readonly label: string;
  readonly text: string;
};

export function PillarGrid({ pillars }: { pillars: readonly Pillar[] }) {
  return (
    <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
      {pillars.map((pillar, i) => (
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
  );
}
