import type { MiniCard } from "@/content/foundation";

/**
 * Three small hairline cards on a lighter terracotta-tinted block (A6: the accent
 * may appear as larger, lighter-tinted blocks behind mini-cards).
 */
export function MiniCards({ cards }: { cards: readonly MiniCard[] }) {
  return (
    <div className="mt-12 rounded-2xl border border-accent-soft bg-accent-soft/30 p-3 sm:p-4">
      <div className="grid gap-3 sm:grid-cols-3">
        {cards.map((card) => (
          <div key={card.id} className="card p-5">
            <h3 className="text-base font-semibold text-ink">{card.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
