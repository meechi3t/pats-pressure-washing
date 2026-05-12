/**
 * JSON-LD helpers. Pure functions — call them from `app/.../page.tsx` and
 * render the result through <JsonLd>.
 *
 * All output is plain serializable JSON; no live URLs or PII.
 */

import { BRAND } from "./brand";
import { CITIES } from "./cities";
import type { City } from "./cities";
import type { Service } from "./services";

const SITE_URL = BRAND.siteUrl;

export function localBusinessSchema(opts?: { canonicalPath?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    name: BRAND.businessName,
    image: `${SITE_URL}/images/og/og-default.svg`,
    url: `${SITE_URL}${opts?.canonicalPath ?? "/"}`,
    telephone: BRAND.phone.display,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BRAND.address.streetAddress,
      addressLocality: BRAND.address.addressLocality,
      addressRegion: BRAND.address.addressRegion,
      postalCode: BRAND.address.postalCode,
      addressCountry: BRAND.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BRAND.geo.lat,
      longitude: BRAND.geo.lng,
    },
    areaServed: CITIES.map((c) => ({
      "@type": "City",
      name: c.name,
    })),
    openingHoursSpecification: BRAND.hours
      .filter((h) => h.open !== "Closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: h.open,
        closes: h.close,
      })),
    sameAs: Object.values(BRAND.social).filter(Boolean),
    priceRange: "$$",
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: BRAND.businessName,
    },
    areaServed: CITIES.map((c) => ({ "@type": "City", name: c.name })),
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

export function citySchema(city: City) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/service-areas/${city.slug}/#business`,
    name: `${BRAND.businessName} — ${city.name}`,
    url: `${SITE_URL}/service-areas/${city.slug}`,
    telephone: BRAND.phone.display,
    image: `${SITE_URL}/images/og/og-default.svg`,
    areaServed: { "@type": "City", name: city.name, address: { "@type": "PostalAddress", addressLocality: city.name, addressRegion: "CA" } },
    address: {
      "@type": "PostalAddress",
      addressLocality: city.name,
      addressRegion: "CA",
      addressCountry: "US",
    },
    priceRange: "$$",
  };
}

export function faqPageSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href}`,
    })),
  };
}
