import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { TestimonialCard } from "@/components/Testimonial";
import { CTABand } from "@/components/CTABand";
import { TESTIMONIALS } from "@/lib/testimonials";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description: `Real reviews from homeowners, realtors, and businesses across ${BRAND.primaryCity} and the ${BRAND.secondaryMarket}.`,
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-brand-900 py-14 text-white sm:py-20">
        <Container>
          <SectionHeader
            tone="dark"
            eyebrow="Reviews"
            title="Concierge service, five-star results"
            description="Homeowners, realtors, property managers, and business owners — across both regions we serve."
          />
        </Container>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <li key={t.id}>
                <TestimonialCard t={t} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
