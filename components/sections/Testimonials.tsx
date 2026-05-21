"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS, type Testimonial } from "@/lib/data";
import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { fadeUp, stagger } from "@/components/primitives/AnimatedSection";

const COLUMNS = 3;

function splitIntoColumns(items: Testimonial[], cols: number) {
  const out: Testimonial[][] = Array.from({ length: cols }, () => []);
  items.forEach((item, i) => out[i % cols].push(item));
  return out;
}

export function Testimonials() {
  const columns = splitIntoColumns(TESTIMONIALS, COLUMNS);

  return (
    <section id="testimonials" className="relative py-28 sm:py-36">
      <Container size="wide">
        <SectionHeading
          eyebrow="Loved by operators"
          title={
            <>
              The teams ahead of yours{" "}
              <span className="text-zinc-500">already swear by it.</span>
            </>
          }
          description="From two-person startups to five-thousand-engineer orgs, Nebula has quietly become the operating layer for the teams setting the pace."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-4">
              {column.map((t, i) => (
                <TestimonialCard key={t.name} testimonial={t} index={colIdx * 2 + i} />
              ))}
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.figure
      variants={fadeUp}
      custom={index}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.04]"
    >
      <Quote className="absolute right-4 top-4 h-5 w-5 text-white/10" aria-hidden />

      <blockquote className="text-[15px] leading-relaxed text-zinc-200">
        “{testimonial.quote}”
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-accent-cyan text-[11px] font-semibold text-ink-900">
          {testimonial.initials}
        </span>
        <div className="text-sm">
          <p className="font-medium text-white">{testimonial.name}</p>
          <p className="text-zinc-500">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </figcaption>
    </motion.figure>
  );
}
