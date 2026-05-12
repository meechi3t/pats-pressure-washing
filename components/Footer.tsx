import Link from "next/link";
import { BRAND, mailtoHref, telHref } from "@/lib/brand";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";
import { Icon } from "./Icon";

export function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
                <Icon name="soft-spray" className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold">{BRAND.businessName}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-white/80">
              Professional pressure washing across {BRAND.primaryCity} and the {BRAND.secondaryMarket}. Licensed,
              insured, eco-conscious, and easy to book.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li>
                <a
                  href={telHref}
                  className="inline-flex items-center gap-2 hover:text-accent-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
                >
                  <Icon name="phone" className="h-4 w-4" />
                  {BRAND.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 hover:text-accent-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
                >
                  <Icon name="mail" className="h-4 w-4" />
                  {BRAND.email}
                </a>
              </li>
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2 text-xs">
              {BRAND.trustSignals.map((t) => (
                <li key={t} className="rounded-full bg-white/10 px-3 py-1">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">Services</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-white/80 hover:text-accent-300">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">Sacramento Area</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {CITIES.filter((c) => c.region === "Sacramento").map((c) => (
                <li key={c.slug}>
                  <Link href={`/service-areas/${c.slug}`} className="text-white/80 hover:text-accent-300">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-white/60">Bay Area</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {CITIES.filter((c) => c.region === "Bay Area").map((c) => (
                <li key={c.slug}>
                  <Link href={`/service-areas/${c.slug}`} className="text-white/80 hover:text-accent-300">
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} {BRAND.businessName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-4">
            <li>
              <Link href="/privacy" className="hover:text-accent-300">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-accent-300">
                Terms
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/quote" className="hover:text-accent-300">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
