import { test, expect } from "@playwright/test";
import { SERVICES } from "../../lib/services";
import { CITIES } from "../../lib/cities";

test.describe("public routes render", () => {
  test("homepage responds 200 and shows the hero", async ({ page }) => {
    const res = await page.goto("/");
    expect(res?.ok()).toBeTruthy();
    await expect(page.getByRole("heading", { level: 1 })).toContainText("Pressure Washing");
    await expect(page.getByRole("link", { name: /get a free quote/i }).first()).toBeVisible();
  });

  test("services index lists all services", async ({ page }) => {
    await page.goto("/services");
    for (const s of SERVICES) {
      await expect(page.getByRole("heading", { name: s.shortName }).first()).toBeVisible();
    }
  });

  for (const s of SERVICES) {
    test(`service page /services/${s.slug} responds`, async ({ page }) => {
      const res = await page.goto(`/services/${s.slug}`);
      expect(res?.ok()).toBeTruthy();
      await expect(page.getByRole("heading", { level: 1 })).toContainText(s.shortName);
    });
  }

  test("service-areas hub lists all 17 cities", async ({ page }) => {
    await page.goto("/service-areas");
    for (const c of CITIES) {
      await expect(page.getByRole("link", { name: new RegExp(`^${c.name}$`) }).first()).toBeVisible();
    }
  });

  for (const c of CITIES) {
    test(`city page /service-areas/${c.slug} responds`, async ({ page }) => {
      const res = await page.goto(`/service-areas/${c.slug}`);
      expect(res?.ok()).toBeTruthy();
      await expect(page.getByRole("heading", { level: 1 })).toContainText(c.displayName);
    });
  }

  const otherCorePaths = ["/gallery", "/reviews", "/about", "/faq", "/contact", "/quote", "/privacy", "/terms"];
  for (const p of otherCorePaths) {
    test(`core route ${p} responds`, async ({ page }) => {
      const res = await page.goto(p);
      expect(res?.ok()).toBeTruthy();
    });
  }

  test("sitemap.xml and robots.txt respond", async ({ request }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBeTruthy();
    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBeTruthy();
  });
});

test.describe("quote form", () => {
  test("happy path posts and shows success state", async ({ page }) => {
    await page.goto("/quote");
    await page.getByLabel(/full name/i).fill("Test User");
    await page.getByLabel(/^phone/i).fill("9165550000");
    await page.getByLabel(/^email/i).fill("test@example.com");
    await page.getByLabel(/service address/i).fill("123 Main St");
    await page.getByLabel(/^city/i).selectOption({ index: 1 }); // first non-disabled
    await page.getByRole("button", { name: /send my quote request/i }).click();
    await expect(page.getByText(/quote request received/i)).toBeVisible({ timeout: 10_000 });
  });

  test("validation surfaces inline errors", async ({ page }) => {
    await page.goto("/quote");
    await page.getByRole("button", { name: /send my quote request/i }).click();
    await expect(page.getByText(/please fix the highlighted fields/i)).toBeVisible();
  });
});

test.describe("mobile sticky CTA", () => {
  test("is visible on mobile", async ({ page }) => {
    await page.goto("/");
    const region = page.getByRole("region", { name: /quick contact/i });
    await expect(region).toBeVisible();
  });
});
