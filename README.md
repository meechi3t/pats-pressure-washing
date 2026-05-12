# [BUSINESS NAME] — Marketing Site

A premium, mobile-first, SEO-heavy lead-generation site for a pressure washing company serving **Sacramento, CA** and the **San Francisco Bay Area**.

Built with **Next.js 14 App Router**, **TypeScript (strict)**, **Tailwind CSS**.

---

## Quick start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve production build
npm run typecheck # tsc --noEmit
npm run lint      # eslint
npm run test      # vitest (unit)
npm run test:e2e  # playwright (run `npm run build && npm run start` first)
```

Node 20+ recommended.

### Heads-up: apostrophe in project path

There is an open Next.js bug (confirmed in Next 14.2.x and 15.0.3) where `next build` fails to compile metadata routes (`sitemap.ts`, `robots.ts`, `icon.svg`, `apple-icon.svg`) when the **absolute project path contains an apostrophe** (e.g. `Pat's Pressure Washing`).

Two ways to handle it:

1. **Rename the project directory** to remove the apostrophe (e.g. `Pats Pressure Washing`). This is the cleanest fix and is recommended before deployment.
2. **Use the bundled workaround**: `npm run build:safepath`. This script mirrors the project to `$TMPDIR/pats-pressure-washing-build`, builds there, and copies `.next` back. It's a hack — use it only locally while the directory still has an apostrophe.

`npm run dev` is unaffected (only metadata-route static output trips the bug).

---

## What's in the box

- **22 core pages**: Home, Services (overview + 11 service detail pages), Gallery, Reviews, About, Service Areas (hub + 17 city pages), FAQ, Contact, Quote, Privacy, Terms.
- **17 city landing pages** (7 Sacramento region + 10 Bay Area) — each with unique intro, "why locals choose us", testimonials, FAQs.
- **Quote form** (demo mode) — client-side Zod validation and honeypot, but no server submit. Submissions display an `aria-live` notice that points visitors at the published phone/email.
- **JSON-LD schema** (`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`) on every relevant page.
- **Sticky mobile bottom bar** with Call + Quote buttons.
- **A11y**: skip link, semantic landmarks, focus rings, alt text, ≥44px tap targets.
- **Sitemap + robots.txt** generated at build time.
- **Test suite**: Vitest (unit) + Playwright (e2e smoke).

---

## File tour

```
app/                       # App Router pages
  service-areas/[city]/    # Dynamic city pages driven by lib/cities.ts
  services/[slug]/         # Dynamic service pages driven by lib/services.ts
components/                # Reusable UI components
lib/
  brand.ts                 # *** EDIT BUSINESS INFO HERE ***
  cities.ts                # All 17 city pages' content
  services.ts              # All 11 service pages' content
  testimonials.ts          # Placeholder reviews — replace before launch
  faqs.ts                  # Site-wide FAQ entries
  gallery.ts               # Gallery item refs (point at /public/images/)
  schema.ts                # JSON-LD helpers
  quote-schema.ts          # Zod schema used by the (demo) quote form
  cx.ts                    # className helper
public/images/             # Placeholder SVGs — see IMAGES.md to replace
tests/                     # Vitest unit + Playwright e2e
.github/workflows/pages.yml # GitHub Pages deploy workflow
IMAGES.md                  # Image replacement guide
```

---

## How to update business info (one file)

Edit **`lib/brand.ts`**. Update:

- `businessName`
- `phone.display` and `phone.tel`
- `email`
- `address`, `geo`
- `hours`
- `social` URLs
- `siteUrl` (or set `NEXT_PUBLIC_SITE_URL` in `.env.local`)

Every page reads from this file. `tel:` and `mailto:` link targets are derived automatically.

---

## How to replace images

Read **`IMAGES.md`** for the canonical list. Drop replacements into `/public/images/` and update the references where noted. Once all SVG placeholders are gone, flip `dangerouslyAllowSVG: false` in `next.config.mjs`.

---

## How to add a new city page

1. Open **`lib/cities.ts`** and append a new entry with the same shape as the existing entries (slug, name, intro, whyLocals, testimonialQuoteIds, faqs, neighborhoods).
2. (Optional) Add 1-2 city-specific testimonials in `lib/testimonials.ts` and reference their IDs from the new city's `testimonialQuoteIds`.
3. Rebuild — the route, the sitemap, and the city's place in the service-areas hub all pick it up automatically.

