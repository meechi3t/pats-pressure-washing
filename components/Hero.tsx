import Image from "next/image";
import { BRAND, telHref } from "@/lib/brand";
import { LinkButton } from "./Button";
import { Container } from "./Container";
import { Icon } from "./Icon";

type Props = {
  eyebrow?: string;
  headline: string;
  subheadline: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function Hero({
  eyebrow,
  headline,
  subheadline,
  imageSrc = "/images/hero/hero-powerwash.jpg",
  imageAlt = "High-pressure water spray cleaning a concrete surface.",
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 text-white">
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-2xl">
          {eyebrow ? (
            <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent-200">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl">{subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href={BRAND.quoteHref} variant="primary" size="lg">
              Get a Free Quote
              <Icon name="arrow-right" className="h-5 w-5" />
            </LinkButton>
            <LinkButton href={telHref} variant="white" size="lg">
              <Icon name="phone" className="h-5 w-5" />
              Call {BRAND.phone.display}
            </LinkButton>
          </div>
          <p className="mt-4 text-sm text-white/90">
            Free estimates &middot; Same-day response &middot; Licensed &amp; insured
          </p>
        </div>
      </Container>
    </section>
  );
}
