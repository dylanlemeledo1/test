"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section id="cta" className="relative py-28 sm:py-36">
      <Container size="wide">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative isolate overflow-hidden rounded-[2rem] border border-white/[0.08] bg-ink-900/60 px-6 py-20 text-center sm:px-12 sm:py-24"
        >
          <div aria-hidden className="absolute inset-0 -z-10">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div
              className="absolute inset-x-0 top-0 h-full"
              style={{
                background:
                  "radial-gradient(ellipse 60% 60% at 50% 30%, rgba(124,92,250,0.30), transparent 70%)",
              }}
            />
            <div
              className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(34,211,238,0.18), transparent 60%)",
              }}
            />
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-balance text-display-lg font-semibold tracking-tight text-gradient"
          >
            Ship like the teams you’re jealous of.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-zinc-400 sm:text-lg"
          >
            Set up Nebula in under five minutes. Free forever for small teams.
            Cancel anytime — but you won’t want to.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button variant="primary" size="lg" href="#cta">
              Get started for free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" href="#cta">
              Book a demo
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-xs text-zinc-500"
          >
            No credit card. SOC 2 Type II. EU & US data residency.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
