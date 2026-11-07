import type { Product } from "@/content/products";
import { VersionBadge } from "./VersionBadge";

/**
 * One product record as a hairline card. Every optional field is omitted when
 * unknown — nothing is rendered in its place.
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="card flex flex-col p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="display text-2xl font-semibold text-ink">{product.name}</h3>
          {product.group ? <p className="eyebrow mt-2">{product.group}</p> : null}
        </div>
      </div>
      {product.version ? (
        <div className="mt-3">
          <VersionBadge version={product.version} />
        </div>
      ) : null}
      {product.purpose ? (
        <p className="mt-4 text-pretty leading-relaxed text-ink-soft">{product.purpose}</p>
      ) : null}
      {product.problem ? (
        <div className="mt-5 rounded-xl border border-accent-soft bg-accent-soft/40 p-4">
          <p className="eyebrow text-accent">The problem</p>
          <p className="mt-2 text-sm leading-relaxed text-ink">{product.problem}</p>
        </div>
      ) : null}
      {product.intendedUser ? (
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          <span className="eyebrow">For </span>
          {product.intendedUser}
        </p>
      ) : null}
      {product.worksNow.length > 0 ? (
        <div className="mt-5">
          <p className="eyebrow">Works now</p>
          <ul className="mt-2 space-y-1 text-sm leading-relaxed text-ink">
            {product.worksNow.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {product.nextMilestone ? (
        <p className="mt-4 text-sm leading-relaxed text-ink-soft">
          <span className="eyebrow">Next </span>
          {product.nextMilestone}
        </p>
      ) : null}
      {product.links && (product.links.product || product.links.demo || product.links.github) ? (
        <p className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          {product.links.product ? (
            <a href={product.links.product} className="font-medium text-accent hover:opacity-80">Product</a>
          ) : null}
          {product.links.demo ? (
            <a href={product.links.demo} className="font-medium text-accent hover:opacity-80">Demo</a>
          ) : null}
          {product.links.github ? (
            <a href={product.links.github} className="font-medium text-accent hover:opacity-80">GitHub</a>
          ) : null}
        </p>
      ) : null}
    </article>
  );
}
