"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PLANS } from "@/lib/data";
import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { BackgroundFx } from "@/components/primitives/BackgroundFx";
import { fadeUp, stagger } from "@/components/primitives/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type Cadence = "monthly" | "annual";

export function Pricing() {
  const [cadence, setCadence] = useState<Cadence>("monthly");

  return (
    <section id="pricing" className="relative py-28 sm:py-36">
      <BackgroundFx variant="section" />

      <Container size="wide">
        <SectionHeading
          eyebrow="Pricing"
          title={
            <>
              Simple, honest pricing.{" "}
              <span className="text-zinc-500">Built to scale with you.</span>
            </>
          }
          description="Start free. Upgrade when you outgrow it. No surprise invoices, ever."
        />

        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Billing cadence"
            className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1"
          >
            {(["monthly", "annual"] as Cadence[]).map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cadence === c}
                onClick={() => setCadence(c)}
                className={cn(
                  "relative rounded-full px-4 py-1.5 text-sm font-medium capitalize transition-colors",
                  cadence === c ? "text-white" : "text-zinc-400 hover:text-zinc-200",
                )}
              >
                {cadence === c ? (
                  <motion.span
                    layoutId="pricing-cadence"
                    className="absolute inset-0 rounded-full bg-white/[0.08]"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                ) : null}
                <span className="relative z-10">{c}</span>
                {c === "annual" ? (
                  <span className="relative z-10 ml-1.5 rounded-full bg-violet-500/15 px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-violet-300">
                    -20%
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3"
        >
          {PLANS.map((plan, i) => {
            const isAnnual = cadence === "annual";
            const isNumeric = plan.price.startsWith("$") && plan.price !== "$0";
            const adjustedPrice = isNumeric && isAnnual
              ? `$${Math.round(parseInt(plan.price.replace("$", ""), 10) * 0.8)}`
              : plan.price;

            return (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                custom={i}
                className={cn(
                  "group relative flex flex-col rounded-3xl border p-8 transition-all duration-500",
                  plan.featured
                    ? "border-white/[0.16] bg-gradient-to-b from-violet-500/[0.10] via-white/[0.03] to-white/[0.01] shadow-glow-sm"
                    : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.14]",
                )}
              >
                {plan.featured ? (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-violet-300/30 bg-violet-500/20 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-violet-200 backdrop-blur">
                    Most popular
                  </span>
                ) : null}

                <header>
                  <h3 className="text-xl font-semibold tracking-tight text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {plan.description}
                  </p>
                </header>

                <div className="mt-8 flex items-baseline gap-1.5">
                  <span className="text-5xl font-semibold tracking-tight text-white">
                    {adjustedPrice}
                  </span>
                  {plan.price !== "Custom" ? (
                    <span className="text-sm text-zinc-500">/{plan.cadence}</span>
                  ) : (
                    <span className="text-sm text-zinc-500">{plan.cadence}</span>
                  )}
                </div>

                <ul className="mt-8 space-y-3.5 text-sm text-zinc-300">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          plan.featured
                            ? "bg-violet-500/20 text-violet-200"
                            : "bg-white/[0.05] text-zinc-300",
                        )}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Button
                    variant={plan.featured ? "primary" : "secondary"}
                    size="md"
                    href="#cta"
                    className="w-full justify-center"
                  >
                    {plan.cta}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