---

## Quote form — demo mode

This branch is configured as a **static mockup** for GitHub Pages, so the quote form does not POST anywhere. On submit it:

1. Runs the same Zod validation the production schema uses (`lib/quote-schema.ts`).
2. Shows an `aria-live` confirmation that explains the page is a demo and points the visitor at the business's published phone and email (sourced from `lib/brand.ts`).

If you fork this for a real deployment, see the git history before commit `Convert site to static export for GitHub Pages mockup` for the server-side route handler, rate limiter, and validation pipeline.

---

## Deployment — GitHub Pages

This repo deploys to GitHub Pages via `.github/workflows/pages.yml`:

1. Push to `main`. The workflow runs `npm ci && npm run build`, which produces `out/` via Next.js static export.
2. `actions/upload-pages-artifact` packages `out/` and `actions/deploy-pages` publishes it.
3. The site is available at **https://meechi3t.github.io/pats-pressure-washing/**.

`next.config.mjs` sets `output: 'export'`, `basePath: '/pats-pressure-washing'`, and `assetPrefix: '/pats-pressure-washing/'` so asset URLs resolve correctly under the repo subpath.

**One-time setup:** in repo Settings → Pages, confirm the source is set to "GitHub Actions". The first workflow run usually configures this automatically via `actions/configure-pages` with `enablement: true`, but verify if the first deploy 404s.

---

## Design system

- **Palette**: deep blue primary (`brand.*`) + fresh green accent (`accent.*`) + ink grayscale (`ink.*`). The green is intentional — it signals "clean + eco-friendly" and differentiates from the more common orange in this category. Adjust tokens in `tailwind.config.ts` rather than hardcoding hex.
- **Typography**: Inter (`--font-sans`) + Manrope (`--font-display`) loaded via `next/font`.
- **Rounded**: `rounded-2xl` (1rem) is the default card radius.
- **Shadows**: `shadow-soft` and `shadow-lift` (custom tokens).
- **Dark mode**: not built in v1; tokens are arranged so a future flip is straightforward.

---

## Pre-launch checklist

- [ ] Replace **every** `[BUSINESS NAME]`, `[PHONE NUMBER]`, `[EMAIL ADDRESS]`, `[STREET ADDRESS]`, `[POSTAL CODE]` placeholder via `lib/brand.ts`.
- [ ] Replace placeholder testimonials in `lib/testimonials.ts` with real reviews.
- [ ] Replace placeholder SVGs with real photos per `IMAGES.md`. Flip `dangerouslyAllowSVG: false`.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production domain.
- [ ] Replace the demo-mode quote form with a real submission path (Formspree / Netlify Forms / API on another host). The form currently shows an aria-live notice and does not send anything.
- [ ] Validate JSON-LD with [Google's Rich Results Test](https://search.google.com/test/rich-results).
- [ ] Run Lighthouse locally (`npm run lhci`) and verify thresholds for home + at least one city page.
- [ ] Accessibility pass — keyboard nav, focus order, color contrast, screen-reader spot-check.
- [ ] Add real OG image at `/public/images/og/og-default.jpg` (1200×630).
- [ ] Add real favicon — `app/icon.svg` and `app/apple-icon.svg` are placeholders.
- [ ] Reintroduce response security headers (CSP, HSTS, frame-deny, etc.) on whichever host you move to — GitHub Pages cannot serve them.
- [ ] Remove the `// PLACEHOLDER` markers from `lib/testimonials.ts` and `lib/gallery.ts` once real content lands.
- [ ] Verify `/privacy` and `/terms` are reviewed by counsel for your jurisdiction.
- [ ] Hook up a real analytics SDK if desired (env var hook in `.env.example`).

---

## Future enhancement scaffolds

These are stubbed for later, not built in v1:

- **Online booking** — could land at `app/book/`. See competitor analysis for typical flows.
- **SMS notifications** — would be a server-side webhook hookup in the quote route.
- **CRM integration** — would belong on whatever backend handles the real form submission.
- **Review request automation** — would belong in a future scheduled function.
- **Blog** — `app/blog/` directory placeholder.
- **Promotional landers** — `app/p/[slug]/` directory placeholder.

---

## License & ownership

This codebase is private. Replace this section with your license of choice.
