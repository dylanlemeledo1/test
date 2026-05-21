"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Activity, ArrowRight, GitBranch, Sparkles, Terminal, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

type Tab = {
  id: string;
  label: string;
  icon: typeof Activity;
  content: () => React.ReactNode;
};

const TABS: Tab[] = [
  { id: "pulse", label: "Pulse", icon: Activity, content: PulsePane },
  { id: "copilot", label: "Copilot", icon: Sparkles, content: CopilotPane },
  { id: "workflow", label: "Workflow", icon: Workflow, content: WorkflowPane },
  { id: "logs", label: "Logs", icon: Terminal, content: LogsPane },
];

export function DemoExperience() {
  const [active, setActive] = useState<string>("pulse");
  const activeTab = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <div className="border-gradient relative overflow-hidden rounded-3xl bg-ink-900/70 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.02] px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
          </div>
          <span className="hidden rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[11px] text-zinc-400 sm:inline">
            nebula.app/demo
          </span>
        </div>
        <span className="hidden items-center gap-2 text-[11px] text-zinc-500 sm:flex">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
          Sandbox · read-only
        </span>
      </div>

      <div className="grid grid-cols-12 gap-0">
        <aside className="col-span-12 border-b border-white/[0.06] p-3 sm:col-span-3 sm:border-b-0 sm:border-r sm:p-4">
          <div className="flex flex-row gap-1 overflow-x-auto sm:flex-col">
            {TABS.map((tab) => {
              const isActive = tab.id === active;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={cn(
                    "group relative flex shrink-0 items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-white/[0.06] text-white"
                      : "text-zinc-400 hover:bg-white/[0.03] hover:text-zinc-200",
                  )}
                >
                  <tab.icon className="h-4 w-4" aria-hidden />
                  <span>{tab.label}</span>
                  {isActive ? (
                    <motion.span
                      layoutId="demo-tab-marker"
                      className="ml-auto hidden h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_2px_rgba(167,139,250,0.6)] sm:inline-block"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>

          <div className="mt-6 hidden rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 sm:block">
            <p className="text-xs text-zinc-400">Try a query:</p>
            <code className="mt-2 block font-mono text-[11px] text-violet-200">
              checkout.api · 24h
            </code>
          </div>
        </aside>

        <div className="col-span-12 min-h-[480px] p-5 sm:col-span-9 sm:p-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {activeTab.content()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function PulsePane() {
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wider text-zinc-500">Pulse · last 24h</p>
          <h3 className="mt-1 text-2xl font-semibold text-white">Checkout · api</h3>
        </div>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
          P95 184ms · healthy
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { label: "Requests", value: "1.24M", delta: "+8.2%" },
          { label: "Errors", value: "0.04%", delta: "-31%" },
          { label: "P99 latency", value: "412ms", delta: "+1.1%" },
        ].map((m) => (
          <div
            key={m.label}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
          >
            <p className="text-[11px] uppercase tracking-wider text-zinc-500">{m.label}</p>
            <p className="mt-1 text-xl font-semibold text-white">{m.value}</p>
            <p className="mt-1 text-xs text-zinc-500">{m.delta} vs prior period</p>
          </div>
        ))}
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/50 p-4">
        <svg viewBox="0 0 600 160" className="h-40 w-full" preserveAspectRatio="none" aria-hidden>
          <defs>
            <linearGradient id="demo-line" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,120 C40,110 80,90 120,100 C160,110 200,80 240,75 C280,70 320,90 360,70 C400,55 440,50 480,60 C520,68 560,42 600,30 L600,160 L0,160 Z"
            fill="url(#demo-line)"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
          <motion.path
            d="M0,120 C40,110 80,90 120,100 C160,110 200,80 240,75 C280,70 320,90 360,70 C400,55 440,50 480,60 C520,68 560,42 600,30"
            fill="none"
            stroke="#A78BFA"
            strokeWidth="1.8"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
      </div>
    </div>
  );
}

function CopilotPane() {
  const messages = [
    { who: "you", text: "Why is checkout slow in EU?" },
    {
      who: "nebula",
      text:
        "P95 in eu-west-1 rose from 184ms to 312ms at 09:42 UTC after deploy a91c3e2 shipped a new validator. 4.1% of traffic affected.",
    },
    { who: "you", text: "Suggest a fix." },
    {
      who: "nebula",
      text:
        "Two options: (1) Roll back deploy a91c3e2 — least disruptive. (2) Cache validator output for ≥99% reads with the same input. I prepped both PRs.",
    },
  ];
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-zinc-500">Copilot</p>
      <h3 className="mt-1 text-2xl font-semibold text-white">Ask Nebula anything.</h3>
      <div className="mt-6 space-y-4">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className={cn(
              "flex max-w-md items-start gap-3 rounded-2xl border p-4 text-sm leading-relaxed",
              m.who === "you"
                ? "ml-auto border-white/10 bg-white/[0.04] text-zinc-200"
                : "border-violet-400/20 bg-violet-500/[0.08] text-zinc-100",
            )}
          >
            <div
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold",
                m.who === "you"
                  ? "bg-white/10 text-zinc-200"
                  : "bg-gradient-to-br from-violet-400 to-accent-cyan text-ink-900",
              )}
            >
              {m.who === "you" ? "You" : "N"}
            </div>
            <p>{m.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function WorkflowPane() {
  const nodes = [
    { id: "trigger", icon: GitBranch, label: "On deploy", sub: "github.deploy.success" },
    { id: "enrich", icon: Sparkles, label: "Enrich", sub: "with PR, owners, runbook" },
    { id: "check", icon: Activity, label: "Check pulse", sub: "p95 < 250ms in 10m" },
    { id: "route", icon: ArrowRight, label: "Notify owners", sub: "via Slack thread" },
  ];
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-zinc-500">Workflow</p>
      <h3 className="mt-1 text-2xl font-semibold text-white">post-deploy.guard</h3>
      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        {nodes.map((n, i) => (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/15 text-violet-200">
                <n.icon className="h-4 w-4" aria-hidden />
              </span>
              <div>
                <p className="text-sm font-medium text-white">{n.label}</p>
                <p className="font-mono text-[11px] text-zinc-500">{n.sub}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LogsPane() {
  const lines = [
    { t: "09:42:14", level: "info", msg: "deploy a91c3e2 starting in eu-west-1" },
    { t: "09:42:46", level: "info", msg: "validator.checkout: cold-start 132ms" },
    { t: "09:43:01", level: "warn", msg: "p95 rose to 312ms (was 184ms)" },
    { t: "09:43:09", level: "info", msg: "nebula.copilot drafted rollback PR #2148" },
    { t: "09:43:22", level: "ok", msg: "notification sent to #checkout-oncall" },
  ];
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-zinc-500">Logs</p>
      <h3 className="mt-1 text-2xl font-semibold text-white">Live tail</h3>
      <div className="mt-6 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-950/80 font-mono text-[12.5px]">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-start gap-3 border-b border-white/[0.04] px-4 py-2 last:border-0"
          >
            <span className="text-zinc-600">{l.t}</span>
            <span
              className={cn(
                "rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase",
                l.level === "warn" && "bg-amber-400/15 text-amber-200",
                l.level === "info" && "bg-white/[0.06] text-zinc-300",
                l.level === "ok" && "bg-emerald-400/15 text-emerald-200",
              )}
            >
              {l.level}
            </span>
            <span className="text-zinc-300">{l.msg}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
