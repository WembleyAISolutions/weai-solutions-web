import type { Metadata } from "next";
import "./globals.css";
import { hero, site } from "@/content/landing";

export const metadata: Metadata = {
  title: `${site.wordmark} — ${hero.headline}`,
  description: hero.subhead,
  applicationName: site.wordmark,
  openGraph: {
    title: site.wordmark,
    description: hero.subhead,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
