"use client";

/**
 * Compact capability-intake entry for the first screen — a light interaction
 * affordance. Capture-only per landing-claims-policy.md §4: chips + free text,
 * hands the composed intent to the shared intake context (which scrolls to the
 * demo request section). No processing, no network calls. The full intake
 * section remains later on the page.
 */

import { useState } from "react";
import { compactIntake } from "@/content/landing";
import { useIntake } from "./IntakeContext";

export function CompactIntake() {
  const { submitIntent } = useIntake();
  const [text, setText] = useState("");
  const [active, setActive] = useState<string | null>(null);

  function composed(): string {
    const parts: string[] = [];
    if (active) parts.push(active);
    if (text.trim()) parts.push(text.trim());
    return parts.join(" · ");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = composed();
    if (!value) return;
    submitIntent(value);
  }

  const hasInput = Boolean(active) || text.trim().length > 0;

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 rounded-2xl border border-line bg-paper-raised p-5 sm:p-6"
    >
      <p className="system-label">{compactIntake.label}</p>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        <label htmlFor="compact-intake-text" className="sr-only">
          {compactIntake.placeholder}
        </label>
        <input
          id="compact-intake-text"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={compactIntake.placeholder}
          className="w-full rounded-full border border-line-strong bg-paper px-5 py-3 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          disabled={!hasInput}
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          {compactIntake.submitLabel}
          <span aria-hidden>→</span>
        </button>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {compactIntake.chips.map((chip) => {
          const isActive = active === chip;
          return (
            <button
              key={chip}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive((prev) => (prev === chip ? null : chip))}
              className={
                "rounded-full border px-3.5 py-1.5 text-sm transition-colors " +
                (isActive
                  ? "border-accent bg-accent-soft text-ink"
                  : "border-line-strong text-ink-soft hover:border-ink-faint hover:text-ink")
              }
            >
              {chip}
            </button>
          );
        })}
      </div>
    </form>
  );
}
