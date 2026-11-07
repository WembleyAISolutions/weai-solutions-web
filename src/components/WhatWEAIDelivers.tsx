import { delivers } from "@/content/landing";
import { DeliversList } from "./DeliversList";

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

          <DeliversList items={delivers.items} />
        </div>
      </div>
    </section>
  );
}
