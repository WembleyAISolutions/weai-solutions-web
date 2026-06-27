"use client";

/**
 * Demo request section — target of the primary CTA and the intake hand-off.
 * Per landing-claims-policy.md §1/§4 there is NO account, login, checkout, or
 * backend submission in this scope. The textarea mirrors the captured intent so
 * the visitor can carry it into a real demo conversation. The button is inert
 * beyond confirming capture: it makes no network call.
 */

import { useState } from "react";
import { demo } from "@/content/landing";
import { useIntake } from "./IntakeContext";

export function DemoRequest() {
  const { intent, setIntent } = useIntake();
  const [acknowledged, setAcknowledged] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Capture-only: no transmission. Confirm to the visitor and stop.
    setAcknowledged(intent.trim().length > 0);
  }

  return (
    <section id={demo.id} className="border-b border-line">
      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <p className="system-label">{demo.sectionLabel}</p>
        <h2 className="display mt-5 text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl">
          {demo.title}
        </h2>
        <p className="mt-6 text-pretty text-lg leading-relaxed text-ink-soft">
          {demo.body}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-line bg-paper-raised p-6 sm:p-8"
        >
          <label
            htmlFor="demo-intent"
            className="block text-sm font-medium text-ink"
          >
            {demo.intentFieldLabel}
          </label>
          <textarea
            id="demo-intent"
            value={intent}
            onChange={(e) => {
              setIntent(e.target.value);
              setAcknowledged(false);
            }}
            placeholder={demo.intentPlaceholder}
            rows={5}
            className="mt-3 w-full resize-y rounded-xl border border-line-strong bg-paper px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
          />

          <button
            type="submit"
            disabled={intent.trim().length === 0}
            className="mt-5 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-medium text-paper-raised transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {demo.ctaLabel}
          </button>

          {acknowledged ? (
            <p
              role="status"
              className="mt-4 rounded-xl border border-accent-soft bg-accent-soft/50 px-4 py-3 text-sm text-ink-soft"
            >
              Captured. Your description is held on this page only — carry it into
              your demo conversation.
            </p>
          ) : null}

          <p className="mt-5 text-xs leading-relaxed text-ink-faint">
            {demo.contactNote}
          </p>
        </form>
      </div>
    </section>
  );
}
