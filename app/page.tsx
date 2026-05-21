import { Hero } from "@/components/sections/Hero";
import { Logos } from "@/components/sections/Logos";
import { Features } from "@/components/sections/Features";
import { Workflow } from "@/components/sections/Workflow";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Logos />
      <Features />
      <Workflow />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
