/** Dark call-to-action band: ink background, paper text, one pill button. */
export function CtaBand({ title, label, href }: { title: string; label: string; href: string }) {
  return (
    <section className="bg-ink">
      <div className="shell flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between sm:py-20">
        <h2 className="t-h2 max-w-2xl text-balance text-paper">{title}</h2>
        <a
          href={href}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-6 py-3 text-base font-medium text-paper-raised transition-opacity hover:opacity-90"
        >
          {label}
        </a>
      </div>
    </section>
  );
}
