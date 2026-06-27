import { method } from "@/content/landing";

export function Method() {
  return (
    <section id="method" className="border-b border-line bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="system-label">{method.sectionLabel}</p>
        <h2 className="display mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {method.title}
        </h2>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {method.steps.map((step) => (
            <li key={step.n} className="bg-paper p-7">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-line-strong font-mono text-sm text-ink">
                {step.n}
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
