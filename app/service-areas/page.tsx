import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustBar } from "@/components/TrustBar";
import { CTABand } from "@/components/CTABand";
import { JsonLd } from "@/components/JsonLd";
import { Icon } from "@/components/Icon";
import { BRAND } from "@/lib/brand";
import { CITIES, SACRAMENTO_CITIES, BAY_AREA_CITIES } from "@/lib/cities";
import { localBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `Pressure washing across ${BRAND.primaryCity} and the ${BRAND.secondaryMarket}. ${CITIES.length} cities and growing.`,
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema({ canonicalPath: "/service-areas" })} />

      <section className="bg-brand-900 py-14 text-white sm:py-20">
        <Container>
          <SectionHeader
            tone="dark"
            eyebrow="Service areas"
            title={`We serve ${BRAND.primaryCity} & the ${BRAND.secondaryMarket}`}
            description={`From the Sacramento Delta to the San Francisco peninsula, we know the climate, the housing stock, and the cleaning challenges of each community we serve. ${CITIES.length} cities and counting.`}
          />
        </Container>
      </section>

      <TrustBar />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-brand-900">Sacramento Region</h2>
              <p className="mt-3 text-ink-600">
                The Central Valley&rsquo;s mix of Delta dust, dry-summer heat, and seasonal pollen makes exterior surfaces
                accumulate film fast. We&rsquo;ve cleaned across every Sacramento neighborhood.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {SACRAMENTO_CITIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/service-areas/${c.slug}`}
                      className="flex items-center justify-between rounded-2xl border border-ink-100 bg-white p-4 transition hover:border-brand-200 hover:bg-brand-50"
                    >
                      <span>
                        <span className="block font-semibold text-brand-900">{c.name}</span>
                        <span className="block text-sm text-ink-500">{c.region}</span>
                      </span>
                      <Icon name="arrow-right" className="h-5 w-5 text-brand-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-900">San Francisco Bay Area</h2>
              <p className="mt-3 text-ink-600">
                Marine layer, salt air, and East-Bay heat make Bay Area homes uniquely susceptible to mildew and
                weathering. Our soft-wash methods are built for it.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {BAY_AREA_CITIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/service-areas/${c.slug}`}
                      className="flex items-center justify-between rounded-2xl border border-ink-100 bg-white p-4 transition hover:border-brand-200 hover:bg-brand-50"
                    >
                      <span>
                        <span className="block font-semibold text-brand-900">{c.name}</span>
                        <span className="block text-sm text-ink-500">{c.region}</span>
                      </span>
                      <Icon name="arrow-right" className="h-5 w-5 text-brand-600" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
