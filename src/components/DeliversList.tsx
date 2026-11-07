/**
 * Enumerated package-contents list — the numbered card list first used by the
 * homepage's "What WEAI delivers" section. Extracted so other pages can reuse the
 * same block by copy. Markup is identical to the original inline version.
 */
export type DeliversItem = {
  readonly id: string;
  readonly text: string;
};

export function DeliversList({ items }: { items: readonly DeliversItem[] }) {
  return (
    <ol className="card divide-y divide-line self-start overflow-hidden">
      {items.map((item, i) => (
        <li key={item.id} className="flex items-baseline gap-4 px-6 py-4">
          <span className="font-mono text-xs text-ink-faint">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-pretty leading-relaxed text-ink">
            {item.text}
          </span>
        </li>
      ))}
    </ol>
  );
}
