import type { MetadataRoute } from "next";
import { BRAND } from "@/lib/brand";

// Required under `output: 'export'` so Next emits a static robots.txt at build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${BRAND.siteUrl}/sitemap.xml`,
    host: BRAND.siteUrl,
  };
}
