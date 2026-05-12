import { describe, it, expect } from "vitest";
import { SERVICES } from "@/lib/services";
import { CITIES, SACRAMENTO_CITIES, BAY_AREA_CITIES } from "@/lib/cities";
import { TESTIMONIALS } from "@/lib/testimonials";
import { SITE_FAQS } from "@/lib/faqs";

describe("data shapes", () => {
  it("has 11 services (matching the brief)", () => {
    expect(SERVICES).toHaveLength(11);
  });

  it("each service has unique slug, name, bullets, surfaces, and faqs", () => {
    const slugs = new Set(SERVICES.map((s) => s.slug));
    expect(slugs.size).toBe(SERVICES.length);
    for (const s of SERVICES) {
      expect(s.bullets.length).toBeGreaterThan(0);
      expect(s.surfaces.length).toBeGreaterThan(0);
      expect(s.faq.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("has 17 cities split 7 Sacramento + 10 Bay Area", () => {
    expect(CITIES).toHaveLength(17);
    expect(SACRAMENTO_CITIES).toHaveLength(7);
    expect(BAY_AREA_CITIES).toHaveLength(10);
  });

  it("each city has unique slug and required content", () => {
    const slugs = new Set(CITIES.map((c) => c.slug));
    expect(slugs.size).toBe(CITIES.length);
    for (const c of CITIES) {
      expect(c.intro.length).toBeGreaterThan(80);
      expect(c.whyLocals.length).toBeGreaterThanOrEqual(3);
      expect(c.faqs.length).toBeGreaterThanOrEqual(3);
      expect(c.testimonialQuoteIds.length).toBeGreaterThanOrEqual(2);
    }
  });

  it("each city intro is unique (no copy-paste)", () => {
    const intros = CITIES.map((c) => c.intro);
    const unique = new Set(intros);
    expect(unique.size).toBe(intros.length);
  });

  it("has 8+ testimonials", () => {
    expect(TESTIMONIALS.length).toBeGreaterThanOrEqual(8);
    for (const t of TESTIMONIALS) {
      expect(t.stars === 4 || t.stars === 5).toBe(true);
      expect(t.quote.length).toBeGreaterThan(40);
    }
  });

  it("city testimonialQuoteIds all resolve", () => {
    const ids = new Set(TESTIMONIALS.map((t) => t.id));
    for (const c of CITIES) {
      for (const tid of c.testimonialQuoteIds) {
        expect(ids.has(tid)).toBe(true);
      }
    }
  });

  it("has at least 12 site FAQs", () => {
    expect(SITE_FAQS.length).toBeGreaterThanOrEqual(12);
  });
});
