import Image from "next/image";
import type { City } from "@/lib/cities";
import { BRAND, telHref } from "@/lib/brand";
import { Container } from "./Container";
import { LinkButton } from "./Button";
import { Icon } from "./Icon";

export function CityHero({ city }: { city: City }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-700 to-brand-900 text-white">
      <div className="absolute inset-0 -z-10 opacity-25">
        <Image
          src="/images/placeholders/hero-city.svg"
          alt={`A residential street in ${city.name}.`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <Container className="relative py-14 sm:py-20">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-200">
            {city.region === "Sacramento" ? "Sacramento Region" : "Bay Area"}
          </div>
          <h1 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Pressure Washing in {city.displayName}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/85">{city.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <LinkButton href={BRAND.quoteHref} variant="primary" size="lg">
              Get a Free {city.name} Quote
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
  );
}
