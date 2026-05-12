import { BRAND, telHref } from "@/lib/brand";
import { Container } from "./Container";
import { LinkButton } from "./Button";
import { Icon } from "./Icon";

type Props = {
  title?: string;
  subtitle?: string;
};

export function CTABand({
  title = "Ready for a property that looks brand new?",
  subtitle = "Free quotes are usually back the same day. Tell us what needs cleaning — we'll handle the rest.",
}: Props) {
  return (
    <section className="bg-brand-800 text-white">
      <Container className="flex flex-col items-start gap-6 py-12 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-white/85">{subtitle}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <LinkButton href={BRAND.quoteHref} variant="primary" size="lg">
            Get a Free Quote
          </LinkButton>
          <LinkButton href={telHref} variant="white" size="lg">
            <Icon name="phone" className="h-5 w-5" />
            Call {BRAND.phone.display}
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
