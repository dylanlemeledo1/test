"use client";

import * as React from "react";
import Link from "next/link";
import { motion, type HTMLMotionProps } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonProps = HTMLMotionProps<"button"> & {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  href?: string;
  trailingIcon?: boolean;
  children: React.ReactNode;
};

const baseStyles =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles: Record<Variant, string> = {
  primary:
    "text-white shadow-glow-sm bg-gradient-to-b from-violet-500 to-violet-700 hover:from-violet-400 hover:to-violet-600 hover:shadow-glow",
  secondary:
    "text-white glass hover:bg-white/[0.08] hover:border-white/[0.12]",
  ghost: "text-zinc-300 hover:text-white hover:bg-white/[0.04]",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-[15px]",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      trailingIcon = false,
      children,
      ...props
    },
    ref,
  ) => {
    const inner = (
      <>
        <span className="relative z-10 inline-flex items-center gap-2">
          {children}
          {trailingIcon ? (
            <ArrowUpRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          ) : null}
        </span>
        {variant === "primary" ? (
          <>
            <span
              aria-hidden
              className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
              }}
            />
            <span
              aria-hidden
              className="absolute inset-x-3 -bottom-px h-px bg-gradient-to-r from-transparent via-white/70 to-transparent"
            />
          </>
        ) : null}
      </>
    );

    if (href) {
      const isExternal = /^(https?:)?\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");
      const MotionLink = motion.create(Link);
      const sharedClass = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);
      if (isExternal) {
        return (
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.97 }}
            className={sharedClass}
          >
            {inner}
          </motion.a>
        );
      }
      return (
        <MotionLink
          href={href}
          whileTap={{ scale: 0.97 }}
          className={sharedClass}
        >
          {inner}
        </MotionLink>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.97 }}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {inner}
      </motion.button>
    );
  },
);

Button.displayName = "Button";
