import { opsWorkflow } from "@/content/ops";
import { getProduct } from "@/content/products";

/**
 * Signal flow MailOps → OpsBoard → CoStudio with each connection marked built or
 * planned, and DomainOps as the precondition strip beneath. Arrows run small to
 * large; the product blocks on the page run the other way, by weight.
 */
export function WorkflowBand() {
  const { stations, links, precondition } = opsWorkflow;
  const pre = getProduct(precondition.id);

  return (
    <div className="mt-12 space-y-4">
      <ol className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch">
        {stations.map((s, i) => {
          const p = getProduct(s.id);
          const link = links[i];
          return (
            <StationAndLink key={s.id} label={s.label} name={p?.name ?? s.id} text={s.text} link={link} />
          );
        })}
      </ol>

      <div className="flex flex-col gap-3 rounded-2xl border border-accent-soft bg-accent-soft/45 px-6 py-5 sm:flex-row sm:items-center sm:gap-6">
        <p className="eyebrow text-accent">{precondition.label}</p>
        <p className="t-h3 text-ink">{pre?.name ?? precondition.id}</p>
        <p className="text-sm leading-relaxed text-ink-soft sm:flex-1">{precondition.text}</p>
      </div>
    </div>
  );
}

function StationAndLink({
  label,
  name,
  text,
  link,
}: {
  label: string;
  name: string;
  text: string;
  link?: { label: string; status: "built" | "planned" };
}) {
  return (
    <>
      <li className="card flex h-full flex-col p-6">
        <p className="eyebrow">{label}</p>
        <p className="t-h3 mt-3 text-ink">{name}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{text}</p>
      </li>
      {link ? (
        <li
          aria-label={`${link.label} — ${link.status}`}
          className="flex flex-row items-center justify-center gap-2 px-2 lg:flex-col lg:px-3"
        >
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-faint">
            {link.label}
          </span>
          <span aria-hidden className="relative flex h-6 w-16 items-center lg:w-20">
            <span
              className={
                "block h-0 w-full border-t-2 " +
                (link.status === "built" ? "border-accent" : "border-dashed border-line-strong")
              }
            />
            <span
              className={
                "absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 translate-x-1/2 rotate-45 border-r-2 border-t-2 " +
                (link.status === "built" ? "border-accent" : "border-line-strong")
              }
            />
          </span>
          <span
            className={
              "font-mono text-[0.6rem] uppercase tracking-[0.16em] " +
              (link.status === "built" ? "text-accent" : "text-ink-faint")
            }
          >
            {link.status}
          </span>
        </li>
      ) : null}
    </>
  );
}
