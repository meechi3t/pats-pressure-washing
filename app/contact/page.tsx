import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { LinkButton } from "@/components/Button";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/components/Icon";
import { BRAND, telHref, mailtoHref } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call, email, or request a free quote from ${BRAND.businessName}. Serving Sacramento and the San Francisco Bay Area.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-900 py-14 text-white sm:py-20">
        <Container>
          <SectionHeader
            tone="dark"
            eyebrow="Contact"
            title="We'd love to hear from you"
            description="Most quote requests are answered the same business day. For urgent jobs (graffiti, water-damage prevention), give us a call."
          />
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
              <Icon name="phone" className="h-6 w-6 text-brand-700" />
              <h2 className="mt-3 font-display text-lg font-semibold text-brand-900">Call us</h2>
              <p className="mt-1 text-sm text-ink-600">Open most days. Voicemail is checked hourly.</p>
              <LinkButton href={telHref} variant="secondary" size="md" className="mt-4">
                {BRAND.phone.display}
              </LinkButton>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
              <Icon name="mail" className="h-6 w-6 text-brand-700" />
              <h2 className="mt-3 font-display text-lg font-semibold text-brand-900">Email</h2>
              <p className="mt-1 text-sm text-ink-600">Good for property managers, COIs, or detailed RFPs.</p>
              <LinkButton href={mailtoHref} variant="secondary" size="md" className="mt-4">
                {BRAND.email}
              </LinkButton>
            </div>

            <div className="rounded-2xl border border-ink-100 bg-accent-50 p-6 shadow-soft">
              <Icon name="check" className="h-6 w-6 text-accent-600" />
              <h2 className="mt-3 font-display text-lg font-semibold text-brand-900">Request a free quote</h2>
              <p className="mt-1 text-sm text-ink-700">Send photos and any details — quote returns usually the same business day.</p>
              <LinkButton href={BRAND.quoteHref} variant="primary" size="md" className="mt-4">
                Get a Free Quote
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
