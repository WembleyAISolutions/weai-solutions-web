import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { ExecutionLayer } from "@/components/ExecutionLayer";
import { Method } from "@/components/Method";
import { ReferenceSurfaces } from "@/components/ReferenceSurfaces";
import { CapabilityIntake } from "@/components/CapabilityIntake";
import { DemoRequest } from "@/components/DemoRequest";
import { SiteFooter } from "@/components/SiteFooter";
import { IntakeProvider } from "@/components/IntakeContext";

export default function HomePage() {
  return (
    <IntakeProvider>
      <SiteHeader />
      <main>
        <Hero />
        <ExecutionLayer />
        <Method />
        <ReferenceSurfaces />
        <CapabilityIntake />
        <DemoRequest />
      </main>
      <SiteFooter />
    </IntakeProvider>
  );
}
