import Link from "next/link";
import { Container } from "@/components/primitives/Container";
import { BackgroundFx } from "@/components/primitives/BackgroundFx";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden pt-32">
      <BackgroundFx variant="hero" />
      <Container size="default" className="relative text-center">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-violet-300">
          Error · 404
        </p>
        <h1 className="mt-5 text-display-xl font-semibold tracking-tight text-gradient">
          This page slipped through the cracks.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-pretty leading-relaxed text-zinc-400">
          The link you followed may be broken, or the page may have moved. Let's
          get you back somewhere useful.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="primary" size="lg" href="/" trailingIcon>
            Back to home
          </Button>
          <Button variant="secondary" size="lg" href="/contact">
            Tell us what broke
          </Button>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-500">
          <Link href="/features" className="hover:text-zinc-200">Features</Link>
          <Link href="/demo" className="hover:text-zinc-200">Demo</Link>
          <Link href="/pricing" className="hover:text-zinc-200">Pricing</Link>
          <Link href="/changelog" className="hover:text-zinc-200">Changelog</Link>
          <Link href="/about" className="hover:text-zinc-200">About</Link>
        </div>
      </Container>
    </section>
  );
}
