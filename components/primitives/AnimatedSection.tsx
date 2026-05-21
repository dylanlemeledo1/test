"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

type AnimatedSectionProps = React.HTMLAttributes<HTMLElement> & {
  delay?: number;
  as?: "section" | "div" | "article" | "header" | "footer";
  amount?: number;
};

export function AnimatedSection({
  className,
  children,
  delay = 0,
  as = "section",
  amount = 0.15,
  ...props
}: AnimatedSectionProps) {
  const MotionTag = motion[as] as typeof motion.section;
  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={defaultVariants}
      transition={{ delay }}
      className={cn(className)}
      {...(props as React.ComponentProps<typeof motion.section>)}
    >
      {children}
    </MotionTag>
  );
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
};

export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};
