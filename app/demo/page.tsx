import type { Metadata } from "next";
import { PageHero } from "@/components/primitives/PageHero";
import { Button } from "@/components/ui/Button";
import { DemoExperience } from "@/components/sections/DemoExperience";
import { DemoBookForm } from "@/components/sections/DemoBookForm";
import { Container } from "@/components/primitives/Container";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Demo",
  description:
    "Take Nebula for a guided spin. Explore the dashboard, run a workflow, and see how AI copilots learn your stack.",
};

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="Interactive demo"
        title={<>See Nebula in motion.</>}
        description="Take a guided spin through the workspace. No signup, no account — just click around and feel how it works."
      >
        <Button variant="primary" size="lg" href="/signup" trailingIcon>
          Start free
        </Button>
        <Button variant="secondary" size="lg" href="#book">
          Book a live demo
        </Button>
      </PageHero>

      <section className="relative pb-24 sm:pb-32">
        <Container size="wide">
          <DemoExperience />
        </Container>
      </section>

      <section id="book" className="relative py-24 sm:py-32">
        <Container size="wide">
          <DemoBookForm />
        </Container>
      </section>

      <CTA />
    </>
  );
}
