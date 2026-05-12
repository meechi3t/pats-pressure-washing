/**
 * Service catalog. Drives the services index, individual service pages,
 * the quote-form multi-select, and internal linking.
 *
 * To add a new service:
 *   1. Append an entry below.
 *   2. Add a route file at app/services/<slug>/page.tsx (or copy the template).
 *   3. Add a representative image to /public/images/services/<slug>.jpg and update IMAGES.md.
 */

export type Service = {
  slug: string;
  name: string;
  shortName: string; // for nav and chips
  tagline: string;
  description: string;
  bullets: string[];
  surfaces: string[];
  iconKey: IconKey;
  faq: { q: string; a: string }[];
};

export type IconKey =
  | "house"
  | "building"
  | "soft-spray"
  | "concrete"
  | "roof"
  | "gutter"
  | "deck"
  | "window"
  | "solar"
  | "graffiti"
  | "bin"
  | "shield";

export const SERVICES: Service[] = [
  {
    slug: "residential",
    name: "Residential Pressure Washing",
    shortName: "Residential",
    tagline: "Restore your home's curb appeal without the weekend project.",
    description:
      "Full-property exterior cleaning for single-family homes, townhomes, and HOA properties across Sacramento and the Bay Area. We tailor pressure and detergent to each surface so siding, paint, and landscaping all stay safe.",
    bullets: [
      "Soft-wash siding, stucco, brick, and trim",
      "Driveways, walkways, and patios",
      "Fences, decks, and outdoor furniture",
      "Pre-listing curb appeal packages for realtors",
    ],
    surfaces: ["Siding", "Stucco", "Brick", "Wood", "Concrete"],
    iconKey: "house",
    faq: [
      {
        q: "Do I need to be home during the service?",
        a: "No. As long as we can access water and the areas to be cleaned, you don't need to be home. We'll text before we arrive and send photos when we finish.",
      },
      {
        q: "Will pressure washing damage my paint or stucco?",
        a: "Not when it's done right. Painted siding and stucco get soft-washed at low pressure with a biodegradable detergent — the cleaning is chemical, not mechanical.",
      },
      {
        q: "How often should I have my house washed?",
        a: "Most homes benefit from a yearly wash. North-facing walls and shaded areas with mildew may need every six months.",
      },
    ],
  },
  {
    slug: "commercial",
    name: "Commercial Pressure Washing",
    shortName: "Commercial",
    tagline: "Storefronts, properties, and facilities that look open and inviting.",
    description:
      "Recurring exterior cleaning programs for retail centers, restaurants, office parks, multi-family buildings, and HOAs. We work after hours, document with before/after photos, and bill on terms.",
    bullets: [
      "Sidewalks, dumpster pads, and drive-through lanes",
      "Storefronts and awnings",
      "Parking lots and parking garages",
      "Recurring quarterly or monthly programs",
    ],
    surfaces: ["Concrete", "EIFS", "Brick", "Metal", "Glass"],
    iconKey: "building",
    faq: [
      {
        q: "Can you work after hours?",
        a: "Yes. We routinely schedule cleanings overnight or on weekends so storefronts and offices stay open during business hours.",
      },
      {
        q: "Do you provide a Certificate of Insurance?",
        a: "Yes. We carry general liability and workers' comp, and we can email a COI to your property manager before service.",
      },
      {
        q: "Can you handle multi-property accounts?",
        a: "We do. Recurring multi-site programs are a core part of our work — one contact, one invoice, consistent results across every location.",
      },
    ],
  },
  {
    slug: "house-washing",
    name: "House Washing / Soft Washing",
    shortName: "House Washing",
    tagline: "Low-pressure, high-results cleaning for delicate exterior surfaces.",
    description:
      "Soft washing combines low-pressure water with biodegradable detergents to remove mildew, algae, dirt, and oxidation from siding, stucco, and painted surfaces — without damaging finishes or landscaping.",
    bullets: [
      "Vinyl, fiber cement, and engineered wood siding",
      "Stucco and EIFS",
      "Painted trim, soffits, and fascia",
      "Brick and natural stone facades",
    ],
    surfaces: ["Vinyl Siding", "Stucco", "Painted Trim", "Brick"],
    iconKey: "soft-spray",
    faq: [
      {
        q: "What's the difference between pressure washing and soft washing?",
        a: "Pressure washing uses high water pressure to lift dirt. Soft washing uses low pressure plus a cleaning solution to break down mildew and algae chemically. Soft washing is safer for siding, stucco, and painted surfaces.",
      },
      {
        q: "Is the detergent safe for plants and pets?",
        a: "Yes. We use biodegradable solutions, pre-rinse landscaping before applying, and rinse thoroughly afterward.",
      },
      {
        q: "How long does a house wash take?",
        a: "A typical single-story home takes 1–2 hours; a two-story home 2–4 hours depending on size and access.",
      },
    ],
  },
  {
    slug: "driveway-concrete",
    name: "Driveway & Concrete Cleaning",
    shortName: "Driveway & Concrete",
    tagline: "Surface cleaner technology that removes years of oil, rust, and dirt.",
    description:
      "We use commercial surface cleaners that produce an even, streak-free finish on driveways, walkways, patios, and pool decks. Oil, tire marks, rust, and ground-in grime come up — all without etching.",
    bullets: [
      "Driveways and aprons",
      "Walkways and entry steps",
      "Pool decks and patios",
      "Oil stain and rust treatment",
    ],
    surfaces: ["Concrete", "Pavers", "Brick", "Flagstone"],
    iconKey: "concrete",
    faq: [
      {
        q: "Can you remove oil stains?",
        a: "In most cases, yes. Fresh stains come out easily; older deep-set stains may need a degreaser treatment and a second pass.",
      },
      {
        q: "Will the cleaning damage my concrete?",
        a: "No. Our surface cleaners distribute pressure evenly so there's no etching or streaking — the result is a uniform restored finish.",
      },
      {
        q: "Do you seal driveways after cleaning?",
        a: "Sealing is available as an add-on. We typically recommend waiting 24–48 hours after cleaning for the concrete to dry before sealing.",
      },
    ],
  },
  {
    slug: "roof-cleaning",
    name: "Roof Cleaning",
    shortName: "Roof Cleaning",
    tagline: "Soft-wash roof cleaning that lifts black streaks without damaging shingles.",
    description:
      "Black streaks and dark patches on your roof are gloeocapsa magma algae. We apply a soft-wash solution that kills the algae at the root and leaves your roof clean — no high pressure that voids manufacturer warranties.",
    bullets: [
      "Asphalt shingle roofs",
      "Tile and concrete tile roofs",
      "Metal roofs",
      "Moss treatment on shaded north-facing slopes",
    ],
    surfaces: ["Asphalt Shingle", "Concrete Tile", "Clay Tile", "Metal"],
    iconKey: "roof",
    faq: [
      {
        q: "Is roof cleaning safe for my shingles?",
        a: "Yes — when it's soft-washed. Pressure washing a roof voids most manufacturer warranties; our soft-wash method is what ARMA (the asphalt roofing trade group) recommends.",
      },
      {
        q: "How long does the result last?",
        a: "Most roofs stay clean for 2–5 years depending on tree cover and sun exposure.",
      },
      {
        q: "Will the runoff hurt my plants?",
        a: "We pre-wet and post-rinse landscaping. Properly diluted, the solution dissipates harmlessly.",
      },
    ],
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortName: "Gutter Cleaning",
    tagline: "Clear gutters, clean downspouts, and a free flow test before we leave.",
    description:
      "Clogged gutters are the leading cause of preventable water damage. We clear debris by hand, flush every downspout, and check for leaks. Exterior gutter face cleaning is included.",
    bullets: [
      "Full gutter and downspout clear-out",
      "Downspout flow test on every run",
      "Exterior gutter face brightening (optional)",
      "Leak and sag inspection report",
    ],
    surfaces: ["Aluminum Gutters", "Copper Gutters", "Downspouts"],
    iconKey: "gutter",
    faq: [
      {
        q: "How often should gutters be cleaned?",
        a: "Twice a year for most homes — once in late spring after pollen and once in late fall after leaf drop. Homes under heavy tree cover may need quarterly service.",
      },
      {
        q: "Do you fix sagging or leaking gutters?",
        a: "We can re-seal joints and re-hang minor sags. Major repairs we'll document with photos and refer to a trusted gutter contractor.",
      },
      {
        q: "Will you bag the debris?",
        a: "Yes — we bag and remove all debris, or we can leave it for your green waste bin if you prefer.",
      },
    ],
  },
  {
    slug: "patio-deck-fence",
    name: "Patio, Deck & Fence Cleaning",
    shortName: "Patio & Deck",
    tagline: "Wood-safe cleaning that brings outdoor living spaces back to life.",
    description:
      "We use the right pressure and technique for every material — redwood, cedar, composite, pavers, flagstone, and brick. The result is a restored surface ready to be enjoyed or stained.",
    bullets: [
      "Wood decks (redwood, cedar, pressure-treated)",
      "Composite decking (Trex, TimberTech)",
      "Wood and vinyl fencing",
      "Paver, flagstone, and brick patios",
    ],
    surfaces: ["Wood", "Composite", "Pavers", "Flagstone"],
    iconKey: "deck",
    faq: [
      {
        q: "Will pressure washing damage my wood deck?",
        a: "Not if it's done right. We use a fan tip at moderate pressure and follow the grain — never gouging the wood.",
      },
      {
        q: "Can you stain after cleaning?",
        a: "We don't stain ourselves, but a clean dry surface is exactly what your staining contractor needs. We can recommend trusted local pros.",
      },
      {
        q: "How long until I can use my deck after cleaning?",
        a: "Same day for most decks — the surface is usually dry within a few hours.",
      },
    ],
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    shortName: "Window Cleaning",
    tagline: "Streak-free interior and exterior window cleaning, tracks included.",
    description:
      "We hand-clean interior and exterior glass, wipe sills and frames, and clear tracks. For tall residential and commercial buildings we use water-fed pole systems with purified water.",
    bullets: [
      "Interior and exterior glass",
      "Frames, sills, and tracks",
      "Screen cleaning",
      "Hard water spot treatment",
    ],
    surfaces: ["Glass", "Aluminum Frames", "Wood Frames", "Skylights"],
    iconKey: "window",
    faq: [
      {
        q: "Do you clean screens too?",
        a: "Yes. Screen cleaning is included. Heavily soiled screens may need to be removed for a deeper clean — we'll let you know.",
      },
      {
        q: "Can you reach second-story windows?",
        a: "Yes. We use ladders, water-fed poles, or lifts as the job requires.",
      },
      {
        q: "Do you offer recurring window cleaning?",
        a: "We do. Most clients book quarterly or semi-annually.",
      },
    ],
  },
  {
    slug: "solar-panel-cleaning",
    name: "Solar Panel Cleaning",
    shortName: "Solar Panels",
    tagline: "Restore lost output with manufacturer-approved soft cleaning.",
    description:
      "Dust, pollen, and bird droppings reduce solar output by 5–25%. We use deionized water and soft brushes — never abrasive pads or high pressure — to restore output without voiding panel warranties.",
    bullets: [
      "Residential rooftop arrays",
      "Ground-mount and carport systems",
      "Bird-dropping and lichen removal",
      "Yearly maintenance plans",
    ],
    surfaces: ["Tempered Glass", "Anti-Reflective Coating"],
    iconKey: "solar",
    faq: [
      {
        q: "How often should solar panels be cleaned?",
        a: "Once a year for most installations; twice a year for systems near trees, agricultural areas, or under heavy bird traffic.",
      },
      {
        q: "Will cleaning void my panel warranty?",
        a: "Not with our method. We use deionized water and soft brushes, which is what every major panel manufacturer recommends.",
      },
      {
        q: "Can dirty panels really reduce output that much?",
        a: "Yes. Independent studies have shown 5–25% output loss from soiling, especially in dry inland areas like Sacramento.",
      },
    ],
  },
  {
    slug: "graffiti-removal",
    name: "Graffiti Removal",
    shortName: "Graffiti Removal",
    tagline: "Fast graffiti removal — usually within 24 hours of your call.",
    description:
      "Graffiti is removed faster when it's removed first. We use solvent-based and pressure-based techniques matched to your surface, and we document the work with before/after photos for insurance or city compliance.",
    bullets: [
      "Brick, concrete, stucco, and metal",
      "Painted surfaces (color-match touch-up referrals)",
      "Glass and storefronts",
      "Same-week response across our service area",
    ],
    surfaces: ["Brick", "Concrete", "Stucco", "Metal", "Glass"],
    iconKey: "graffiti",
    faq: [
      {
        q: "How fast can you respond?",
        a: "We aim for next-business-day response on graffiti calls. Same-day is often possible — call us to confirm.",
      },
      {
        q: "Will the surface look the same after removal?",
        a: "On most porous surfaces we can fully remove it. On painted surfaces a ghost may remain — we'll document and recommend a paint touch-up if needed.",
      },
      {
        q: "Can you bill insurance or my property management company?",
        a: "Yes. We send detailed invoices with photos to property managers, HOAs, and insurance carriers.",
      },
    ],
  },
  {
    slug: "trash-bin-cleaning",
    name: "Trash Bin Cleaning",
    shortName: "Trash Bins",
    tagline: "Sanitized, deodorized residential and commercial bins.",
    description:
      "Hot-water pressure cleaning and food-safe deodorizer for residential and commercial waste bins. Recurring service available so your bins stay sanitary year-round.",
    bullets: [
      "Residential 32 / 64 / 96 gal carts",
      "Commercial 2 / 4 / 6 yard dumpsters",
      "Recurring monthly or quarterly plans",
      "Food-safe deodorizing finish",
    ],
    surfaces: ["HDPE Bins", "Metal Dumpsters"],
    iconKey: "bin",
    faq: [
      {
        q: "Where do you wash the bins?",
        a: "Curbside at your property — we contain runoff so there's no mess and nothing enters the storm drain.",
      },
      {
        q: "Do you offer recurring service?",
        a: "Yes. Most residential customers go monthly or quarterly. Commercial customers pick a frequency that matches their waste cycle.",
      },
      {
        q: "Is the deodorizer safe?",
        a: "Yes. We use food-safe, biodegradable products.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
