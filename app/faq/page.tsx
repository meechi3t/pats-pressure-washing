import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQItem } from "@/components/FAQItem";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { SITE_FAQS } from "@/lib/faqs";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Common questions about pressure washing, soft washing, scheduling, pricing, insurance, and eco-friendly cleaning solutions.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(SITE_FAQS)} />

      <section className="bg-brand-900 py-14 text-white sm:py-20">
        <Container>
          <SectionHeader
            tone="dark"
            eyebrow="FAQ"
            title="Answers to the questions we hear most"
            description="If we missed yours, give us a call — we'll never make you feel bad for asking."
          />
        </Container>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-4">
            {SITE_FAQS.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
