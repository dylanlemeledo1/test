"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle2, Mail, User2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

const TEAM_SIZES = ["Just me", "2–10", "11–50", "51–250", "250+"];

export function DemoBookForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
          Book a live demo
        </p>
        <h2 className="mt-4 text-display-md font-semibold tracking-tight text-gradient">
          A solutions engineer will walk you through it.
        </h2>
        <p className="mt-5 max-w-md text-pretty leading-relaxed text-zinc-400">
          30 minutes, tailored to your stack. We'll show how teams like yours use
          Nebula day to day — and answer every question you bring.
        </p>
        <ul className="mt-8 space-y-3 text-sm text-zinc-300">
          {[
            "Tailored walkthrough on your data sources",
            "Live Q&A with a solutions engineer",
            "Pricing & rollout plan in writing within 24h",
            "No credit card, no commitment",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8"
      >
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex h-full min-h-[420px] flex-col items-center justify-center text-center"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/20 text-violet-200">
              <CheckCircle2 className="h-7 w-7" />
            </span>
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">
              You're on the list.
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-zinc-400">
              A solutions engineer will reach out within one business day to
              schedule your walkthrough.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            <Field label="Name" icon={User2} type="text" name="name" placeholder="Jane Cooper" />
            <Field
              label="Work email"
              icon={Mail}
              type="email"
              name="email"
              placeholder="jane@company.com"
            />
            <div>
              <label
                htmlFor="size"
                className="block text-xs font-medium uppercase tracking-wider text-zinc-400"
              >
                Team size
              </label>
              <div className="mt-2 grid grid-cols-5 gap-1.5">
                {TEAM_SIZES.map((s, i) => (
                  <button
                    type="button"
                    key={s}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-2 text-[11px] text-zinc-300 transition-colors hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white"
                    aria-pressed={i === 1}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor="notes"
                className="block text-xs font-medium uppercase tracking-wider text-zinc-400"
              >
                Anything we should know?
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={3}
                placeholder="We're a Postgres + Linear shop, mostly TypeScript…"
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-violet-400/40 focus:outline-none"
              />
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
              <Calendar className="h-4 w-4" />
              Request a demo
            </Button>
            <p className="text-center text-xs text-zinc-500">
              By submitting you agree to our{" "}
              <a href="/legal/privacy" className="text-zinc-300 underline-offset-2 hover:underline">
                privacy policy
              </a>
              .
            </p>
          </div>
        )}
      </form>
    </div>
  );
}

function Field({
  label,
  icon: Icon,
  type,
  name,
  placeholder,
}: {
  label: string;
  icon: typeof Mail;
  type: string;
  name: string;
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
      <div className="relative mt-2">
        <Icon
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
          aria-hidden
        />
        <input
          id={name}
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-2.5 pl-10 pr-3 text-sm text-zinc-100 placeholder:text-zinc-500 transition-colors focus:border-violet-400/40 focus:outline-none"
        />
      </div>
    </div>
  );
}
