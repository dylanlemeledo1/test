"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Logo } from "@/components/ui/Logo";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  panelEyebrow: string;
  panelTitle: string;
  panelQuote: string;
  panelAuthor: string;
  panelRole: string;
  footer: React.ReactNode;
  children: React.ReactNode;
};

export function AuthLayout(props: AuthLayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950 pt-24">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative flex items-center justify-center px-6 py-12 sm:px-12">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-sm"
          >
            <div className="mb-10 flex justify-start lg:hidden">
              <Logo />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-gradient">
              {props.title}
            </h1>
            <p className="mt-2 text-sm text-zinc-400">{props.subtitle}</p>

            <div className="mt-8">{props.children}</div>

            <p className="mt-8 text-center text-sm text-zinc-500">
              {props.footer}
            </p>
          </motion.div>
        </div>

        <aside className="relative hidden overflow-hidden lg:flex lg:items-center lg:justify-center">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 30% 40%, rgba(124,92,250,0.30) 0%, transparent 70%), radial-gradient(ellipse 70% 60% at 80% 80%, rgba(34,211,238,0.18) 0%, transparent 70%)",
            }}
          />
          <div className="absolute inset-0 grid-bg opacity-40" />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto max-w-md p-12"
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-zinc-300 backdrop-blur">
              <Sparkles className="h-3 w-3 text-violet-300" />
              {props.panelEyebrow}
            </p>
            <p className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-white">
              {props.panelTitle}
            </p>

            <figure className="mt-12 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <blockquote className="text-sm leading-relaxed text-zinc-200">
                “{props.panelQuote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 text-xs">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-accent-cyan text-[10px] font-semibold text-ink-900">
                  {props.panelAuthor
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
                <div>
                  <p className="font-medium text-white">{props.panelAuthor}</p>
                  <p className="text-zinc-500">{props.panelRole}</p>
                </div>
              </figcaption>
            </figure>

            <p className="mt-12 text-xs text-zinc-500">
              <Link href="/" className="hover:text-zinc-300">
                ← Back to home
              </Link>
            </p>
          </motion.div>
        </aside>
      </div>
    </div>
  );
}
