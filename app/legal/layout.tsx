import Link from "next/link";
import { Container } from "@/components/primitives/Container";

const LEGAL_LINKS = [
  { label: "Privacy policy", href: "/legal/privacy" },
  { label: "Terms of service", href: "/legal/terms" },
];

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-32 pb-32">
      <Container size="default">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[200px_1fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
              Legal
            </p>
            <nav className="mt-4 flex flex-col gap-1">
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </aside>
          <div>{children}</div>
        </div>
      </Container>
    </div>
  );
}
