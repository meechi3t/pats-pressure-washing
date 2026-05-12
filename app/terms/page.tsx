import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { BRAND, mailtoHref } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${BRAND.businessName}.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <article className="prose-brand max-w-3xl">
          <h1 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">Terms of Service</h1>
          <p className="mt-2 text-sm text-ink-500">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <p className="mt-6 text-ink-700">
            By accessing this website you agree to these terms. {BRAND.businessName} provides this site for informational purposes and to facilitate service requests.
          </p>

          <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">No warranty</h2>
          <p className="mt-3 text-ink-700">
            Information on this website is provided &ldquo;as is&rdquo; without warranty of any kind. Pricing and availability shown are estimates and subject to confirmation at the time of quote.
          </p>

          <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">Service agreement</h2>
          <p className="mt-3 text-ink-700">
            Specific terms governing the cleaning services we perform are provided separately at the time of your quote and acceptance.
          </p>

          <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">Intellectual property</h2>
          <p className="mt-3 text-ink-700">
            All content on this site is the property of {BRAND.businessName} or its licensors and is protected by applicable copyright and trademark law.
          </p>

          <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">Limitation of liability</h2>
          <p className="mt-3 text-ink-700">
            To the maximum extent permitted by law, {BRAND.businessName} is not liable for any indirect, incidental, or consequential damages arising from your use of this site.
          </p>

          <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">Contact</h2>
          <p className="mt-3 text-ink-700">
            Questions? Email{" "}
            <a href={mailtoHref} className="font-semibold text-brand-700 hover:underline">
              {BRAND.email}
            </a>
            .
          </p>
        </article>
      </Container>
    </section>
  );
}
