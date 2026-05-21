"use client";

import { motion } from "framer-motion";
import { type ChangelogEntry } from "@/lib/data";
import { cn } from "@/lib/utils";

const TAG_STYLE: Record<ChangelogEntry["tag"], string> = {
  feature: "bg-violet-500/15 text-violet-200 border-violet-300/20",
  improvement: "bg-emerald-400/10 text-emerald-200 border-emerald-300/20",
  fix: "bg-amber-400/10 text-amber-200 border-amber-300/20",
};

export function ChangelogList({ entries }: { entries: ChangelogEntry[] }) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute left-[7px] top-0 hidden h-full w-px bg-gradient-to-b from-white/15 via-white/10 to-transparent sm:block"
      />
      <ol className="flex flex-col gap-12">
        {entries.map((entry, i) => (
          <motion.li
            key={entry.version}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
            className="relative pl-0 sm:pl-10"
          >
            <span
              aria-hidden
              className="absolute left-0 top-1.5 hidden h-3.5 w-3.5 rounded-full border-2 border-ink-950 bg-violet-400 shadow-[0_0_18px_2px_rgba(167,139,250,0.55)] sm:block"
            />

            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="font-mono text-zinc-500">{entry.date}</span>
              <span className="font-mono text-zinc-500">·</span>
              <span className="font-mono font-medium text-zinc-200">
                v{entry.version}
              </span>
              <span
                className={cn(
                  "rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider",
                  TAG_STYLE[entry.tag],
                )}
              >
                {entry.tag}
              </span>
            </div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {entry.title}
            </h2>
            <p className="mt-3 max-w-3xl text-pretty leading-relaxed text-zinc-400">
              {entry.body}
            </p>

            {entry.highlights ? (
              <ul className="mt-5 grid max-w-3xl grid-cols-1 gap-2 text-sm text-zinc-300 sm:grid-cols-2">
                {entry.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
