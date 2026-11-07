"use client";

import { useState } from "react";
import { AREAS, contactCopy, LIMITS, type AreaId, type ContactErrorCode } from "@/content/contact";
import type { FieldErrors } from "@/lib/contact-validate";

type Status =
  | { kind: "idle" }
  | { kind: "sending" }
  | { kind: "sent" }
  | { kind: "error"; code: ContactErrorCode; fields?: FieldErrors };

const inputClass =
  "mt-2 w-full rounded-xl border border-line-strong bg-paper px-4 py-3 text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none";
const errorInput = " border-accent";

export function ContactForm({ about, initialArea }: { about?: string; initialArea?: AreaId }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [area, setArea] = useState<AreaId | "">(initialArea ?? "");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = {
      name: data.get("name"),
      email: data.get("email"),
      organisation: data.get("organisation"),
      area: data.get("area"),
      message: data.get("message"),
      website: data.get("website"),
      about,
    };
    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      const json = (await res.json().catch(() => ({}))) as {
        delivered?: boolean;
        error?: string;
        fields?: FieldErrors;
      };
      if (res.ok && json.delivered === true) {
        form.reset();
        setStatus({ kind: "sent" });
        return;
      }
      const code = (json.error && json.error in contactCopy.errors ? json.error : "upstream") as ContactErrorCode;
      setStatus({ kind: "error", code, fields: json.fields });
    } catch {
      setStatus({ kind: "error", code: "network" });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="rounded-2xl border border-accent-soft bg-accent-soft/40 p-6 sm:p-8">
        <p className="t-h3 text-ink">{contactCopy.success}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{contactCopy.successDetail}</p>
      </div>
    );
  }

  const fields = status.kind === "error" ? status.fields ?? {} : {};
  const sending = status.kind === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-line bg-paper-raised p-6 sm:p-8">
      {about ? (
        <p className="mb-6 text-sm text-ink-soft">
          <span className="eyebrow">{contactCopy.enquiryAbout} </span>
          <span className="font-medium text-ink">{about}</span>
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="block text-sm font-medium text-ink">
            {contactCopy.fields.name}
          </label>
          <input
            id="c-name"
            name="name"
            required
            maxLength={LIMITS.name}
            autoComplete="name"
            aria-invalid={Boolean(fields.name)}
            aria-describedby={fields.name ? "c-name-err" : undefined}
            className={inputClass + (fields.name ? errorInput : "")}
          />
          {fields.name ? <p id="c-name-err" className="mt-1 text-xs text-accent">{fields.name}</p> : null}
        </div>
        <div>
          <label htmlFor="c-email" className="block text-sm font-medium text-ink">
            {contactCopy.fields.email}
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            maxLength={LIMITS.email}
            autoComplete="email"
            aria-invalid={Boolean(fields.email)}
            aria-describedby={fields.email ? "c-email-err" : undefined}
            className={inputClass + (fields.email ? errorInput : "")}
          />
          {fields.email ? <p id="c-email-err" className="mt-1 text-xs text-accent">{fields.email}</p> : null}
        </div>
        <div>
          <label htmlFor="c-org" className="block text-sm font-medium text-ink">
            {contactCopy.fields.organisation}{" "}
            <span className="font-normal text-ink-faint">({contactCopy.fields.optional})</span>
          </label>
          <input
            id="c-org"
            name="organisation"
            maxLength={LIMITS.organisation}
            autoComplete="organization"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="c-area" className="block text-sm font-medium text-ink">
            {contactCopy.fields.area}
          </label>
          <select
            id="c-area"
            name="area"
            required
            value={area}
            onChange={(e) => setArea(e.target.value as AreaId | "")}
            aria-invalid={Boolean(fields.area)}
            aria-describedby={fields.area ? "c-area-err" : undefined}
            className={inputClass + (fields.area ? errorInput : "")}
          >
            <option value="" disabled>
              Choose…
            </option>
            {AREAS.map((a) => (
              <option key={a.id} value={a.id}>
                {a.label}
              </option>
            ))}
          </select>
          {fields.area ? <p id="c-area-err" className="mt-1 text-xs text-accent">{fields.area}</p> : null}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="c-message" className="block text-sm font-medium text-ink">
          {contactCopy.fields.message}
        </label>
        <textarea
          id="c-message"
          name="message"
          required
          rows={6}
          maxLength={LIMITS.message}
          aria-invalid={Boolean(fields.message)}
          aria-describedby={fields.message ? "c-message-err" : undefined}
          className={inputClass + " resize-y" + (fields.message ? errorInput : "")}
        />
        {fields.message ? <p id="c-message-err" className="mt-1 text-xs text-accent">{fields.message}</p> : null}
      </div>

      {/* Honeypot — hidden from people, filled only by bots. */}
      <div className="hidden" aria-hidden>
        <label htmlFor="c-website">Website</label>
        <input id="c-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-medium text-paper-raised transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
        >
          {sending ? contactCopy.sending : contactCopy.submit}
        </button>
        {status.kind === "error" ? (
          <p role="alert" className="text-sm text-accent">
            {contactCopy.errors[status.code]}
          </p>
        ) : null}
      </div>
    </form>
  );
}
