import type { Product } from "@/content/products";
import type { OpsBlockCopy } from "@/content/ops";
import { opsLabels } from "@/content/ops";
import { VersionBadge } from "./VersionBadge";

/**
 * One product as a full-width page section (product-page depth, not a card).
 * Left: name, version, purpose, the pain, direction, exits. Right: the real
 * product screenshot when the record has one; otherwise the direction list takes
 * the right column and no placeholder is drawn. Every optional field is omitted
 * when unknown. Alternating sections flip the columns and sit on the band tint.
 */
export function ProductBlock({
  product,
  copy,
  flip,
  band,
}: {
  product: Product;
  copy: OpsBlockCopy;
  flip: boolean;
  band: boolean;
}) {
  const hasShot = Boolean(product.screenshot);
  const links = product.links ?? {};

  const textCol = (
    <div className="min-w-0">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <h2 className="t-h2 text-ink">{product.name}</h2>
        <VersionBadge version={product.version} />
      </div>
      {product.purpose ? (
        <p className="mt-6 max-w-xl text-pretty text-xl font-medium leading-snug tracking-tight text-ink">
          {product.purpose}
        </p>
      ) : null}
      {product.intendedUser ? (
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-soft">
          <span className="eyebrow">For </span>
          {product.intendedUser}
        </p>
      ) : null}

      {product.problem ? (
        <div className="mt-8 max-w-xl rounded-2xl border border-accent-soft bg-accent-soft/45 p-5">
          <p className="eyebrow text-accent">{opsLabels.pain}</p>
          <p className="mt-2 text-pretty leading-relaxed text-ink">{product.problem}</p>
        </div>
      ) : null}

      {!hasShot ? null : <Direction copy={copy} product={product} />}

      {product.nextMilestone ? (
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft">
          <span className="eyebrow">{opsLabels.next} </span>
          {product.nextMilestone}
        </p>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-3">
        {links.product ? (
          <a
            href={links.product}
            rel="noopener"
            className="inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          >
            {opsLabels.openProduct} {product.name}
          </a>
        ) : null}
        {links.demo ? (
          <a
            href={links.demo}
            rel="noopener"
            className="inline-flex items-center justify-center rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-paper-raised"
          >
            {opsLabels.watchDemo}
          </a>
        ) : null}
        <a
          href={`/contact?from=ops&product=${product.id}`}
          className={
            links.product
              ? "inline-flex items-center justify-center rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-paper-raised"
              : "inline-flex items-center justify-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-opacity hover:opacity-90"
          }
        >
          {copy.enquireLabel}
        </a>
      </div>
    </div>
  );

  const sideCol = hasShot ? (
    <figure className="card card-raised overflow-hidden">
      <div aria-hidden className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
        <span className="h-2 w-2 rounded-full bg-line-strong" />
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.screenshot!.src}
        alt={product.screenshot!.alt}
        className="block w-full"
        loading="lazy"
      />
    </figure>
  ) : (
    <Direction copy={copy} product={product} standalone />
  );

  return (
    <section id={product.id} className={"border-b border-line" + (band ? " bg-band" : "")}>
      <div className="shell section">
        <p className="eyebrow flex items-center gap-3">
          <span>
            {copy.number} / {product.name}
          </span>
          <span aria-hidden className="h-px w-6 bg-line-strong" />
          <span>{copy.role}</span>
        </p>
        <div
          className={
            "mt-8 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16" +
            (flip ? " lg:[&>*:first-child]:order-2" : "")
          }
        >
          {textCol}
          {sideCol}
        </div>
      </div>
    </section>
  );
}

function Direction({
  copy,
  product,
  standalone = false,
}: {
  copy: OpsBlockCopy;
  product: Product;
  standalone?: boolean;
}) {
  const works = product.worksNow;
  return (
    <div className={standalone ? "card p-7 lg:mt-14" : "mt-8 max-w-xl"}>
      {works.length > 0 ? (
        <div>
          <p className="eyebrow">{opsLabels.worksNow}</p>
          <ul className="mt-3 space-y-2">
            {works.map((w) => (
              <li key={w} className="flex gap-3 text-sm leading-relaxed text-ink">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {w}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className={works.length > 0 ? "mt-6" : ""}>
        <p className="eyebrow flex items-center gap-2">
          <span>{opsLabels.direction}</span>
          <span className="rounded-full border border-line-strong px-2 py-0.5 text-[0.6rem] text-ink-faint">
            {opsLabels.planned}
          </span>
        </p>
        <ul className="mt-3 space-y-2">
          {copy.direction.map((d) => (
            <li key={d} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
              <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full border border-accent" />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
