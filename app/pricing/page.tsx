import type { Metadata } from "next";
import { PageHero } from "@/components/primitives/PageHero";
import { Pricing } from "@/components/sections/Pricing";
import { PricingMatrix } from "@/components/sections/PricingMatrix";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, honest pricing. Free forever for small teams. Scale to enterprise without renegotiating.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={<>Pricing that scales with the work — not your headcount.</>}
        description="Start free. Pay only when you outgrow it. No seat-tax for engineers who only run reports once a quarter."
      />
      <Pricing />
      <PricingMatrix />
      <FAQ />
      <CTA />
    </>
  );
}
