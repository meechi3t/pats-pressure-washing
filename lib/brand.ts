/**
 * Brand & business configuration.
 *
 * SINGLE SOURCE OF TRUTH for business info across the site.
 * Edit values here to update phone, email, business name, and CTA targets everywhere.
 *
 * The owner should replace every value in `placeholders: true` before launch.
 * Search for "PLACEHOLDER" in the codebase to find remaining ones.
 */

export const BRAND = {
  // PLACEHOLDER — replace with the real business name.
  businessName: ":Pat's Pressure Washing",

  // PLACEHOLDER — replace with the real phone (E.164 for tel: link, formatted for display).
  phone: {
    display: "(123) 456-7890",
    tel: "[PHONE NUMBER]", // tel: prefix is added at the link site
  },

  // PLACEHOLDER — replace with the real inbox.
  email: "Pat's Pressure Washing",

  // Primary CTA destination. Keep as /quote unless you wire a different form.
  quoteHref: "/quote",

  // Markets served (used in copy and metadata).
  primaryCity: "Sacramento, CA",
  secondaryMarket: "San Francisco Bay Area",

  // Trust signals (rendered in footer and the trust bar).
  trustSignals: [
    "Licensed & Insured",
    "Free Estimates",
    "Satisfaction Guaranteed",
    "Eco-Friendly Solutions",
    "Locally Owned & Operated",
    "Five-Star Rated",
  ],

  // Hours for LocalBusiness schema. Update to real hours before launch.
  hours: [
    { day: "Monday", open: "07:00", close: "19:00" },
    { day: "Tuesday", open: "07:00", close: "19:00" },
    { day: "Wednesday", open: "07:00", close: "19:00" },
    { day: "Thursday", open: "07:00", close: "19:00" },
    { day: "Friday", open: "07:00", close: "19:00" },
    { day: "Saturday", open: "08:00", close: "17:00" },
    { day: "Sunday", open: "Closed", close: "Closed" },
  ],

  // PLACEHOLDER — Used only by LocalBusiness schema. Owner may leave empty if not desired.
  // Geo coordinates for Sacramento, CA as a defensible default until real address is set.
  address: {
    streetAddress: "[STREET ADDRESS]",
    addressLocality: "Sacramento",
    addressRegion: "CA",
    postalCode: "[POSTAL CODE]",
    addressCountry: "US",
  },
  geo: { lat: 38.5816, lng: -121.4944 },

  // Social profiles for `sameAs` in schema. Set empty strings to omit.
  social: {
    facebook: "",
    instagram: "",
    yelp: "",
    google: "",
  },

  // Public URL — used by sitemap/robots and canonical tags.
  // Override via NEXT_PUBLIC_SITE_URL in .env.local.
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://example.com",
} as const;

export type Brand = typeof BRAND;

// Pre-formatted helpers (avoid repeating string ops in components).
export const telHref = `tel:${BRAND.phone.tel.replace(/[^0-9+]/g, "")}`;
export const mailtoHref = `mailto:${BRAND.email}`;
