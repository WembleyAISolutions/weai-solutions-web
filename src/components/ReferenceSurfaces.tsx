import { references } from "@/content/landing";

export function ReferenceSurfaces() {
  return (
    <section id="references" className="border-b border-line">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="system-label">{references.sectionLabel}</p>
        <h2 className="display mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {references.title}
        </h2>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-ink-faint">
          {references.disclaimer}
        </p>

        {/* Stronger reference surfaces — given more editorial weight. */}
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {references.stronger.map((surface) => (
            <article
              key={surface.id}
              className="flex flex-col rounded-2xl border border-line bg-paper-raised p-7"
            >
              <span className="system-label">{surface.domain}</span>
              <h3 className="display mt-3 text-2xl font-semibold text-ink">
                {surface.name}
              </h3>
              <p className="mt-3 text-pretty leading-relaxed text-ink-soft">
                {surface.text}
              </p>
            </article>
          ))}
        </div>

        {/* Emerging domains — low emphasis, clearly labelled per policy §3. */}
        <div className="mt-10">
          <p className="system-label mb-4">{references.emergingLabel}</p>
          <ul className="flex flex-wrap gap-3">
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
                <span className="system-label">{surface.domain}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
