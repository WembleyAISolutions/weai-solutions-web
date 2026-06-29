import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { ExecutionLayer } from "@/components/ExecutionLayer";
import { WhyWEAI } from "@/components/WhyWEAI";
import { WhatWEAIDelivers } from "@/components/WhatWEAIDelivers";
import { DeliveryMap } from "@/components/DeliveryMap";
import { ReferenceSurfaces } from "@/components/ReferenceSurfaces";
import { Engagement } from "@/components/Engagement";
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
        <WhyWEAI />
        <WhatWEAIDelivers />
        <DeliveryMap />
        <ReferenceSurfaces />
        <Engagement />
        <CapabilityIntake />
        <DemoRequest />
      </main>
      <SiteFooter />
    </IntakeProvider>
  );
}
