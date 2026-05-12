import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { BRAND, mailtoHref } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${BRAND.businessName}.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <article className="prose-brand max-w-3xl">
          <h1 className="font-display text-3xl font-bold text-brand-900 sm:text-4xl">Privacy Policy</h1>
          <p className="mt-2 text-sm text-ink-500">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

          <p className="mt-6 text-ink-700">
            {BRAND.businessName} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) values your privacy. This policy explains what we collect when you use our website, how we use it, and your choices.
          </p>

          <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">What we collect</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-700">
            <li>Contact and service-request details you submit through our quote form (name, phone, email, service address, service preferences, and any photos or notes you provide).</li>
            <li>Basic technical information (IP address, browser, pages visited) used to operate the site, prevent abuse, and improve performance.</li>
          </ul>

          <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">How we use it</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-700">
            <li>To respond to your quote request and provide the services you ask for.</li>
            <li>To improve the site and our services.</li>
            <li>To comply with legal requirements.</li>
          </ul>

          <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">What we don&rsquo;t do</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-700">
            <li>We do not sell your personal information.</li>
            <li>We do not share your contact details with third parties for their marketing.</li>
          </ul>

          <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">Your choices</h2>
          <p className="mt-3 text-ink-700">
            You may request that we delete the information you&rsquo;ve submitted by emailing{" "}
            <a href={mailtoHref} className="font-semibold text-brand-700 hover:underline">
              {BRAND.email}
            </a>
            .
          </p>

          <h2 className="mt-10 font-display text-xl font-semibold text-brand-900">Contact</h2>
          <p className="mt-3 text-ink-700">
            Questions about this policy? Email{" "}
            <a href={mailtoHref} className="font-semibold text-brand-700 hover:underline">
              {BRAND.email}
            </a>{" "}
            or call us.
          </p>
        </article>
      </Container>
    </section>
  );
}
