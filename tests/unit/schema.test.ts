import { describe, it, expect } from "vitest";
import { localBusinessSchema, faqPageSchema, serviceSchema, citySchema, breadcrumbSchema } from "@/lib/schema";
import { SERVICES } from "@/lib/services";
import { CITIES } from "@/lib/cities";
import { SITE_FAQS } from "@/lib/faqs";

describe("JSON-LD schema", () => {
  it("localBusinessSchema is JSON-serializable and well-typed", () => {
    const s = localBusinessSchema();
    expect(s["@context"]).toBe("https://schema.org");
    expect(s["@type"]).toBe("LocalBusiness");
    expect(Array.isArray(s.areaServed)).toBe(true);
    expect(JSON.stringify(s)).toContain("LocalBusiness");
  });

  it("faqPageSchema produces a FAQPage", () => {
    const s = faqPageSchema(SITE_FAQS.slice(0, 3));
    expect(s["@type"]).toBe("FAQPage");
    expect(s.mainEntity).toHaveLength(3);
  });

  it("serviceSchema for every service is well-typed", () => {
    for (const svc of SERVICES) {
      const s = serviceSchema(svc);
      expect(s["@type"]).toBe("Service");
      expect(s.serviceType).toBe(svc.name);
    }
  });

  it("citySchema for every city is well-typed", () => {
    for (const c of CITIES) {
      const s = citySchema(c);
      expect(s["@type"]).toBe("LocalBusiness");
      expect((s.areaServed as { name: string }).name).toBe(c.name);
    }
  });

  it("breadcrumbSchema sequences items correctly", () => {
    const s = breadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
    ]);
    expect(s.itemListElement).toHaveLength(2);
    expect(s.itemListElement[0]?.position).toBe(1);
    expect(s.itemListElement[1]?.position).toBe(2);
  });
});
