"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center transition-all duration-500",
        scrolled ? "pt-3" : "pt-5",
      )}
    >
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "w-[min(96%,1100px)] rounded-2xl border border-white/10 bg-ink-950/70 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl"
            : "w-[min(96%,1180px)] rounded-2xl border border-transparent bg-transparent",
        )}
      >
        <Container size="wide" className="!px-4 sm:!px-5">
          <nav className="flex h-14 items-center justify-between">
            <Logo />

            <ul className="hidden items-center gap-1 md:flex">
              {NAV_LINKS.map((link) => {
                const active =
                  pathname === link.href ||
                  (link.href.length > 1 && pathname?.startsWith(link.href));
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative rounded-full px-3.5 py-1.5 text-sm transition-colors",
                        active ? "text-white" : "text-zinc-400 hover:text-white",
                      )}
                    >
                      {link.label}
                      {active ? (
                        <motion.span
                          layoutId="nav-pill"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          className="absolute inset-0 -z-10 rounded-full bg-white/[0.06]"
                        />
                      ) : null}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="hidden items-center gap-2 md:flex">
              <Button variant="ghost" size="sm" href="/login">
                Sign in
              </Button>
              <Button variant="primary" size="sm" href="/signup" trailingIcon>
                Get started
              </Button>
            </div>

            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </nav>
        </Container>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[68px] z-40 md:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-2 w-[min(96%,1100px)] rounded-2xl border border-white/10 bg-ink-900/95 p-5 backdrop-blur-xl"
            >
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-base text-zinc-200 transition-colors hover:bg-white/[0.04] hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
                <Button variant="secondary" size="md" href="/login">
                  Sign in
                </Button>
                <Button variant="primary" size="md" href="/signup" trailingIcon>
                  Get started
                </Button>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
