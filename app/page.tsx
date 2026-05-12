import Link from "next/link";
import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Container } from "@/components/Container";
import { TrustBar } from "@/components/TrustBar";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { GalleryGrid } from "@/components/GalleryGrid";
import { TestimonialCard } from "@/components/Testimonial";
import { FAQItem } from "@/components/FAQItem";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { BRAND } from "@/lib/brand";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";
import { TESTIMONIALS } from "@/lib/testimonials";
import { SITE_FAQS } from "@/lib/faqs";
import { GALLERY } from "@/lib/gallery";
import { faqPageSchema, localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: `Pressure Washing in ${BRAND.primaryCity} & the ${BRAND.secondaryMarket}`,
  description: `Residential and commercial exterior cleaning that restores curb appeal across ${BRAND.primaryCity} and the ${BRAND.secondaryMarket}. Free quotes, licensed and insured, eco-friendly solutions.`,
  alternates: { canonical: "/" },
};

const REASONS = [
  { icon: "shield", title: "Licensed, insured, and trained", body: "Every technician is trained on soft-wash and surface-cleaner technique. We carry general liability and workers' comp." },
  { icon: "leaf", title: "Eco-friendly chemistry", body: "Biodegradable detergents, controlled rinse, and a watershed mindset on every job." },
  { icon: "check", title: "Surface-specific approach", body: "Stucco gets soft-wash. Concrete gets surface-cleaner. Wood gets a gentler touch. We don't blast everything the same way." },
  { icon: "star", title: "Five-star results, every time", body: "We text before we arrive, send before/after photos, and don't leave until you're delighted." },
  { icon: "map", title: "Local crews, local knowledge", body: "Sacramento Delta dust, Bay Area marine layer, foothill heat — we know what your home is up against." },
  { icon: "calendar", title: "Easy scheduling", body: "Most quotes go out the same business day. Booking is usually within 7–10 days." },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={localBusinessSchema({ canonicalPath: "/" })} />
      <JsonLd data={faqPageSchema(SITE_FAQS.slice(0, 5))} />

      <Hero
        eyebrow={`Serving ${BRAND.primaryCity} & the ${BRAND.secondaryMarket}`}
        headline={`Professional Pressure Washing Across ${BRAND.primaryCity} & the Bay Area`}
        subheadline="Residential and commercial exterior cleaning that restores curb appeal, protects your property, and makes booking simple."
      />

      <TrustBar />

      {/* Services */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="What we clean"
            title="Pressure washing for every exterior surface"
            description="From stucco facades to tile roofs, concrete driveways to redwood decks — each surface gets the right pressure and chemistry."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <ServiceCard service={s} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Gallery preview */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="flex items-end justify-between">
            <SectionHeader
              eyebrow="Before & After"
              title="Real results, real homes"
              description="A small sample. Hundreds more across the Sacramento and Bay Area neighborhoods we serve."
            />
            <Link
              href="/gallery"
              className="hidden whitespace-nowrap text-sm font-semibold text-brand-700 hover:text-brand-800 sm:inline-flex sm:items-center sm:gap-1"
            >
              View full gallery
              <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10">
            <GalleryGrid items={GALLERY.slice(0, 6)} />
          </div>
          <div className="mt-6 text-center sm:hidden">
            <Link href="/gallery" className="text-sm font-semibold text-brand-700">
              View full gallery →
            </Link>
          </div>
        </Container>
      </section>

      {/* Why choose us */}
      <section className="bg-brand-900 py-16 text-white sm:py-20">
        <Container>
          <SectionHeader
            tone="dark"
            eyebrow="Why locals choose us"
            title="A concierge experience for your home's exterior"
            description="We treat your property like our own. Communication, care, and a clean finish — every job."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {REASONS.map((r) => (
              <li key={r.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-500 text-white">
                  <Icon name={r.icon as "shield" | "leaf" | "check" | "star" | "map" | "calendar"} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-white/80">{r.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Reviews"
            title="What our neighbors are saying"
            description="Real homeowners, realtors, and businesses across our service area."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.slice(0, 6).map((t) => (
              <li key={t.id}>
                <TestimonialCard t={t} />
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link href="/reviews" className="text-sm font-semibold text-brand-700 hover:underline">
              Read all reviews →
            </Link>
          </div>
        </Container>
      </section>

      {/* Service areas */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Service areas"
            title="Serving Sacramento & the Bay Area"
            description="Drop us your address — if you're in one of our cities, we're often there same week."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-xl font-semibold text-brand-900">Sacramento Region</h3>
              <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {CITIES.filter((c) => c.region === "Sacramento").map((c) => (
                  <li key={c.slug}>
                    <Link href={`/service-areas/${c.slug}`} className="block rounded-xl border border-ink-100 bg-white px-3 py-2 text-sm font-medium text-ink-700 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-brand-900">Bay Area</h3>
              <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {CITIES.filter((c) => c.region === "Bay Area").map((c) => (
                  <li key={c.slug}>
                    <Link href={`/service-areas/${c.slug}`} className="block rounded-xl border border-ink-100 bg-white px-3 py-2 text-sm font-medium text-ink-700 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ preview */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="FAQ"
            title="Answers to common questions"
            description="The rest are on our full FAQ. If we missed yours, call us — we like talking about pressure washing."
          />
          <div className="mt-10 grid gap-4">
            {SITE_FAQS.slice(0, 5).map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-sm font-semibold text-brand-700 hover:underline">
              See all FAQs →
            </Link>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
