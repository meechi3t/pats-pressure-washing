import { describe, it, expect } from "vitest";
import { QuoteSchema } from "@/lib/quote-schema";

const baseValid = {
  name: "Jane Smith",
  phone: "(916) 555-0123",
  email: "jane@example.com",
  serviceAddress: "123 Main St",
  city: "sacramento",
};

describe("QuoteSchema", () => {
  it("accepts a minimal valid payload", () => {
    const result = QuoteSchema.safeParse(baseValid);
    expect(result.success).toBe(true);
  });

  it("rejects missing name", () => {
    const { name: _omit, ...rest } = baseValid;
    void _omit;
    const result = QuoteSchema.safeParse(rest);
    expect(result.success).toBe(false);
  });

  it("rejects malformed email", () => {
    const result = QuoteSchema.safeParse({ ...baseValid, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects unknown city", () => {
    const result = QuoteSchema.safeParse({ ...baseValid, city: "atlantis" });
    expect(result.success).toBe(false);
  });

  it("rejects phone with letters", () => {
    const result = QuoteSchema.safeParse({ ...baseValid, phone: "abc123" });
    expect(result.success).toBe(false);
  });

  it("accepts a fully populated payload", () => {
    const result = QuoteSchema.safeParse({
      ...baseValid,
      propertyType: "residential",
      services: ["residential", "driveway-concrete"],
      squareFootage: "2000",
      preferredDate: "2026-06-01",
      notes: "Gate code 4321",
      photoFileNames: ["a.jpg", "b.jpg"],
      website: "",
    });
    expect(result.success).toBe(true);
  });

  it("accepts honeypot at schema level (route handler silently drops bot submissions)", () => {
    // The schema intentionally tolerates honeypot content so the route handler
    // can return a success-shaped response and not leak the trap.
    const result = QuoteSchema.safeParse({ ...baseValid, website: "spam" });
    expect(result.success).toBe(true);
  });

  it("rejects unknown service slug", () => {
    const result = QuoteSchema.safeParse({ ...baseValid, services: ["not-a-real-service"] });
    expect(result.success).toBe(false);
  });
});
