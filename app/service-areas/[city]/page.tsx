import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { CityHero } from "@/components/CityHero";
import { TrustBar } from "@/components/TrustBar";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialCard } from "@/components/Testimonial";
import { FAQItem } from "@/components/FAQItem";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { BRAND } from "@/lib/brand";
import { CITIES, getCity } from "@/lib/cities";
import { SERVICES } from "@/lib/services";
import { testimonialsForCity } from "@/lib/testimonials";
import { breadcrumbSchema, citySchema, faqPageSchema } from "@/lib/schema";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const c = getCity(params.city);
  if (!c) return {};
  return {
    title: `Pressure Washing in ${c.displayName}`,
    description: `Professional residential and commercial pressure washing in ${c.displayName}. Soft washing, driveways, roofs, gutters, and more. Licensed and insured. Free same-day quotes.`,
    alternates: { canonical: `/service-areas/${c.slug}` },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = getCity(params.city);
  if (!city) notFound();

  const testimonials = testimonialsForCity(city.testimonialQuoteIds);

  return (
    <>
      <JsonLd data={citySchema(city)} />
      <JsonLd data={faqPageSchema(city.faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/service-areas" },
          { name: city.name, href: `/service-areas/${city.slug}` },
        ])}
      />

      <CityHero city={city} />
      <TrustBar />

      {/* Why locals choose us */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow={`Why ${city.name} chooses us`}
            title="Local knowledge, local trust"
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {city.whyLocals.map((r) => (
              <li key={r.title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-600">
                  <Icon name="check" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{r.body}</p>
              </li>
            ))}
          </ul>

          {city.localHooks?.length ? (
            <div className="mt-10 rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h3 className="font-display text-base font-semibold text-brand-900">What we see most in {city.name}</h3>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {city.localHooks.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-ink-700">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </Container>
      </section>

      {/* Services offered in this city */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <SectionHeader
            eyebrow="Services"
            title={`Pressure washing services in ${city.displayName}`}
            description="Click any service to learn more. Everything we do, available in this city."
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

      {/* Testimonials from this city */}
      {testimonials.length > 0 ? (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <SectionHeader
              eyebrow={`${city.name} customers`}
              title="What your neighbors say"
            />
            <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <li key={t.id}>
                  <TestimonialCard t={t} />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      {/* City FAQs */}
      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow={`${city.name} FAQs`} title="Local questions, local answers" />
          <div className="mt-10 grid gap-4">
            {city.faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
          <p className="mt-8 text-sm text-ink-600">
            Looking for more? Browse our{" "}
            <Link href="/faq" className="font-semibold text-brand-700 hover:underline">
              full FAQ
            </Link>
            .
          </p>
        </Container>
      </section>

      {city.neighborhoods && city.neighborhoods.length > 0 ? (
        <section className="bg-white py-12">
          <Container>
            <h2 className="font-display text-xl font-semibold text-brand-900">Neighborhoods we cover in {city.name}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {city.neighborhoods.map((n) => (
                <li key={n} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800">
                  {n}
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <CTABand title={`Book pressure washing in ${city.name}`} subtitle={`Free quotes, usually same day. Most ${city.name} jobs scheduled within a week.`} />
    </>
  );
}
