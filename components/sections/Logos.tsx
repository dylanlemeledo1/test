"use client";

import { motion } from "framer-motion";
import { LOGO_NAMES } from "@/lib/data";
import { Container } from "@/components/primitives/Container";

export function Logos() {
  const doubled = [...LOGO_NAMES, ...LOGO_NAMES];

  return (
    <section aria-label="Trusted by teams" className="relative py-16 sm:py-20">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-xs font-medium uppercase tracking-[0.22em] text-zinc-500"
        >
          Trusted by ambitious teams worldwide
        </motion.p>

        <div className="relative mt-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />

          <div className="overflow-hidden">
            <div className="flex w-max items-center gap-12 animate-marquee sm:gap-16">
              {doubled.map((name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="shrink-0 select-none font-display text-xl font-semibold tracking-tight text-zinc-500/80 transition-colors hover:text-zinc-200 sm:text-2xl"
                  aria-hidden={i >= LOGO_NAMES.length ? "true" : undefined}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
