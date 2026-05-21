"use client";

import { motion, useMotionTemplate, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Activity, ArrowUpRight, Cpu, Sparkles, Zap } from "lucide-react";

const sparklinePath =
  "M0,40 L20,38 L40,32 L60,34 L80,26 L100,22 L120,28 L140,18 L160,16 L180,10 L200,14 L220,8 L240,12 L260,6 L280,10 L300,4";

export function HeroProductCard() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const tiltScale = useTransform(scrollYProgress, [0, 0.3, 1], [0.96, 1, 1]);

  const glowX = useMotionTemplate`${mouseX}%`;
  const glowY = useMotionTemplate`${mouseY}%`;
  const glow = useMotionTemplate`radial-gradient(450px circle at ${glowX} ${glowY}, rgba(124,92,250,0.20), transparent 50%)`;

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  return (
    <motion.div
      ref={ref}
      style={{ y: parallaxY, scale: tiltScale }}
      onMouseMove={handleMove}
      className="relative mx-auto w-full max-w-6xl"
    >
      <div
        aria-hidden
        className="absolute -inset-x-10 -top-10 bottom-0 -z-10 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent blur-3xl"
      />

      <div className="border-gradient relative overflow-hidden rounded-3xl bg-ink-900/70 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <motion.div
          aria-hidden
          style={{ background: glow }}
          className="pointer-events-none absolute inset-0 opacity-100"
        />

        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          </div>
          <div className="ml-3 hidden flex-1 items-center gap-2 sm:flex">
            <span className="rounded-md bg-white/[0.04] px-2 py-1 text-[11px] font-mono text-zinc-400">
              nebula.app/workspace/orbital
            </span>
          </div>
          <div className="hidden items-center gap-1.5 text-[11px] text-zinc-500 sm:flex">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            All systems healthy
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 p-4 sm:p-6">
          <aside className="col-span-12 flex flex-row gap-1.5 overflow-x-auto rounded-2xl border border-white/[0.06] bg-white/[0.02] p-2 no-scrollbar lg:col-span-3 lg:flex-col lg:gap-1 lg:p-3">
            {[
              { icon: Activity, label: "Pulse", active: true },
              { icon: Sparkles, label: "Copilots" },
              { icon: Cpu, label: "Workflows" },
              { icon: Zap, label: "Signals" },
            ].map(({ icon: Icon, label, active }) => (
              <button
                key={label}
                className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-white/[0.06] text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden />
                {label}
              </button>
            ))}
          </aside>

          <div className="col-span-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
            <Card className="sm:col-span-2 lg:col-span-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-zinc-500">
                    Velocity index
                  </p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight text-white">
                    1.24<span className="text-zinc-500">×</span>
                  </p>
                </div>
                <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[11px] font-medium text-emerald-300">
                  +18.4% w/w
                </span>
              </div>
              <div className="mt-5 overflow-hidden">
                <svg
                  viewBox="0 0 300 50"
                  className="h-16 w-full"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <defs>
                    <linearGradient id="line-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d={`${sparklinePath} L300,50 L0,50 Z`}
                    fill="url(#line-grad)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.6 }}
                  />
                  <motion.path
                    d={sparklinePath}
                    fill="none"
                    stroke="#A78BFA"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                  />
                </svg>
              </div>
            </Card>

            <Card>
              <p className="text-xs uppercase tracking-wider text-zinc-500">
                Cycle time
              </p>
              <p className="mt-1 text-2xl font-semibold text-white">2.4d</p>
              <div className="mt-3 h-1 w-full rounded-full bg-white/[0.06]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "62%" }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-400 to-accent-cyan"
                />
              </div>
              <p className="mt-2 text-[11px] text-zinc-500">-31% vs last sprint</p>
            </Card>

            <Card className="sm:col-span-2 lg:col-span-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet-500/15">
                    <Sparkles className="h-3.5 w-3.5 text-violet-300" />
                  </span>
                  <p className="text-sm font-medium text-zinc-200">
                    Nebula noticed a regression on <span className="font-mono text-violet-300">checkout.api</span>
                  </p>
                </div>
                <button className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300 transition-colors hover:bg-white/[0.08] sm:inline-flex">
                  View
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-zinc-400">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span>P95 latency rose from 184ms to 312ms after deploy <span className="font-mono text-zinc-300">a91c3e2</span>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-400" />
                  <span>Affects 4.1% of EU traffic. Suggested rollback prepared.</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 transition-colors hover:border-white/[0.12] sm:p-5 ${
        className ?? ""
      }`}
    >
      {children}
    </div>
  );
}
