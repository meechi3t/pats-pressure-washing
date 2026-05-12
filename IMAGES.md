# Images guide

This is the canonical list of image slots used by the site. Replace the SVG placeholders in `/public/images/` with real photos before launch.

## File naming convention

Use lowercase, hyphen-separated, descriptive names. Example: `before-house-1.jpg`. Web-bound photography should be exported as **WebP** primarily, with a JPG fallback for older clients. The site uses `next/image`, which will re-encode and serve AVIF/WebP automatically.

## Required images

### Hero

| File | Slot | Recommended dimensions | Subject |
| --- | --- | --- | --- |
| `/public/images/hero/hero-powerwash.jpg` | Homepage hero (current default in `components/Hero.tsx`) | **1920×1080** (16:9) | Themed stock photo (Unsplash) of a high-pressure spray on pavement. Acts as a "feels real" placeholder for preview builds. Swap for an on-brand crew photo at launch. |
| `/public/images/placeholders/hero.svg` | Legacy SVG placeholder. Still shipped as a fallback in case the JPG is removed. | **1920×1080** (16:9) | A clean before/after split, or a crew member soft-washing a clearly residential stucco facade. Avoid stock photos. |
| `/public/images/placeholders/hero-city.svg` | City landing pages (still SVG placeholder until you supply real neighborhood shots) | **1920×1080** | A real Sacramento or Bay Area street/neighborhood shot. Generic local context. |

#### Current hero image — license + replacement plan

- **Source:** Unsplash photo `N8JTVOmHU7A` by [The Graphic Space](https://unsplash.com/@thegraphicspace).
- **Direct URL:** `https://images.unsplash.com/photo-1718152470408-cfeebeb6b9fc` (downloaded locally to `/public/images/hero/hero-powerwash.jpg`).
- **License:** [Unsplash License](https://unsplash.com/license) — free for commercial and non-commercial use, no attribution required. Do not resell unmodified or compile into a competing service.
- **Local processing:** cropped to 1920×1080, JPEG quality 70, all EXIF/ICC metadata stripped with `exiftool -all=`.
- **At launch, replace with:** a real Pat's-branded crew photo (same dimensions and crop). When that lands, delete `hero-powerwash.jpg`, update `components/Hero.tsx`'s `imageSrc` default, and update this table.

### Open Graph (social preview)

| File | Dimensions | Notes |
| --- | --- | --- |
| `/public/images/og/og-default.svg` | **1200×630** | Branded composite — logo + 2-line tagline. Single image used for all page OG defaults; individual pages can override via metadata. |

### Before/After gallery (6 placeholder pairs)

All 800×600 (4:3) minimum. Pair filenames must match between before/after.

| Subject | Before file | After file |
| --- | --- | --- |
| Stucco home exterior wash | `before-house-1.svg` | `after-house-1.svg` |
| Two-car driveway concrete | `before-driveway-1.svg` | `after-driveway-1.svg` |
| Asphalt shingle roof soft wash | `before-roof-1.svg` | `after-roof-1.svg` |
| Redwood deck restoration | `before-deck-1.svg` | `after-deck-1.svg` |
| Commercial storefront sidewalk | `before-storefront-1.svg` | `after-storefront-1.svg` |
| Gutter clear and downspout flush | `before-gutter-1.svg` | `after-gutter-1.svg` |

To add more pairs, append entries in `lib/gallery.ts` and drop matching files into `/public/images/placeholders/`.

### Service detail (optional v2)

We currently surface services through icon-only cards. If you want service photography on each service page, drop one image per service into `/public/images/services/`:

- `residential.jpg`, `commercial.jpg`, `house-washing.jpg`, `driveway-concrete.jpg`, `roof-cleaning.jpg`, `gutter-cleaning.jpg`, `patio-deck-fence.jpg`, `window-cleaning.jpg`, `solar-panel-cleaning.jpg`, `graffiti-removal.jpg`, `trash-bin-cleaning.jpg`

Then add an `<Image>` to the corresponding `app/services/[slug]/page.tsx` template (we left the slot open).

## Photo direction (briefing your photographer)

- Real homes and businesses in Sacramento or Bay Area neighborhoods. No stock.
- Bright midday or golden-hour light. Avoid heavy shadow.
- Before/after pairs from the same camera position, same focal length, same time of day.
- Crew members in branded shirts whenever possible.
- Get release forms for any visible house numbers, license plates, or people.

## Performance

- Export at the dimensions above. Don't ship 4000×3000 originals — `next/image` will downsize but it's wasteful at build time.
- Keep file sizes under ~200KB per image. Use [Squoosh](https://squoosh.app/) or your photo editor's WebP exporter.
- Don't add real photos as SVG. SVGs are reserved for the placeholder system and icons.

## Replacing placeholders

1. Drop the new image into `/public/images/placeholders/` using the same filename **but with `.jpg` or `.webp`** instead of `.svg`.
2. Update the references in `lib/gallery.ts` from `.svg` to the new extension.
3. Same for `components/Hero.tsx` and `components/CityHero.tsx` (`imageSrc` default) and `lib/schema.ts` (`image` URL).
4. Once **all** SVG placeholders are gone, flip `dangerouslyAllowSVG: false` in `next.config.mjs` (currently `true` to allow the dev-time placeholders).
