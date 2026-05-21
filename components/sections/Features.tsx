"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { FEATURES, type Feature } from "@/lib/data";
import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { BackgroundFx } from "@/components/primitives/BackgroundFx";
import { fadeUp, stagger } from "@/components/primitives/AnimatedSection";
import { cn } from "@/lib/utils";

const spanClasses: Record<Feature["span"], string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-2",
  sm: "md:col-span-1",
};

export function Features() {
  return (
    <section id="features" className="relative py-28 sm:py-36">
      <BackgroundFx variant="section" />
      <Container size="wide">
        <SectionHeading
          eyebrow="The platform"
          title={
            <>
              One platform. Every signal.{" "}
              <span className="text-zinc-500">Compounding clarity.</span>
            </>
          }
          description="Nebula is a single surface for the systems your team already runs — engineered to feel less like another tool and more like a teammate."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-3"
        >
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const glow = useMotionTemplate`radial-gradient(280px circle at ${mouseX}px ${mouseY}px, rgba(124,92,250,0.20), transparent 60%)`;

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      onMouseMove={handleMove}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors duration-500 hover:border-white/[0.14] sm:p-8",
        spanClasses[feature.span],
      )}
    >
      <motion.div
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(120% 80% at 0% 0%, rgba(255,255,255,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-10 flex h-full flex-col justify-between gap-8">
        <div>
          <FeatureIcon icon={feature.icon} />
          <h3
            className={cn(
              "mt-6 font-semibold tracking-tight text-white",
              feature.span === "lg" ? "text-2xl sm:text-3xl" : "text-xl",
            )}
          >
            {feature.title}
          </h3>
          <p
            className={cn(
              "mt-3 max-w-md text-pretty leading-relaxed text-zinc-400",
              feature.span === "lg" ? "text-base sm:text-[15px]" : "text-sm",
            )}
          >
            {feature.description}
          </p>
        </div>

        {feature.span === "lg" ? <FeatureLargeVisual /> : null}
        {feature.span === "md" && index === 1 ? <FeatureCopilotVisual /> : null}
        {feature.span === "md" && index === 2 ? <FeatureWorkflowVisual /> : null}
      </div>
    </motion.div>
  );
}

function FeatureIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] text-violet-300 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
      <Icon className="h-5 w-5" aria-hidden />
    </span>
  );
}

function FeatureLargeVisual() {
  return (
    <div className="relative h-44 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/60 sm:h-56">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-md px-6">
          {[0, 1, 2, 3, 4].map((row) => (
            <motion.div
              key={row}
              initial={{ width: "0%" }}
              whileInView={{ width: `${30 + ((row * 17) % 60)}%` }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1 + row * 0.08,
              }}
              className={cn(
                "mb-2 h-2 rounded-full",
                row === 2
                  ? "bg-gradient-to-r from-violet-400 to-accent-cyan"
                  : "bg-white/[0.08]",
              )}
            />
          ))}
          <div className="mt-4 flex items-center justify-between text-[11px] text-zinc-500">
            <span>0ms</span>
            <span>p50</span>
            <span>p95</span>
            <span>p99</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCopilotVisual() {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-ink-900/60 p-4">
      <div className="flex items-start gap-3">
        <div className="h-7 w-7 shrink-0 rounded-full bg-gradient-to-br from-violet-400 to-accent-cyan" />
        <div className="space-y-2">
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="h-2 w-40 rounded-full bg-white/[0.1]"
          />
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-2 w-56 rounded-full bg-white/[0.06]"
          />
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "100%", opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="h-2 w-32 rounded-full bg-white/[0.06]"
          />
        </div>
      </div>
    </div>
  );
}

function FeatureWorkflowVisual() {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-white/[0.06] bg-ink-900/60 p-4">
      {["Trigger", "Enrich", "Route", "Ship"].map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
          className="flex flex-1 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1.5 text-[11px] font-mono text-zinc-300"
        >
          {step}
        </motion.div>
      ))}
    </div>
  );
}
