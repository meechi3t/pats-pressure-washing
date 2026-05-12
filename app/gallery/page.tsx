import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTABand } from "@/components/CTABand";
import { GALLERY } from "@/lib/gallery";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description: `Real before-and-after pressure washing results from homes and businesses across ${BRAND.primaryCity} and the ${BRAND.secondaryMarket}.`,
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-brand-900 py-14 text-white sm:py-20">
        <Container>
          <SectionHeader
            tone="dark"
            eyebrow="Before & After"
            title="See the difference, surface by surface"
            description="Stucco facades, tile roofs, concrete driveways, redwood decks, commercial sidewalks. Real homes, real businesses, real results."
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <GalleryGrid items={GALLERY} />
        </Container>
      </section>

      <CTABand title="Want results like these?" />
    </>
  );
}
