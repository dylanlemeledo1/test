"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mt-3 flex max-w-sm items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1.5"
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex w-full items-center gap-2 px-3 py-1.5 text-sm text-zinc-200"
          >
            <Check className="h-4 w-4 text-violet-300" aria-hidden />
            You're subscribed.
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex w-full items-center gap-2"
          >
            <input
              type="email"
              required
              aria-label="Email address"
              placeholder="you@company.com"
              className="flex-1 bg-transparent px-3 py-1.5 text-sm placeholder:text-zinc-500 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-white px-3 py-1.5 text-xs font-medium text-ink-950 transition-colors hover:bg-zinc-200"
            >
              Subscribe
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
