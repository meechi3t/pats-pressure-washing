import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { TrustBar } from "@/components/TrustBar";
import { CTABand } from "@/components/CTABand";
import { Icon } from "@/components/Icon";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "About Us",
  description: `${BRAND.businessName} is a locally owned pressure washing company serving ${BRAND.primaryCity} and the ${BRAND.secondaryMarket}.`,
  alternates: { canonical: "/about" },
};

const VALUES = [
  { icon: "shield", title: "Care first", body: "We treat your property like our own. Pressure and chemistry match each surface — never one-size-fits-all." },
  { icon: "leaf", title: "Eco-aware", body: "Biodegradable detergents, controlled rinse, and a watershed mindset on every job. We live here too." },
  { icon: "calendar", title: "Concierge experience", body: "We text on the way, send before/after photos, and don't leave until you've signed off." },
  { icon: "star", title: "Built to last", body: "Five-star results aren't enough. We build relationships — the recurring work is the real measure." },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-900 py-14 text-white sm:py-20">
        <Container>
          <SectionHeader
            tone="dark"
            eyebrow="About"
            title={`Locally owned. Built for ${BRAND.primaryCity} & the Bay Area.`}
            description={`${BRAND.businessName} was founded on a simple idea: pressure washing should look easy from the outside because the team behind it is meticulous on the inside. We're locally owned, licensed, insured, and built to be the company you call for years, not once.`}
          />
        </Container>
      </section>

      <TrustBar />

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionHeader eyebrow="Our approach" title="What you can expect from us" />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <li key={v.title} className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 text-accent-600">
                  <Icon name={v.icon as "shield" | "leaf" | "calendar" | "star"} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-brand-900">{v.title}</h3>
                <p className="mt-2 text-sm text-ink-600">{v.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader eyebrow="Local roots" title="Built around two regions" />
              <p className="mt-6 text-lg leading-relaxed text-ink-700">
                {BRAND.primaryCity} and the {BRAND.secondaryMarket} aren&rsquo;t just markets to us &mdash; they&rsquo;re communities
                where we live, where our crews live, and where our reputation is built one driveway at a time. We
                know which neighborhoods need a softer touch, which surfaces tolerate which pressure, and which
                seasons demand which chemistry.
              </p>
            </div>
            <div>
              <SectionHeader eyebrow="Insured & ethical" title="Trust isn&rsquo;t a tagline" />
              <p className="mt-6 text-lg leading-relaxed text-ink-700">
                We carry general liability and workers&rsquo; compensation insurance, we&rsquo;re happy to email a Certificate
                of Insurance to your property manager or HOA, and we never use surfactants or detergents we wouldn&rsquo;t
                use on our own homes. Period.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
