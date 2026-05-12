import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { FAQItem } from "@/components/FAQItem";
import { CTABand } from "@/components/CTABand";
import { TrustBar } from "@/components/TrustBar";
import { JsonLd } from "@/components/JsonLd";
import { LinkButton } from "@/components/Button";
import { Icon } from "@/components/Icon";
import { BRAND, telHref } from "@/lib/brand";
import { SERVICES, getService } from "@/lib/services";
import { CITIES } from "@/lib/cities";
import { breadcrumbSchema, faqPageSchema, serviceSchema } from "@/lib/schema";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: `${s.name} | ${BRAND.primaryCity} & Bay Area`,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqPageSchema(service.faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: service.shortName, href: `/services/${service.slug}` },
        ])}
      />

      <section className="bg-brand-900 py-14 text-white sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-200">
              {service.shortName}
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">{service.name}</h1>
            <p className="mt-4 text-lg text-white/85">{service.tagline}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={BRAND.quoteHref} variant="primary" size="lg">
                Get a Free Quote
                <Icon name="arrow-right" className="h-5 w-5" />
              </LinkButton>
              <LinkButton href={telHref} variant="white" size="lg">
                <Icon name="phone" className="h-5 w-5" />
                Call {BRAND.phone.display}
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>

      <TrustBar />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeader eyebrow="What we do" title="A surface-specific approach" />
              <p className="mt-6 text-lg leading-relaxed text-ink-700">{service.description}</p>

              <h3 className="mt-10 font-display text-xl font-semibold text-brand-900">What&rsquo;s included</h3>
              <ul className="mt-4 grid gap-2">
                {service.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-ink-700">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 font-display text-xl font-semibold text-brand-900">Surfaces we work on</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {service.surfaces.map((s) => (
                  <li key={s} className="rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="rounded-2xl border border-ink-100 bg-ink-50 p-6">
              <h3 className="font-display text-lg font-semibold text-brand-900">Available everywhere we serve</h3>
              <p className="mt-2 text-sm text-ink-600">{service.shortName} in our service area:</p>
              <ul className="mt-4 grid grid-cols-2 gap-1.5 text-sm">
                {CITIES.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/service-areas/${c.slug}`} className="text-brand-700 hover:underline">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/service-areas"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
              >
                See all service areas <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </aside>
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="Common questions" title={`${service.shortName} FAQs`} />
          <div className="mt-10 grid gap-4">
            {service.faq.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </Container>
      </section>

      <CTABand title={`Ready to book ${service.shortName.toLowerCase()}?`} />
    </>
  );
}
