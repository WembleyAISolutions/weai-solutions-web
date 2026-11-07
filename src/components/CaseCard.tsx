import type { Case } from "@/content/cases";
import type { PageId } from "@/content/nav";
import { getProduct } from "@/content/products";

/**
 * One case seen from one page's perspective. Renders nothing when the case has no
 * summary for that perspective. Only customer-facing summary copy is shown.
 */
export function CaseCard({ item, perspective }: { item: Case; perspective: PageId }) {
  const summary = item.perspectives?.[perspective];
  if (!summary) return null;
  const used = item.used.map((id) => getProduct(id)?.name).filter(Boolean) as string[];
  return (
    <article className="card card-raised p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <p className="text-pretty text-lg leading-relaxed text-ink">{summary}</p>
        <span className="shrink-0 rounded-full border border-line-strong px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-faint">
          {item.evidence}
        </span>
      </div>
      <dl className="mt-6 divide-y divide-line border-t border-line">
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
          <dt className="eyebrow pt-0.5">Problem</dt>
          <dd className="text-sm leading-relaxed text-ink">{item.problem}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
          <dt className="eyebrow pt-0.5">Implemented</dt>
          <dd className="text-sm leading-relaxed text-ink">{item.implemented}</dd>
        </div>
        <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
          <dt className="eyebrow pt-0.5">Result</dt>
          <dd className="text-sm leading-relaxed text-ink">{item.result}</dd>
        </div>
        {used.length > 0 ? (
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4">
            <dt className="eyebrow pt-0.5">Used</dt>
            <dd className="text-sm leading-relaxed text-ink">{used.join(" · ")}</dd>
          </div>
        ) : null}
      </dl>
    </article>
  );
}
