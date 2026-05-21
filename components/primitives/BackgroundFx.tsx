"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type BackgroundFxProps = {
  variant?: "hero" | "section" | "cta";
  className?: string;
};

export function BackgroundFx({ variant = "section", className }: BackgroundFxProps) {
  if (variant === "hero") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
          className,
        )}
      >
        <div className="absolute inset-0 grid-bg mask-radial opacity-60" />
        <div className="absolute inset-x-0 top-0 h-[60vh] bg-grid-fade" />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="aurora left-[-10%] top-[-10%] h-[520px] w-[520px]"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #7C5CFA 0%, transparent 60%)",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="aurora right-[-10%] top-[10%] h-[520px] w-[520px]"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, #22D3EE 0%, transparent 60%)",
            opacity: 0.22,
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="aurora left-1/2 top-[40%] h-[420px] w-[680px] -translate-x-1/2"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, #6D28D9 0%, transparent 70%)",
            opacity: 0.28,
          }}
        />
      </div>
    );
  }

  if (variant === "cta") {
    return (
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
          className,
        )}
      >
        <div className="absolute inset-0 dot-bg mask-radial opacity-40" />
        <div
          className="aurora left-1/2 top-1/2 h-[440px] w-[680px] -translate-x-1/2 -translate-y-1/2"
          style={{
            background:
              "radial-gradient(ellipse at center, #7C5CFA 0%, transparent 60%)",
            opacity: 0.35,
          }}
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 dot-bg mask-radial opacity-25" />
    </div>
  );
}
