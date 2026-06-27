"use client";

/**
 * Capability intake — capture-only per landing-claims-policy.md §4.
 * Chips + free text. On submit it hands the text to the shared intake context,
 * which scrolls to the demo request section. No processing, routing, or AI
 * response is performed or implied. No network calls.
 */

import { useState } from "react";
import { intake } from "@/content/landing";
import { useIntake } from "./IntakeContext";

export function CapabilityIntake() {
  const { submitIntent } = useIntake();
  const [text, setText] = useState("");
  const [activeChips, setActiveChips] = useState<string[]>([]);

  function toggleChip(chip: string) {
    setActiveChips((prev) => {
      const next = prev.includes(chip)
        ? prev.filter((c) => c !== chip)
        : [...prev, chip];
      return next;
    });
  }

  function composed(): string {
    const parts = [...activeChips];
    if (text.trim()) parts.push(text.trim());
    return parts.join(" · ");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = composed();
    if (!value) return;
    submitIntent(value);
  }

  const hasInput = activeChips.length > 0 || text.trim().length > 0;

  return (
    <section id="intake" className="border-b border-line bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <p className="system-label">{intake.sectionLabel}</p>
        <h2 className="display mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {intake.title}
        </h2>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-ink-soft">
          {intake.helper}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-line bg-paper p-6 sm:p-8"
        >
          <div className="flex flex-wrap gap-2.5">
            {intake.chips.map((chip) => {
              const active = activeChips.includes(chip);
              return (
                <button
                  key={chip}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleChip(chip)}
                  className={
                    "rounded-full border px-4 py-2 text-sm transition-colors " +
                    (active
                      ? "border-accent bg-accent-soft text-ink"
                      : "border-line-strong text-ink-soft hover:border-ink-faint hover:text-ink")
                  }
                >
                  {chip}
                </button>
              );
            })}
          </div>

          <label htmlFor="intake-text" className="sr-only">
            Describe the capability you need
          </label>
          <textarea
            id="intake-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={intake.placeholder}
            rows={3}
            className="mt-5 w-full resize-y rounded-xl border border-line-strong bg-paper-raised px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
          />

          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p
              className="min-h-5 text-sm text-ink-faint"
              aria-live="polite"
            >
              {hasInput ? (
                <>
                  <span className="system-label">{intake.capturedLabel}: </span>
                  <span className="text-ink-soft">{composed()}</span>
                </>
              ) : null}
            </p>
            <button
              type="submit"
              disabled={!hasInput}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {intake.submitLabel}
              <span aria-hidden>↓</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
