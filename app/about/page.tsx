import type { Metadata } from "next";
import { PageHero } from "@/components/primitives/PageHero";
import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Button } from "@/components/ui/Button";
import { TEAM } from "@/lib/data";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nebula is a small team building the operating layer for the world's most ambitious software teams.",
};

const VALUES = [
  {
    title: "Taste over features",
    body:
      "We ship fewer things, but the ones we ship feel inevitable. We optimize for second-impression delight, not first-impression novelty.",
  },
  {
    title: "Calm by default",
    body:
      "Software should make work quieter. We design Nebula so that the loudest signal in your day is the one that genuinely needs you.",
  },
  {
    title: "Respect the operator",
    body:
      "Every product decision starts with the engineer, the PM, the operator on-call at 3am. If it doesn't make their job easier, it doesn't ship.",
  },
  {
    title: "Compounding by default",
    body:
      "We build features that get better the more you use them. Tools should reward investment, not punish you for outgrowing them.",
  },
];

const STATS = [
  { value: "12k+", label: "Teams running on Nebula" },
  { value: "$48M", label: "Series A · led by Index" },
  { value: "42", label: "People across 11 countries" },
  { value: "99.99%", label: "Trailing 12-month uptime" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title={<>We're building the operating layer for ambitious teams.</>}
        description="Started in 2023 by a handful of engineers who'd spent careers gluing together dashboards. We wanted one thing — the operating system we always wished existed."
      >
        <Button variant="primary" size="lg" href="#careers" trailingIcon>
          Join us
        </Button>
        <Button variant="secondary" size="lg" href="/contact">
          Get in touch
        </Button>
      </PageHero>

      <section className="relative py-20">
        <Container size="wide">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center"
              >
                <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs text-zinc-400 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-28">
        <Container size="wide">
          <SectionHeading
            eyebrow="Values"
            title={<>The four things we believe.</>}
            description="They're not posters on a wall. They show up in every code review, every hiring loop, every design crit."
          />
          <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-7 transition-colors hover:border-white/[0.14]"
              >
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative py-24 sm:py-28">
        <Container size="wide">
          <SectionHeading
            eyebrow="The team"
            title={<>Operators, designers, and engineers.</>}
            description="Senior people doing their best work. We hire slowly, level up constantly, and stay small on purpose."
          />
          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center"
              >
                <span
                  aria-hidden
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-violet-400/90 to-accent-cyan/90 text-xl font-semibold text-ink-900"
                >
                  {member.initials}
                </span>
                <p className="mt-4 text-sm font-medium text-white">{member.name}</p>
                <p className="mt-1 text-xs text-zinc-500">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />

      <section id="careers" className="relative py-24 sm:py-28">
        <Container size="wide">
          <div className="rounded-3xl border border-white/[0.08] bg-gradient-to-b from-violet-500/[0.08] via-white/[0.02] to-transparent p-10 text-center sm:p-16">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-200">
              Careers
            </p>
            <h2 className="mt-4 text-display-md font-semibold tracking-tight text-gradient">
              We're hiring deliberately.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-zinc-400">
              We're a remote-first team across 11 countries. Six roles open right
              now — engineering, design, customer engineering, sales.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="primary" size="lg" href="/contact" trailingIcon>
                See open roles
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTA />
    </>
  );
}
