"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const TOPICS = ["General", "Sales", "Support", "Partnerships", "Press"];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [topic, setTopic] = useState("General");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-10"
    >
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center py-10 text-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/20 text-violet-200">
            <CheckCircle2 className="h-7 w-7" />
          </span>
          <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
            Got it — message received.
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
            We'll get back to you within one business day, usually faster.
          </p>
        </motion.div>
      ) : (
        <>
          <div>
            <label className="block text-xs font-medium uppercase tracking-wider text-zinc-400">
              What's this about?
            </label>
            <div className="mt-3 flex flex-wrap gap-2">
              {TOPICS.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setTopic(t)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                    topic === t
                      ? "border-violet-300/40 bg-violet-500/15 text-violet-100"
                      : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-white/[0.16] hover:bg-white/[0.06]",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" type="text" placeholder="Jane Cooper" />
            <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
            <Field label="Company" name="company" type="text" placeholder="Acme Inc" />
            <Field label="Role" name="role" type="text" placeholder="Head of Engineering" />
          </div>

          <div className="mt-4">
            <label
              htmlFor="message"
              className="block text-xs font-medium uppercase tracking-wider text-zinc-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Tell us a little about what you're working on…"
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-violet-400/40 focus:outline-none"
            />
          </div>

          <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-zinc-500">
              We'll never share your details. Read our{" "}
              <a href="/legal/privacy" className="text-zinc-300 underline-offset-2 hover:underline">
                privacy policy
              </a>
              .
            </p>
            <Button type="submit" variant="primary" size="md">
              <Send className="h-4 w-4" />
              Send message
            </Button>
          </div>
        </>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-medium uppercase tracking-wider text-zinc-400"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-violet-400/40 focus:outline-none"
      />
    </div>
  );
}
