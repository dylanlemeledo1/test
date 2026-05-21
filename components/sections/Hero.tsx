"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { BackgroundFx } from "@/components/primitives/BackgroundFx";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { HeroProductCard } from "./HeroProductCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen flex-col justify-center overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28">
      <BackgroundFx variant="hero" />

      <Container size="wide">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={itemVariants}>
            <Badge>
              <Sparkles className="h-3 w-3 text-violet-300" aria-hidden />
              <span>Now in early access · v1.0</span>
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-7 max-w-4xl text-balance text-display-2xl font-semibold tracking-tight"
          >
            <span className="text-gradient-violet">Workflow intelligence</span>{" "}
            <span className="text-gradient">for the teams</span>
            <br className="hidden sm:block" />
            <span className="text-gradient"> the world is built on.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg"
          >
            Nebula turns the rituals your team already runs into compounding intelligence.
            Ship faster, learn deeper, and operate with the clarity of your best engineer —
            at the speed of your whole company.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button variant="primary" size="lg" href="#cta">
              Start free
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="secondary" size="lg" href="#workflow">
              See how it works
            </Button>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-xs text-zinc-500"
          >
            Free forever for teams of 5. No credit card required.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="relative mt-20 w-full"
          >
            <HeroProductCard />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
