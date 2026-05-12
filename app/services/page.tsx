import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { CTABand } from "@/components/CTABand";
import { TrustBar } from "@/components/TrustBar";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Pressure Washing Services",
  description:
    "Residential and commercial pressure washing services in Sacramento and the Bay Area. Soft washing, roof cleaning, driveway and concrete, gutters, decks, windows, solar, graffiti, and more.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-900 py-14 text-white sm:py-20">
        <Container>
          <SectionHeader
            tone="dark"
            eyebrow="Services"
            title="Every exterior surface, the right way"
            description="We tailor pressure, chemistry, and technique to each surface — so siding, paint, and landscaping all stay safe while everything else gets a deep clean."
          />
        </Container>
      </section>
      <TrustBar />
      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <ServiceCard service={s} />
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CTABand />
    </>
  );
}
