/**
 * Gallery items. Replace placeholders with real photos before launch.
 * Image paths point to /public/images/placeholders/* — see IMAGES.md.
 */
// PLACEHOLDER — replace with real before/after photos before launch.

import type { GalleryItem } from "@/components/GalleryGrid";

export const GALLERY: GalleryItem[] = [
  { beforeSrc: "/images/placeholders/before-house-1.svg", afterSrc: "/images/placeholders/after-house-1.svg", alt: "Stucco home exterior wash", service: "House Washing", city: "Sacramento, CA" },
  { beforeSrc: "/images/placeholders/before-driveway-1.svg", afterSrc: "/images/placeholders/after-driveway-1.svg", alt: "Two-car driveway concrete cleaning", service: "Driveway & Concrete", city: "Elk Grove, CA" },
  { beforeSrc: "/images/placeholders/before-roof-1.svg", afterSrc: "/images/placeholders/after-roof-1.svg", alt: "Asphalt shingle roof soft wash", service: "Roof Cleaning", city: "Roseville, CA" },
  { beforeSrc: "/images/placeholders/before-deck-1.svg", afterSrc: "/images/placeholders/after-deck-1.svg", alt: "Redwood deck restoration", service: "Patio & Deck", city: "Walnut Creek, CA" },
  { beforeSrc: "/images/placeholders/before-storefront-1.svg", afterSrc: "/images/placeholders/after-storefront-1.svg", alt: "Commercial storefront sidewalk clean", service: "Commercial", city: "Oakland, CA" },
  { beforeSrc: "/images/placeholders/before-gutter-1.svg", afterSrc: "/images/placeholders/after-gutter-1.svg", alt: "Gutter clear and downspout flush", service: "Gutter Cleaning", city: "Citrus Heights, CA" },
];
