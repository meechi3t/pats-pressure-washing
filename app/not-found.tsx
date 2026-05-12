import Link from "next/link";
import { Container } from "@/components/Container";
import { LinkButton } from "@/components/Button";
import { BRAND, telHref } from "@/lib/brand";
import { Icon } from "@/components/Icon";

export default function NotFound() {
  return (
    <Container className="py-20">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-display text-5xl font-bold text-brand-900">404</h1>
        <p className="mt-3 text-xl text-ink-700">We couldn&rsquo;t find that page.</p>
        <p className="mt-2 text-ink-500">
          Try our <Link href="/services" className="font-semibold text-brand-700 hover:underline">services</Link> or{" "}
          <Link href="/service-areas" className="font-semibold text-brand-700 hover:underline">service areas</Link>.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <LinkButton href={BRAND.quoteHref} variant="primary" size="lg">
            Get a Free Quote
          </LinkButton>
          <LinkButton href={telHref} variant="secondary" size="lg">
            <Icon name="phone" className="h-5 w-5" />
            Call us
          </LinkButton>
        </div>
      </div>
    </Container>
  );
}
