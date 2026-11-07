import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";
import { contactCopy } from "@/content/contact";
import { resolveAbout } from "@/lib/contact-validate";

export const metadata: Metadata = {
  title: "Contact — WEAI.solutions",
  description: "Contact WEAI.solutions about the Foundation, Ops, Workforce or Platforms.",
};

// The form is enabled only when the receiving route is configured (A5).
export const dynamic = "force-dynamic";

type Search = Record<string, string | string[] | undefined>;

function first(v: string | string[] | undefined): string | undefined {
  return Array.isArray(v) ? v[0] : v;
}

function formEnabled(): boolean {
  const raw = process.env.CONTACT_WEBHOOK_URL?.trim();
  if (!raw) return false;
  try {
    return new URL(raw).protocol === "https:";
  } catch {
    return false;
  }
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<Search> }) {
  const sp = await searchParams;
  const { about, area } = resolveAbout(first(sp.from), first(sp.product));
  const enabled = formEnabled();

  return (
    <>
      <SiteHeader current="contact" />
      <main>
        <section className="border-b border-line">
          <div className="section mx-auto max-w-3xl px-6">
            <p className="eyebrow mb-7 flex items-center gap-3">
              <span aria-hidden className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              {contactCopy.eyebrow}
            </p>
            <h1 className="t-h2 text-balance text-ink">{contactCopy.title}</h1>
            <p className="mt-6 text-pretty text-lg leading-relaxed text-ink-soft">{contactCopy.lead}</p>

            <div className="mt-10">
              {enabled ? (
                <ContactForm about={about} initialArea={area} />
              ) : (
                <div className="rounded-2xl border border-line bg-paper-raised p-6 sm:p-8">
                  {about ? (
                    <p className="mb-4 text-sm text-ink-soft">
                      <span className="eyebrow">{contactCopy.enquiryAbout} </span>
                      <span className="font-medium text-ink">{about}</span>
                    </p>
                  ) : null}
                  <p className="text-sm leading-relaxed text-ink-soft">{contactCopy.notEnabled}</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter current="contact" />
    </>
  );
}
