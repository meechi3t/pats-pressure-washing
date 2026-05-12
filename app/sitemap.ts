import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";

// Required under `output: 'export'` so Next emits a static sitemap.xml at build.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.siteUrl;
  const lastModified = new Date();

  const corePaths = [
    "",
    "/services",
    "/gallery",
    "/reviews",
    "/about",
    "/service-areas",
    "/faq",
    "/contact",
    "/quote",
    "/privacy",
    "/terms",
  ];

  return [
    ...corePaths.map((p) => ({
      url: `${base}${p || "/"}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: p === "" ? 1.0 : 0.7,
    })),
    ...SERVICES.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...CITIES.map((c) => ({
      url: `${base}/service-areas/${c.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
