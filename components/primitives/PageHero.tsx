"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/primitives/Container";
import { BackgroundFx } from "@/components/primitives/BackgroundFx";
import { Badge } from "@/components/ui/Badge";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-36 sm:pt-44">
      <BackgroundFx variant="hero" />

      <Container size="wide" className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {eyebrow ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <Badge dot>{eyebrow}</Badge>
            </motion.div>
          ) : null}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="mt-6 text-balance text-display-xl font-semibold tracking-tight text-gradient"
          >
            {title}
          </motion.h1>
          {description ? (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
              className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg"
            >
              {description}
            </motion.p>
          ) : null}
          {children ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.24 }}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              {children}
            </motion.div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
