"use client";

import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import { PRICING_MATRIX } from "@/lib/data";
import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { cn } from "@/lib/utils";

const COLS = ["Starter", "Team", "Enterprise"] as const;

export function PricingMatrix() {
  return (
    <section className="relative py-28 sm:py-32">
      <Container size="wide">
        <SectionHeading
          eyebrow="Compare plans"
          title={<>Everything, side by side.</>}
          description="A full breakdown of what's included in each plan, so you can decide with confidence."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.02]"
        >
          <div className="hidden grid-cols-[1.5fr_repeat(3,1fr)] border-b border-white/[0.06] bg-white/[0.02] px-6 py-4 text-sm font-medium sm:grid">
            <div className="text-zinc-500" />
            {COLS.map((col, i) => (
              <div
                key={col}
                className={cn(
                  "text-center",
                  i === 1 ? "text-violet-200" : "text-zinc-300",
                )}
              >
                {col}
              </div>
            ))}
          </div>

          {PRICING_MATRIX.map((group, gi) => (
            <div key={group.group} className={cn(gi > 0 && "border-t border-white/[0.06]")}>
              <div className="bg-white/[0.015] px-6 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                {group.group}
              </div>
              {group.rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[1fr] border-t border-white/[0.04] px-6 py-3.5 text-sm sm:grid-cols-[1.5fr_repeat(3,1fr)] sm:items-center"
                >
                  <div className="text-zinc-300">{row.label}</div>
                  {([row.starter, row.team, row.enterprise] as const).map((value, i) => (
                    <div
                      key={i}
                      className={cn(
                        "mt-1.5 text-sm sm:mt-0 sm:text-center",
                        i === 1 && "sm:font-medium sm:text-violet-100",
                      )}
                    >
                      <span className="text-[11px] uppercase tracking-wider text-zinc-500 sm:hidden">
                        {COLS[i]}:{" "}
                      </span>
                      <Cell value={value} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="inline h-4 w-4 text-violet-300" aria-label="Included" />
    ) : (
      <Minus className="inline h-4 w-4 text-zinc-600" aria-label="Not included" />
    );
  }
  return <span className="text-zinc-200">{value}</span>;
}
