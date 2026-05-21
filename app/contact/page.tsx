import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/primitives/PageHero";
import { Container } from "@/components/primitives/Container";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to a real human. Sales, support, partnerships — pick the door that fits.",
};

const CHANNELS = [
  {
    icon: Mail,
    title: "Email",
    detail: "hello@nebula.app",
    sub: "Replies within one business day",
  },
  {
    icon: MessageCircle,
    title: "Live chat",
    detail: "9am – 6pm CET / PT",
    sub: "Quickest if you already use Nebula",
  },
  {
    icon: MapPin,
    title: "Office",
    detail: "Berlin · Mitte",
    sub: "We're remote-first but we love visitors",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Talk to a real human.</>}
        description="Sales, support, partnerships, press — pick the door that fits, or write to anyone on the team. We answer fast."
      />

      <section className="relative pb-24">
        <Container size="wide">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {CHANNELS.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/15 text-violet-200">
                  <c.icon className="h-5 w-5" aria-hidden />
                </span>
                <p className="mt-5 text-xs uppercase tracking-wider text-zinc-500">
                  {c.title}
                </p>
                <p className="mt-1 text-base font-medium text-white">{c.detail}</p>
                <p className="mt-1 text-xs text-zinc-500">{c.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative pb-32">
        <Container size="default">
          <ContactForm />
        </Container>
      </section>
    </>
  );
}
