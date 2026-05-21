"use client";

import { motion } from "framer-motion";
import { WORKFLOW_STEPS } from "@/lib/data";
import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { BackgroundFx } from "@/components/primitives/BackgroundFx";
import { fadeUp, stagger } from "@/components/primitives/AnimatedSection";

export function Workflow() {
  return (
    <section id="workflow" className="relative py-28 sm:py-36">
      <BackgroundFx variant="section" />

      <Container size="wide">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              Four steps from chaos to{" "}
              <span className="text-zinc-500">choreography.</span>
            </>
          }
          description="Plug Nebula into the systems you already use. Within an afternoon, your team gets a teammate that sees everything and forgets nothing."
        />

        <motion.ol
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {WORKFLOW_STEPS.map((step, i) => (
            <motion.li
              key={step.step}
              variants={fadeUp}
              custom={i}
              className="group relative flex flex-col gap-6 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-500 hover:border-white/[0.14] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs tracking-widest text-zinc-500">
                  {step.step}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent text-violet-300">
                  <step.icon className="h-4 w-4" aria-hidden />
                </span>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>

              {i < WORKFLOW_STEPS.length - 1 ? (
                <span
                  aria-hidden
                  className="pointer-events-none absolute right-0 top-1/2 hidden h-px w-6 -translate-y-1/2 translate-x-full bg-gradient-to-r from-white/20 to-transparent lg:block"
                />
              ) : null}
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
