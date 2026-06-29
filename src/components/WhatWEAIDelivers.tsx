import { delivers } from "@/content/landing";

/**
 * 03 — "What WEAI delivers." Productizes the capability package without exposing
 * architecture: a hook line that distinguishes it from a chatbot/prompt/deck, then
 * the governed contents of the package as an enumerated list.
 */
export function WhatWEAIDelivers() {
  return (
    <section id="deliver" className="border-b border-line">
      <div className="shell section">
        <p className="eyebrow">{delivers.sectionLabel}</p>
        <div className="mt-5 grid gap-x-12 gap-y-8 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h2 className="t-h2 max-w-xl text-balance text-ink">
              {delivers.title}
            </h2>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-ink-soft">
              {delivers.hook}
            </p>
          </div>

          <ol className="card divide-y divide-line self-start overflow-hidden">
            {delivers.items.map((item, i) => (
              <li
                key={item.id}
                className="flex items-baseline gap-4 px-6 py-4"
              >
                <span className="font-mono text-xs text-ink-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-pretty leading-relaxed text-ink">
                  {item.text}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
