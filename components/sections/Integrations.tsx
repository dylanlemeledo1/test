"use client";

import { motion } from "framer-motion";
import { INTEGRATIONS } from "@/lib/data";
import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { fadeUp, stagger } from "@/components/primitives/AnimatedSection";

export function Integrations() {
  return (
    <section className="relative py-28 sm:py-36">
      <Container size="wide">
        <SectionHeading
          eyebrow="Integrations"
          title={
            <>
              Connects to what you already use.{" "}
              <span className="text-zinc-500">In minutes.</span>
            </>
          }
          description="Eighty production-grade integrations out of the box. Bring your own data, your own auth, your own residency."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4"
        >
          {INTEGRATIONS.map((name, i) => (
            <motion.div
              key={name}
              variants={fadeUp}
              custom={i}
              className="group flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.04]"
            >
              <span
                aria-hidden
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] font-mono text-[11px] font-bold text-zinc-200"
                style={{
                  background: `linear-gradient(135deg, hsl(${
                    (i * 27) % 360
                  } 70% 60% / 0.18), hsl(${(i * 27 + 60) % 360} 70% 60% / 0.08))`,
                }}
              >
                {name.slice(0, 2).toUpperCase()}
              </span>
              <span className="text-sm font-medium text-zinc-100">{name}</span>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-10 text-center text-sm text-zinc-500">
          Don't see what you need?{" "}
          <a href="/contact" className="text-zinc-300 underline-offset-2 hover:underline">
            We ship custom integrations every week.
          </a>
        </p>
      </Container>
    </section>
  );
}
