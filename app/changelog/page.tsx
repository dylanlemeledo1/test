import type { Metadata } from "next";
import { PageHero } from "@/components/primitives/PageHero";
import { Container } from "@/components/primitives/Container";
import { CHANGELOG } from "@/lib/data";
import { ChangelogList } from "@/components/sections/ChangelogList";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Every shipped change, every release. We ship Nebula every week.",
};

export default function ChangelogPage() {
  return (
    <>
      <PageHero
        eyebrow="Changelog"
        title={<>Every release, every week.</>}
        description="We ship Nebula constantly. Here's what's new — features, improvements, and the unglamorous fixes that keep things smooth."
      />
      <section className="relative pb-32">
        <Container size="default">
          <ChangelogList entries={CHANGELOG} />
        </Container>
      </section>
    </>
  );
}
