import { references } from "@/content/landing";

export function ReferenceSurfaces() {
  return (
    <section id="references" className="border-b border-line bg-band">
      <div className="shell section">
        <p className="eyebrow">{references.sectionLabel}</p>
        <h2 className="t-h2 mt-5 max-w-3xl text-balance text-ink">
          {references.title}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-faint">
          {references.disclaimer}
        </p>

        {/* Full evidence cards — DryCleanOne, TaxEnd (stronger surfaces). */}
        <p className="eyebrow mt-14">{references.strongerLabel}</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {references.stronger.map((surface) => (
            <article
              key={surface.id}
              className="card card-raised flex flex-col p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="display text-2xl font-semibold text-ink">
                    {surface.name}
                  </h3>
                  <p className="eyebrow mt-2">{surface.domain}</p>
                </div>
                <span className="shrink-0 rounded-full border border-line-strong px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-faint">
                  {surface.tag}
                </span>
              </div>

              <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                {surface.text}
              </p>

              <dl className="mt-6 divide-y divide-line border-t border-line">
                {surface.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[10rem_1fr] sm:gap-4"
                  >
                    <dt className="eyebrow pt-0.5">{row.label}</dt>
                    <dd className="text-sm leading-relaxed text-ink">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* What WEAI packages — connects the surface to WEAI's deliverable
                  without claiming WEAI built or operates the business (policy §3). */}
              <div className="mt-6 rounded-xl border border-accent-soft bg-accent-soft/40 p-4">
                <p className="eyebrow text-accent">{references.packagesLabel}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink">
                  {surface.packages}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Emerging domains — visually subordinate, clearly labelled (policy §3). */}
        <div className="mt-14 border-t border-line pt-8">
          <p className="eyebrow">{references.emergingLabel}</p>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-faint">
            {references.emergingNote}
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {references.emerging.map((surface) => (
              <li
                key={surface.id}
                className="inline-flex items-center gap-2 rounded-full border border-dashed border-line-strong px-4 py-2 text-sm text-ink-soft"
              >
                <span
                  aria-hidden
                  className="inline-block h-1.5 w-1.5 rounded-full bg-ink-faint"
                />
                {surface.name}
                <span className="eyebrow">{surface.domain}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
