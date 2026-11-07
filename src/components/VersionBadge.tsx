import { VERSION_CONVENTION } from "@/content/versioning";

/**
 * Renders a public product version as a pill tag with the shared convention note.
 * Renders nothing when `version` is undefined — an unconfirmed version is never
 * shown, not even as a dash.
 */
export function VersionBadge({ version }: { version?: string }) {
  if (!version) return null;
  const note = `${VERSION_CONVENTION.dev} · ${VERSION_CONVENTION.live} · ${VERSION_CONVENTION.later}`;
  return (
    <span className="inline-flex flex-wrap items-center gap-2">
      <span className="rounded-full border border-line-strong px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink">
        {version}
      </span>
      <span className="text-xs text-ink-faint">{note}</span>
    </span>
  );
}
