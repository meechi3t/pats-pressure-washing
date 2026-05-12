import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustBar } from "@/components/TrustBar";
import { QuoteForm } from "@/components/QuoteForm";
import { Icon } from "@/components/Icon";
import { BRAND, telHref } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Request a Free Quote",
  description: `Free pressure washing quotes for residential and commercial properties across ${BRAND.primaryCity} and the ${BRAND.secondaryMarket}. Most quotes return the same business day.`,
  alternates: { canonical: "/quote" },
  robots: {
    index: true,
    follow: true,
  },
};

export default function QuotePage() {
  return (
    <>
      <section className="bg-brand-900 py-14 text-white sm:py-16">
        <Container>
          <SectionHeader
            tone="dark"
            eyebrow="Free Quote"
            title="Tell us what needs cleaning"
            description="Send us a few details and we'll send back a real quote — usually same business day. No obligation, no high-pressure follow-ups."
          />
        </Container>
      </section>

      <TrustBar />

      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8">
              <QuoteForm />
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
                <h2 className="font-display text-lg font-semibold text-brand-900">Prefer to talk?</h2>
                <p className="mt-2 text-sm text-ink-600">We always answer. If we miss you, we call back within the hour during business hours.</p>
                <a href={telHref} className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-brand-700 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-800">
                  <Icon name="phone" className="h-4 w-4" />
                  {BRAND.phone.display}
                </a>
              </div>

              <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                <h2 className="font-display text-lg font-semibold text-brand-900">What happens next?</h2>
                <ol className="mt-3 list-inside list-decimal space-y-2 text-sm text-ink-700">
                  <li>We review your details (usually within hours).</li>
                  <li>We send a real quote with a clear scope and price.</li>
                  <li>You pick a date that works. We text on arrival.</li>
                  <li>Before-and-after photos, then we leave the place clean.</li>
                </ol>
              </div>

              <div className="rounded-2xl border border-accent-200 bg-accent-50 p-6">
                <h2 className="font-display text-lg font-semibold text-brand-900">Photos help</h2>
                <p className="mt-2 text-sm text-ink-700">
                  Snap a few shots of the surfaces you&rsquo;d like cleaned. The more we can see, the faster and more accurate the quote.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
