import { systemPath } from "@/content/landing";

/**
 * Lightweight left-to-right system path: Platform Need → Governed Package →
 * Executable Workflow → Audit Record. A plain labelled sequence, not an internal
 * architecture diagram. Wraps gracefully on narrow viewports.
 */
export function SystemPath() {
  return (
    <div className="mt-12">
      <p className="system-label mb-4">{systemPath.label}</p>
      <ol className="flex flex-wrap items-center gap-x-3 gap-y-3">
        {systemPath.steps.map((step, i) => (
          <li key={step.id} className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper-raised px-4 py-2 text-sm font-medium text-ink">
              <span className="font-mono text-xs text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              {step.label}
            </span>
            {i < systemPath.steps.length - 1 ? (
              <span aria-hidden className="text-ink-faint">
                →
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
