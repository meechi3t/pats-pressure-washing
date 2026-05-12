/**
 * City content. One entry = one city landing page.
 * Each city has UNIQUE intro copy, local hooks, why-locals reasons, and FAQs.
 *
 * To add a new city:
 *   1. Append an entry below.
 *   2. (No new file needed — the [city] route renders from this data.)
 *   3. Update the sitemap will pick it up automatically.
 */

export type City = {
  slug: string;
  name: string; // "Sacramento"
  displayName: string; // "Sacramento, CA"
  region: "Sacramento" | "Bay Area";
  zips?: string[];
  intro: string; // SEO unique intro paragraph
  localHooks: string[]; // climate / property type / common pain points
  whyLocals: { title: string; body: string }[];
  testimonialQuoteIds: string[]; // references into TESTIMONIALS
  faqs: { q: string; a: string }[];
  neighborhoods?: string[];
};

export const CITIES: City[] = [
  // Sacramento region
  {
    slug: "sacramento",
    name: "Sacramento",
    displayName: "Sacramento, CA",
    region: "Sacramento",
    intro:
      "Sacramento sits at the confluence of two rivers, and our homes show it — Delta dust settles on every west-facing wall, summer pollen coats decks and patios, and the dry inland sun bakes mildew streaks onto north-facing siding. We're built for it. From Land Park bungalows to East Sac craftsmen and the new builds out in Natomas, our soft-wash and surface-cleaner techniques restore curb appeal without damaging paint, stucco, or landscaping.",
    localHooks: [
      "Delta dust and Central Valley pollen film",
      "Hot dry summers that bake on mineral deposits",
      "Older brick and stucco in Land Park, East Sac, and Curtis Park",
      "Tree-heavy lots in Arden, Carmichael, and the Pocket",
    ],
    whyLocals: [
      {
        title: "We know Sacramento siding",
        body: "Stucco, painted wood, brick, and Hardie are all common in this market — and each gets its own technique. We've worked across every Sacramento neighborhood and know what's behind the paint.",
      },
      {
        title: "Booked around your schedule",
        body: "Free quote in under 24 hours, scheduling that respects your week, and a text when we're on the way.",
      },
      {
        title: "Eco-conscious for our rivers",
        body: "We work in a watershed. Biodegradable detergents, controlled rinse, and runoff awareness are non-negotiable for us.",
      },
    ],
    testimonialQuoteIds: ["t-sac-1", "t-sac-2", "t-sac-3"],
    faqs: [
      {
        q: "Do you serve all of Sacramento?",
        a: "Yes. From Natomas and North Sac down to South Land Park and East Sac, plus the Pocket, Curtis Park, Tahoe Park, and Arden-Arcade. If you're inside the I-5 / Hwy 99 / Hwy 50 / Business 80 loop, we're there often.",
      },
      {
        q: "Is hot Sacramento weather a problem for pressure washing?",
        a: "It's actually our easiest weather. We hydrate the surface, work in shade where possible, and our detergents perform well in the dry inland climate.",
      },
      {
        q: "How quickly can I get a quote?",
        a: "Same day in most cases. Send a few photos through our quote form and we'll respond within hours.",
      },
      {
        q: "Do you do HOA properties in Sacramento?",
        a: "Yes — we work with HOAs in Natomas, North Natomas, the Pocket, and Anatolia. Recurring multi-unit programs and one-time facade cleanings are both routine.",
      },
    ],
    neighborhoods: ["Land Park", "East Sacramento", "Curtis Park", "Natomas", "The Pocket", "Tahoe Park", "Arden-Arcade", "Pocket-Greenhaven"],
  },
  {
    slug: "elk-grove",
    name: "Elk Grove",
    displayName: "Elk Grove, CA",
    region: "Sacramento",
    intro:
      "Elk Grove is one of Sacramento County's fastest-growing communities, with new stucco builds in Laguna, Sheldon, and East Franklin sitting next to established neighborhoods in Old Elk Grove. The combination of hot summers, agricultural pollen drift, and HOA expectations means most homes here get noticeably dingy a year after closing. Soft-washing the stucco and rinsing the driveways twice a year is what keeps them looking new.",
    localHooks: [
      "Stucco and Hardie siding common on new builds",
      "Agricultural pollen and dust from surrounding farms",
      "HOA aesthetic standards in Laguna and Anatolia",
      "Wide driveways and aprons that show oil and tire marks",
    ],
    whyLocals: [
      {
        title: "HOA-friendly scheduling",
        body: "We know the HOA expectations in Laguna Ridge, Anatolia, and the Lakeside neighborhoods, and we can coordinate building-wide service.",
      },
      {
        title: "Stucco specialists",
        body: "Soft-wash chemistry on stucco beats high pressure every time — no etching, no streaks, no chipped paint.",
      },
      {
        title: "Wide driveways done fast",
        body: "Surface-cleaner technology means a three-car driveway comes out evenly cleaned in a fraction of the time of a wand.",
      },
    ],
    testimonialQuoteIds: ["t-eg-1", "t-eg-2"],
    faqs: [
      {
        q: "Do you work with Elk Grove HOAs?",
        a: "Yes. We coordinate with HOAs throughout Elk Grove for both common-area cleanings and homeowner notifications.",
      },
      {
        q: "How long does a typical Elk Grove driveway take?",
        a: "A standard two-car driveway is about 45 minutes; a three-car or extended apron runs about 60–75 minutes.",
      },
      {
        q: "Do you clean solar panels in Elk Grove?",
        a: "Yes. Elk Grove gets significant dust drift from surrounding ag land, and yearly panel cleaning typically pays for itself in restored output.",
      },
    ],
    neighborhoods: ["Laguna", "Sheldon", "East Franklin", "Old Elk Grove", "Anatolia", "Laguna Ridge"],
  },
  {
    slug: "roseville",
    name: "Roseville",
    displayName: "Roseville, CA",
    region: "Sacramento",
    intro:
      "Roseville is Placer County's commercial hub and home to some of the region's most sought-after neighborhoods, from Diamond Oaks to the Westpark master-planned communities. New tile roofs collect algae on the north-facing slopes, stucco discolors under tree drip lines, and the heavy concrete hardscape that defines newer Roseville homes takes a beating from sun and tire traffic. We're set up for it.",
    localHooks: [
      "Concrete tile roofs prone to gloeocapsa algae",
      "Master-planned communities with strict HOA standards",
      "Heavy concrete hardscape and pool decks",
      "Mature oak and pine drip in older Diamond Oaks and Cherry Glen",
    ],
    whyLocals: [
      {
        title: "Tile-roof certified",
        body: "Concrete tile roofs need a soft-wash approach — pressure washing them voids most manufacturer warranties. Our method is what the manufacturers recommend.",
      },
      {
        title: "Westpark and Fiddyment HOA experience",
        body: "We work routinely in Westpark, Fiddyment Farm, and Sierra Vista — and we know the aesthetic standards each community holds.",
      },
      {
        title: "Pool deck specialists",
        body: "Newer Roseville homes have large pool decks and patios that need wood-safe and pet-safe cleaning. We handle both.",
      },
    ],
    testimonialQuoteIds: ["t-ros-1", "t-ros-2"],
    faqs: [
      {
        q: "Can you clean tile roofs without damaging them?",
        a: "Yes. We use a soft-wash method endorsed by tile-roof manufacturers — no high pressure, no broken tiles.",
      },
      {
        q: "Do you work in Westpark and Fiddyment Farm?",
        a: "Frequently. We've cleaned dozens of homes in both communities and know the HOA-compliant approach.",
      },
      {
        q: "How long until I can swim in my pool after deck cleaning?",
        a: "Right away — we rinse thoroughly and contain runoff. Our detergents are biodegradable.",
      },
    ],
    neighborhoods: ["Westpark", "Fiddyment Farm", "Diamond Oaks", "Cherry Glen", "Sierra Vista", "Stoneridge"],
  },
  {
    slug: "folsom",
    name: "Folsom",
    displayName: "Folsom, CA",
    region: "Sacramento",
    intro:
      "Folsom blends historic downtown with new master-planned communities on the south side of Highway 50. Homes here range from older brick along Sutter Street to modern stucco in Empire Ranch and Folsom Ranch. Foothill heat, lake-adjacent humidity, and proximity to open-space trails (and the dust that comes with them) all mean exterior surfaces show wear faster than they should.",
    localHooks: [
      "Foothill summer heat and open-space dust",
      "Lake-adjacent humidity on north-facing siding",
      "Brick and stone in historic downtown Folsom",
      "Modern stucco and Hardie in Empire Ranch and Folsom Ranch",
    ],
    whyLocals: [
      {
        title: "Foothill-experienced technicians",
        body: "We work above 500 feet often — and that means we know how foothill dust and open-space drift behave on every kind of siding.",
      },
      {
        title: "Folsom Ranch HOA-fluent",
        body: "The newer Folsom Ranch communities have aesthetic CC&Rs. We coordinate cleanly so you stay compliant without lifting a finger.",
      },
      {
        title: "Heritage-home careful",
        body: "Historic brick and stone in downtown Folsom needs a gentle hand. Our soft-wash technique is what 100-year-old masonry deserves.",
      },
    ],
    testimonialQuoteIds: ["t-fol-1", "t-fol-2"],
    faqs: [
      {
        q: "Do you clean older brick and stone in downtown Folsom?",
        a: "Yes. We use low-pressure soft-washing with a masonry-safe detergent — no abrasive scrubbing or high pressure that could damage mortar.",
      },
      {
        q: "Is dust from open-space trails a problem?",
        a: "It's the most common reason Folsom homes need yearly washes. Soft-washing lifts trail dust without damaging finishes.",
      },
      {
        q: "Do you serve Folsom Lake area homes?",
        a: "Yes — we work throughout Folsom including Empire Ranch, Folsom Ranch, the historic district, and the lake-adjacent neighborhoods.",
      },
    ],
    neighborhoods: ["Empire Ranch", "Folsom Ranch", "Historic Folsom", "Briggs Ranch", "Broadstone"],
  },
  {
    slug: "citrus-heights",
    name: "Citrus Heights",
    displayName: "Citrus Heights, CA",
    region: "Sacramento",
    intro:
      "Citrus Heights is one of Sacramento County's most established suburbs — a community of mature trees, established homes, and a mix of mid-century ranch and 1990s tract neighborhoods. Mature oak and elm canopies drop leaves and pollen, which means gutters fill fast and north-facing walls develop mildew earlier than you'd expect.",
    localHooks: [
      "Heavy tree canopy and seasonal leaf drop",
      "Mature 1970s–1990s tract homes with original siding",
      "Common mildew on shaded north walls",
      "Older asphalt-shingle roofs with algae streaks",
    ],
    whyLocals: [
      {
        title: "Gutter clearing twice a year",
        body: "Citrus Heights tree cover demands it. We clear, flush, and inspect — and most customers go on a semi-annual plan.",
      },
      {
        title: "Asphalt-shingle roof safe",
        body: "Soft-washing asphalt shingles is the only method ARMA (the roofing trade association) endorses. We don't pressure-wash roofs, ever.",
      },
      {
        title: "Mature-home careful",
        body: "Older siding and trim need a softer touch. Our pressure and chemistry adapt to what's actually there.",
      },
    ],
    testimonialQuoteIds: ["t-ch-1", "t-ch-2"],
    faqs: [
      {
        q: "How often should I clean my Citrus Heights gutters?",
        a: "Twice a year for most homes — once after spring pollen and once after fall leaf drop. Heavy oak coverage may need a third clearing.",
      },
      {
        q: "Are the black streaks on my roof permanent?",
        a: "No. They're algae, and a soft-wash treatment kills it at the root and lifts the streaks. Most roofs stay clean for 2–5 years after.",
      },
      {
        q: "Do you serve all of Citrus Heights?",
        a: "Yes — Sunrise Vista, Birdcage Heights, Tempo Park, and the older neighborhoods around Greenback Lane.",
      },
    ],
    neighborhoods: ["Sunrise Vista", "Birdcage Heights", "Tempo Park", "Sungarden", "Citrus Park"],
  },
  {
    slug: "rancho-cordova",
    name: "Rancho Cordova",
    displayName: "Rancho Cordova, CA",
    region: "Sacramento",
    intro:
      "Rancho Cordova spans everything from established mid-century homes in Cordova Meadows to the rapidly growing Anatolia and Sun Ridge communities at the city's eastern edge. The American River Parkway runs through the city's northern edge, which means dust and pollen, and the inland sun bakes mineral deposits into stucco facing the afternoon sun.",
    localHooks: [
      "American River Parkway dust and pollen",
      "Established Cordova Meadows mid-century homes",
      "New stucco builds in Anatolia and Sun Ridge",
      "Hot afternoon sun on south-and-west-facing walls",
    ],
    whyLocals: [
      {
        title: "Stucco-soft-wash experts",
        body: "Most of newer Rancho is stucco. High pressure ruins it; soft-washing restores it. We've cleaned thousands of stucco facades.",
      },
      {
        title: "American River-aware",
        body: "We're a watershed neighbor. Biodegradable detergents and controlled rinse are standard practice for every job we do.",
      },
      {
        title: "Anatolia HOA-fluent",
        body: "We know the standards in Anatolia and the surrounding master-planned communities and can coordinate building-wide service.",
      },
    ],
    testimonialQuoteIds: ["t-rc-1", "t-rc-2"],
    faqs: [
      {
        q: "Will you damage my stucco?",
        a: "No. We soft-wash all stucco at low pressure with a biodegradable detergent — the cleaning is chemical, not mechanical.",
      },
      {
        q: "Do you do recurring HOA work in Anatolia?",
        a: "Yes. We have recurring HOA programs across the Anatolia communities.",
      },
      {
        q: "How fast can you respond to a Rancho Cordova quote request?",
        a: "Same day in most cases. Send photos and we'll usually quote within 4 hours.",
      },
    ],
    neighborhoods: ["Anatolia", "Sun Ridge", "Cordova Meadows", "Mather", "Rio del Oro"],
  },
  {
    slug: "davis",
    name: "Davis",
    displayName: "Davis, CA",
    region: "Sacramento",
    intro:
      "Davis is a college town with a university-driven ethic of sustainability and a housing stock that ranges from 1960s tract homes near campus to newer master-planned communities like Mace Ranch and Wildhorse. Yolo County dust drifts in from surrounding ag land, and the heavy summer sun fades and oxidizes painted siding fast. Our eco-conscious approach is a fit for the Davis sensibility.",
    localHooks: [
      "Yolo County ag dust drift",
      "Paint fade and oxidation on south-facing siding",
      "Bike-path-adjacent homes with high foot traffic dust",
      "1960s–1970s tract homes near campus",
    ],
    whyLocals: [
      {
        title: "Biodegradable detergents",
        body: "Every detergent we use is biodegradable. That matters in Davis — and frankly it should matter everywhere.",
      },
      {
        title: "Bike-rack and patio cleaning",
        body: "Davis homes have bikes, racks, and patio living spaces that get use. We clean all of it without overspraying landscaping.",
      },
      {
        title: "UC Davis area familiarity",
        body: "We know which neighborhoods around campus need a gentler approach (older painted wood) and which can take a more aggressive clean (newer stucco).",
      },
    ],
    testimonialQuoteIds: ["t-dav-1", "t-dav-2"],
    faqs: [
      {
        q: "Are your detergents really biodegradable?",
        a: "Yes — every detergent we use breaks down into harmless compounds within days. We can share product spec sheets on request.",
      },
      {
        q: "Will the cleaning affect my bee garden?",
        a: "We pre-wet pollinator plants and post-rinse thoroughly. Our chemistry is plant-safe at our application dilutions.",
      },
      {
        q: "Do you work in Mace Ranch and Wildhorse?",
        a: "Yes — both neighborhoods are regular service areas for us.",
      },
    ],
    neighborhoods: ["Central Davis", "Mace Ranch", "Wildhorse", "North Davis", "South Davis", "El Macero"],
  },

  // Bay Area
  {
    slug: "san-francisco",
    name: "San Francisco",
    displayName: "San Francisco, CA",
    region: "Bay Area",
    intro:
      "San Francisco's housing stock is unlike any other in California — Victorians, Edwardians, Sunset stucco rows, Mission flats, and modern Hayes Valley infill all share a city with marine fog, salt air, and constant moisture. Mildew on north-facing walls and algae on shaded stucco are nearly universal. Soft-washing is the only safe answer for facades this delicate.",
    localHooks: [
      "Marine fog, salt air, persistent moisture",
      "Painted wood Victorians and Edwardians",
      "Sunset and Richmond stucco row houses",
      "Tight access — minimal trucks, careful staging",
    ],
    whyLocals: [
      {
        title: "Heritage-facade trained",
        body: "Painted wood Victorians need a gentler hand than nearly any other surface in California. We've worked on hundreds of them.",
      },
      {
        title: "Compact equipment for tight streets",
        body: "Our crew runs compact rigs that fit San Francisco's narrow streets and steep driveways — and we always coordinate parking ahead of time.",
      },
      {
        title: "Fog-and-mildew specialists",
        body: "Fog plus shade equals mildew. Our soft-wash chemistry kills it at the root so you're not back here next spring.",
      },
    ],
    testimonialQuoteIds: ["t-sf-1", "t-sf-2"],
    faqs: [
      {
        q: "Can you clean a Victorian without damaging the paint?",
        a: "Yes. Low-pressure soft-wash with a paint-safe detergent is the only correct method. We never high-pressure painted wood.",
      },
      {
        q: "How do you handle parking and access?",
        a: "We coordinate the day before, pull permits where required, and stage compactly so we don't block the block.",
      },
      {
        q: "Do you serve the Sunset and Richmond districts?",
        a: "Yes. Stucco row houses in the Sunset and Richmond are some of our most common SF jobs.",
      },
    ],
    neighborhoods: ["Sunset", "Richmond", "Pacific Heights", "Noe Valley", "Mission", "Bernal Heights", "Hayes Valley"],
  },
  {
    slug: "oakland",
    name: "Oakland",
    displayName: "Oakland, CA",
    region: "Bay Area",
    intro:
      "Oakland's range — from Rockridge craftsmen to Montclair and Piedmont hills homes to flat-land bungalows — means every job is different. The East Bay hills get fog and shade-driven mildew; the flats deal with traffic dust and older painted wood. Our approach scales to all of it without damaging finishes or landscaping.",
    localHooks: [
      "East Bay hill fog and mildew",
      "Rockridge and Temescal craftsman painted wood",
      "Flat-land bungalow concrete walks and driveways",
      "Wildfire-season ash settling on west-facing walls",
    ],
    whyLocals: [
      {
        title: "Hills-experienced crews",
        body: "Steep driveways, fog, redwood drip — Oakland hills homes have all of it. We've worked across Montclair, Piedmont Pines, and Crestmont.",
      },
      {
        title: "Wildfire-ash specialists",
        body: "After fire season, we focus on ash removal — biodegradable detergents, controlled rinse, and respect for drains and gutters.",
      },
      {
        title: "Craftsman wood-safe",
        body: "Painted wood craftsman siding in Rockridge and Temescal needs the right pressure and the right detergent. We have both.",
      },
    ],
    testimonialQuoteIds: ["t-oak-1", "t-oak-2"],
    faqs: [
      {
        q: "Can you clean ash residue after wildfire smoke events?",
        a: "Yes — and the sooner the better. Ash is mildly alkaline and can etch glass and metal if left for weeks.",
      },
      {
        q: "Do you work in the Oakland hills?",
        a: "Frequently. Montclair, Piedmont Pines, Crestmont, and Hiller Highlands are regular service areas.",
      },
      {
        q: "Will the cleaning affect my redwood landscaping?",
        a: "No. We pre-rinse plants, use biodegradable detergents, and post-rinse thoroughly.",
      },
    ],
    neighborhoods: ["Rockridge", "Temescal", "Montclair", "Piedmont Pines", "Crestmont", "Adams Point", "Glenview"],
  },
  {
    slug: "berkeley",
    name: "Berkeley",
    displayName: "Berkeley, CA",
    region: "Bay Area",
    intro:
      "Berkeley homes — from Berkeley Hills brown shingles to North Berkeley bungalows to flat-land stucco — share a relationship with the Bay's marine layer. North-facing walls develop mildew, stucco discolors under tree drip lines, and original painted wood from the 1920s and 1930s needs a careful approach. We're set up for all of it.",
    localHooks: [
      "Berkeley Hills brown-shingle preservation",
      "1920s-1930s painted wood bungalows",
      "Marine layer driving mildew on north walls",
      "Mature tree drip lines staining stucco",
    ],
    whyLocals: [
      {
        title: "Brown-shingle careful",
        body: "Berkeley Hills shingle homes are heritage architecture. We use the gentlest possible cleaning and never high-pressure raw wood.",
      },
      {
        title: "Drought-conscious",
        body: "Soft-washing uses dramatically less water than traditional pressure washing — we work with Bay Area drought realities, not against them.",
      },
      {
        title: "Painted-wood bungalow experience",
        body: "1920s and 1930s painted-wood bungalows are some of our most common Berkeley jobs. We know the pressure that's safe and the chemistry that lifts decades of mildew.",
      },
    ],
    testimonialQuoteIds: ["t-bek-1", "t-bek-2"],
    faqs: [
      {
        q: "Can you clean a Berkeley brown-shingle home?",
        a: "Yes — with the gentlest possible approach. We use very low pressure and a wood-safe detergent. Heritage finishes deserve heritage care.",
      },
      {
        q: "How much water do you use?",
        a: "Soft-washing uses a fraction of what high-pressure cleaning uses — typically 50–100 gallons for a full house wash.",
      },
      {
        q: "Do you serve North Berkeley and the Berkeley Hills?",
        a: "Yes. Both are core service areas for us.",
      },
    ],
    neighborhoods: ["North Berkeley", "Berkeley Hills", "Elmwood", "Claremont", "Westbrae", "Thousand Oaks"],
  },
  {
    slug: "alameda",
    name: "Alameda",
    displayName: "Alameda, CA",
    region: "Bay Area",
    intro:
      "Alameda is an island, and that defines its exterior-cleaning needs. Salt air corrodes metal and pits stone; marine layer mildew is constant on north-facing walls; and the city's beautiful Victorians, Edwardians, and Craftsmen demand a delicate touch. We've worked on Gold Coast restorations and West End bungalows alike.",
    localHooks: [
      "Salt-air-driven metal corrosion and stone pitting",
      "Marine layer mildew on north-facing walls",
      "Victorian and Edwardian painted wood",
      "Bayside stucco and EIFS on newer Marina Village builds",
    ],
    whyLocals: [
      {
        title: "Salt-air specialists",
        body: "Alameda's salt air is hard on every surface. We use rinse chemistry that removes salt deposits without etching.",
      },
      {
        title: "Heritage Victorian experience",
        body: "Gold Coast Victorians are exceptional. We treat them like the heirlooms they are — gentle pressure, paint-safe detergents, and meticulous attention.",
      },
      {
        title: "Island-friendly scheduling",
        body: "Tube and bridge timing matters. We schedule arrivals and departures around the worst commute windows.",
      },
    ],
    testimonialQuoteIds: ["t-ala-1", "t-ala-2"],
    faqs: [
      {
        q: "Can salt-air damage really be cleaned off?",
        a: "Yes — for most surfaces. Salt deposits rinse with the right detergent. Pitting that's already happened to soft stone may need a stone professional, but we'll flag what we see.",
      },
      {
        q: "Do you work on Gold Coast Victorians?",
        a: "Frequently. We use the lowest possible pressure and paint-safe detergents on every heritage home.",
      },
      {
        q: "Do you serve the entire island?",
        a: "Yes — Gold Coast, West End, East End, Bay Farm Island, and Marina Village are all routine service areas.",
      },
    ],
    neighborhoods: ["Gold Coast", "West End", "East End", "Bay Farm Island", "Marina Village", "Park Street"],
  },
  {
    slug: "san-leandro",
    name: "San Leandro",
    displayName: "San Leandro, CA",
    region: "Bay Area",
    intro:
      "San Leandro mixes established mid-century neighborhoods like Estudillo Estates and Bay-O-Vista with newer master-planned development along the waterfront. The Bay-side moisture combined with hot afternoons creates a perfect environment for mildew on stucco and algae on tile roofs. Our soft-wash methods handle both.",
    localHooks: [
      "Bay-side moisture and east-bay heat combo",
      "Mid-century homes in Estudillo Estates and Bay-O-Vista",
      "Concrete tile roofs collecting algae",
      "Commercial corridors along Marina Boulevard",
    ],
    whyLocals: [
      {
        title: "Tile-roof certified",
        body: "Concrete tile roofs need soft-washing. High pressure breaks tiles and voids warranties; soft-wash is the manufacturer-approved approach.",
      },
      {
        title: "Commercial-storefront experience",
        body: "We work along Marina Boulevard and the East 14th corridor on regular maintenance cycles for retail and restaurant clients.",
      },
      {
        title: "Estudillo Estates fluent",
        body: "We know the mid-century homes in Estudillo and Bay-O-Vista — original siding, mature trees, and surfaces that need a softer touch.",
      },
    ],
    testimonialQuoteIds: ["t-sl-1", "t-sl-2"],
    faqs: [
      {
        q: "Do you clean commercial storefronts in San Leandro?",
        a: "Yes. We have recurring programs along Marina Boulevard, East 14th Street, and the Marina Faire and Bayfair shopping areas.",
      },
      {
        q: "Can you clean tile roofs?",
        a: "Yes — using soft-wash methods that don't damage or break tiles.",
      },
      {
        q: "How do you handle commercial after-hours work?",
        a: "We routinely work evenings and early mornings to clean storefronts and sidewalks before business hours.",
      },
    ],
    neighborhoods: ["Estudillo Estates", "Bay-O-Vista", "Broadmoor", "Marina Faire", "Heron Bay"],
  },
  {
    slug: "hayward",
    name: "Hayward",
    displayName: "Hayward, CA",
    region: "Bay Area",
    intro:
      "Hayward's neighborhoods span the bayside flats, hillside terraces, and the rapidly growing mission-style developments in the south. Mediterranean-style homes with red tile roofs are common — and they need soft-wash treatment, not pressure. Bay marine layer plus East Bay heat means mildew thrives, and we've built our process around exactly that.",
    localHooks: [
      "Mediterranean-style red tile roofs",
      "Bay marine layer plus East Bay summer heat",
      "Hillside terrace homes with steep driveways",
      "Mission-style new builds in southern Hayward",
    ],
    whyLocals: [
      {
        title: "Red-tile-roof experts",
        body: "Mission-style red tile roofs need soft-wash. We've cleaned hundreds across Hayward without a single broken tile.",
      },
      {
        title: "Hillside driveway capable",
        body: "Steep terraces in the Hayward Hills need a careful approach. We stage from the bottom and work uphill so runoff is controlled.",
      },
      {
        title: "Mildew-targeted chemistry",
        body: "Our soft-wash chemistry kills mildew at the root — not just bleaches it. That's why Hayward homes stay clean longer with us.",
      },
    ],
    testimonialQuoteIds: ["t-hay-1", "t-hay-2"],
    faqs: [
      {
        q: "Can you clean a red tile roof safely?",
        a: "Yes. We soft-wash all tile roofs — no high pressure that could crack tiles or void warranties.",
      },
      {
        q: "Do you work in the Hayward Hills?",
        a: "Yes — including steep terraces and difficult-access driveways.",
      },
      {
        q: "How long does the result last?",
        a: "On Hayward roofs we typically see 3–5 years of clean before the next treatment is warranted.",
      },
    ],
    neighborhoods: ["Hayward Hills", "Mt. Eden", "Fairway Park", "Mission Hills", "Cherryland"],
  },
  {
    slug: "walnut-creek",
    name: "Walnut Creek",
    displayName: "Walnut Creek, CA",
    region: "Bay Area",
    intro:
      "Walnut Creek is the cultural heart of the East Bay's Diablo Valley — and home to some of the most well-kept neighborhoods anywhere in California. Northgate, Rossmoor, and Saranap homes are showpieces. But Diablo Valley summer heat bakes mineral deposits onto stucco, and the heavy oak canopies of Northgate and Saranap drop pollen and leaves into gutters constantly.",
    localHooks: [
      "Diablo Valley summer heat baking on mineral deposits",
      "Oak canopy pollen and gutter loading",
      "High-end stucco and Hardie siding in Northgate and Saranap",
      "Rossmoor common-area maintenance",
    ],
    whyLocals: [
      {
        title: "Concierge service",
        body: "Walnut Creek homeowners expect a polished experience. We text on arrival, send before/after photos, and never leave a job until you've signed off.",
      },
      {
        title: "Heat-mineral-deposit specialists",
        body: "Diablo Valley summer heat bakes minerals onto stucco. We have the chemistry to lift it without damaging the finish.",
      },
      {
        title: "Rossmoor common-area experience",
        body: "We coordinate with Rossmoor's standards and scheduling so common areas stay sharp without disrupting residents.",
      },
    ],
    testimonialQuoteIds: ["t-wc-1", "t-wc-2"],
    faqs: [
      {
        q: "How long does a typical Walnut Creek house wash take?",
        a: "Two to four hours for most homes; longer for two-story homes with extensive trim and architectural detail.",
      },
      {
        q: "Do you work in Rossmoor?",
        a: "Yes. We coordinate with Rossmoor management and follow community scheduling and runoff guidelines.",
      },
      {
        q: "Can you do a recurring quarterly clean?",
        a: "Yes — most of our Walnut Creek customers prefer a quarterly schedule for full exterior maintenance.",
      },
    ],
    neighborhoods: ["Northgate", "Rossmoor", "Saranap", "Walden", "Parkmead"],
  },
  {
    slug: "concord",
    name: "Concord",
    displayName: "Concord, CA",
    region: "Bay Area",
    intro:
      "Concord is Contra Costa County's largest city, with neighborhoods that range from older mid-century homes in central Concord to the newer master-planned developments at Crystyl Ranch and Lime Ridge. Diablo Valley heat, summer wildfire smoke residue, and persistent ag dust drift mean exterior surfaces accumulate film faster than they should.",
    localHooks: [
      "Diablo Valley heat plus wildfire ash season",
      "Established mid-century homes in central Concord",
      "Crystyl Ranch and Lime Ridge HOA developments",
      "Mt. Diablo trail dust drift",
    ],
    whyLocals: [
      {
        title: "Wildfire-ash trained",
        body: "We clean ash residue without spreading it through landscaping. Biodegradable, controlled rinse, plant-pre-wet — the right way.",
      },
      {
        title: "Crystyl Ranch HOA-fluent",
        body: "We know the standards in Crystyl Ranch, Lime Ridge, and the surrounding master-planned communities, and we coordinate building-wide service when needed.",
      },
      {
        title: "Mt. Diablo dust experienced",
        body: "Trail dust from Mt. Diablo settles on west-facing walls. We have the soft-wash chemistry to lift it without damaging painted surfaces.",
      },
    ],
    testimonialQuoteIds: ["t-con-1", "t-con-2"],
    faqs: [
      {
        q: "Do you handle wildfire ash cleanup?",
        a: "Yes — and it's better to clean soon. Ash is mildly alkaline and can etch glass and metal if left for weeks.",
      },
      {
        q: "Do you work in Crystyl Ranch and Lime Ridge?",
        a: "Yes. Both are regular service areas, and we coordinate with HOAs as needed.",
      },
      {
        q: "How long does a full house wash take in Concord?",
        a: "Most single-family homes are 2–3 hours; larger two-story homes 3–4 hours.",
      },
    ],
    neighborhoods: ["Crystyl Ranch", "Lime Ridge", "Dana Estates", "Sun Terrace", "Holbrook Heights"],
  },
  {
    slug: "san-mateo",
    name: "San Mateo",
    displayName: "San Mateo, CA",
    region: "Bay Area",
    intro:
      "San Mateo's tree-lined neighborhoods — from Hillsborough-adjacent Aragon to the established Hayward Park and downtown craftsman blocks — share a Bay Peninsula challenge: marine layer moisture plus mature tree canopies create the perfect mildew environment. North-facing walls and shaded patios show it first. Our soft-wash approach lifts it without damaging finishes.",
    localHooks: [
      "Peninsula marine layer moisture",
      "Mature tree canopies and pollen drop",
      "Hillsborough-adjacent estates and Aragon homes",
      "Older painted wood craftsman bungalows downtown",
    ],
    whyLocals: [
      {
        title: "Peninsula moisture specialists",
        body: "Marine layer plus shade equals mildew. Our soft-wash chemistry kills it at the root — and your north-facing walls stay clean longer.",
      },
      {
        title: "Aragon and Hayward Park fluent",
        body: "We work routinely in Aragon, Hayward Park, and the older craftsman blocks downtown. Each has its own siding mix and we adapt.",
      },
      {
        title: "Estate-grade care",
        body: "For Hillsborough-adjacent properties, we offer concierge service — staged arrival, dust-cloth-finish, and detailed before/after documentation.",
      },
    ],
    testimonialQuoteIds: ["t-sm-1", "t-sm-2"],
    faqs: [
      {
        q: "Do you work in Hillsborough-adjacent neighborhoods?",
        a: "Yes. We offer concierge-level service for higher-end properties and can coordinate around gate codes, staff, and event schedules.",
      },
      {
        q: "Can you clean older painted-wood craftsmen?",
        a: "Yes — using paint-safe soft-wash detergent at low pressure. We never high-pressure painted wood.",
      },
      {
        q: "How long until I can use my patio after cleaning?",
        a: "Same day. Most patios are dry within a few hours.",
      },
    ],
    neighborhoods: ["Aragon", "Hayward Park", "Baywood", "Downtown San Mateo", "Beresford"],
  },
  {
    slug: "san-jose",
    name: "San Jose",
    displayName: "San Jose, CA",
    region: "Bay Area",
    intro:
      "San Jose is the largest city in Northern California, with neighborhoods that span everything from Willow Glen craftsman to Almaden Valley estates to North San Jose tech-corridor townhomes. The Santa Clara Valley's mix of hot dry summers and high tree canopies means exterior surfaces accumulate pollen, dust, and mineral film fast. We've cleaned across every San Jose neighborhood.",
    localHooks: [
      "Santa Clara Valley summer heat and pollen",
      "Willow Glen craftsman painted wood",
      "Almaden Valley estate properties",
      "North San Jose townhome HOA standards",
    ],
    whyLocals: [
      {
        title: "Citywide coverage",
        body: "From Willow Glen to Berryessa to Almaden, we've cleaned across every San Jose neighborhood — and we know which surfaces are common where.",
      },
      {
        title: "Tech-corridor HOA experience",
        body: "We work with HOA management companies across North San Jose, Communications Hill, and Coyote Valley.",
      },
      {
        title: "Willow Glen craftsman careful",
        body: "Older painted-wood craftsmen in Willow Glen need a paint-safe, low-pressure approach. We have it down.",
      },
    ],
    testimonialQuoteIds: ["t-sj-1", "t-sj-2"],
    faqs: [
      {
        q: "Do you serve all of San Jose?",
        a: "Yes — from Willow Glen and downtown to Almaden Valley, Evergreen, Berryessa, and North San Jose.",
      },
      {
        q: "Can you handle multi-property HOA programs in North San Jose?",
        a: "Yes. We have recurring programs across multiple HOA communities in North San Jose and Communications Hill.",
      },
      {
        q: "How fast can I get a quote in San Jose?",
        a: "Same day in most cases. Send photos through our quote form and we'll respond within hours.",
      },
    ],
    neighborhoods: ["Willow Glen", "Almaden Valley", "Evergreen", "Berryessa", "North San Jose", "Communications Hill", "Cambrian"],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export const SACRAMENTO_CITIES = CITIES.filter((c) => c.region === "Sacramento");
export const BAY_AREA_CITIES = CITIES.filter((c) => c.region === "Bay Area");
