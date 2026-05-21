import type { Metadata } from "next";
import { PageHero } from "@/components/primitives/PageHero";
import { Features } from "@/components/sections/Features";
import { Workflow } from "@/components/sections/Workflow";
import { Integrations } from "@/components/sections/Integrations";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Every capability inside Nebula — from realtime signal to AI copilots, governance, and integrations.",
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="The platform"
        title={<>Everything that goes into Nebula.</>}
        description="A deeper look at the surface area: how we model workflows, where AI fits, what the integrations cover, and the guardrails that keep it safe."
      >
        <Button variant="primary" size="lg" href="/demo" trailingIcon>
          Try the demo
        </Button>
        <Button variant="secondary" size="lg" href="/pricing">
          See pricing
        </Button>
      </PageHero>
      <Features />
      <Workflow />
      <Integrations />
      <CTA />
    </>
  );
}
