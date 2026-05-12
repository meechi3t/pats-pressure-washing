/**
 * Placeholder testimonials. Replace with real reviews before launch.
 * Mark below remains for the launch checklist sweep.
 */
// PLACEHOLDER — replace with real reviews before launch.

export type Testimonial = {
  id: string;
  name: string; // first name + last initial
  city: string;
  role: string; // homeowner | realtor | property manager | business owner
  stars: 4 | 5;
  quote: string;
};

export const TESTIMONIALS: Testimonial[] = [
  // Sacramento
  {
    id: "t-sac-1",
    name: "Sarah K.",
    city: "Sacramento, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "I genuinely couldn't believe it was the same house. The crew was on time, walked me through what they were going to do, and texted me a before-and-after when they finished. East Sac craftsman, clean as new.",
  },
  {
    id: "t-sac-2",
    name: "Marcus T.",
    city: "Sacramento, CA",
    role: "Realtor",
    stars: 5,
    quote:
      "I use them on every listing now. A pre-listing wash adds days back to my timeline and bumps offers. Worth every dollar.",
  },
  {
    id: "t-sac-3",
    name: "Aisha R.",
    city: "Sacramento, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Friendly, professional, and they cared about our plants. North-side mildew that I'd been ignoring for two years was just gone.",
  },
  // Elk Grove
  {
    id: "t-eg-1",
    name: "Jenna W.",
    city: "Elk Grove, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Driveway looks new. Wide three-car aprons can be a pain and they cleared all of it in about an hour. HOA reminder letter no longer applies.",
  },
  {
    id: "t-eg-2",
    name: "Devon L.",
    city: "Elk Grove, CA",
    role: "Property Manager",
    stars: 5,
    quote:
      "We use them on a quarterly basis for our Laguna properties. Reliable, insured, and the owners love how the buildings look.",
  },
  // Roseville
  {
    id: "t-ros-1",
    name: "Priya M.",
    city: "Roseville, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "The black streaks on our tile roof had been there for years. Soft-wash treatment, no damage, and now the roof looks brand new from the street.",
  },
  {
    id: "t-ros-2",
    name: "Brian H.",
    city: "Roseville, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Westpark HOA was on me about the back fence and patio. One afternoon, both look like the day they were built.",
  },
  // Folsom
  {
    id: "t-fol-1",
    name: "Elena G.",
    city: "Folsom, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Empire Ranch stucco was looking tired. They soft-washed the whole house and it brought back the color we'd forgotten was there.",
  },
  {
    id: "t-fol-2",
    name: "Robert P.",
    city: "Folsom, CA",
    role: "Business Owner",
    stars: 4,
    quote:
      "Cleaned the storefront on Sutter Street overnight, no disruption to business. Will book again.",
  },
  // Citrus Heights
  {
    id: "t-ch-1",
    name: "Linda S.",
    city: "Citrus Heights, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Gutters were a disaster. They cleared, flushed, and even fixed a sagging joint. Now I'm on a semi-annual plan.",
  },
  {
    id: "t-ch-2",
    name: "Mike A.",
    city: "Citrus Heights, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Soft-washed our older asphalt roof and the difference is night and day. They also walked me through what to expect over the next year. Pros.",
  },
  // Rancho Cordova
  {
    id: "t-rc-1",
    name: "Jasmine K.",
    city: "Rancho Cordova, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Anatolia stucco was filthy and I didn't realize it until they did the next-door house. Booked them the same day, same result.",
  },
  {
    id: "t-rc-2",
    name: "Carlos D.",
    city: "Rancho Cordova, CA",
    role: "Property Manager",
    stars: 5,
    quote:
      "Multi-unit work, no fuss, clear documentation. They send photos, they send invoices, they show up.",
  },
  // Davis
  {
    id: "t-dav-1",
    name: "Rebecca O.",
    city: "Davis, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Their biodegradable detergent claim is real — sent me product sheets. House looks great and my pollinator garden is fine.",
  },
  {
    id: "t-dav-2",
    name: "Tom N.",
    city: "Davis, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Mace Ranch home, full exterior plus driveway, plus the solar panels. Output bumped about 7% the week after. Money well spent.",
  },
  // San Francisco
  {
    id: "t-sf-1",
    name: "Hannah B.",
    city: "San Francisco, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Painted Victorian in Noe Valley. They were unbelievably careful with the trim. House looks decades younger.",
  },
  {
    id: "t-sf-2",
    name: "Vincent C.",
    city: "San Francisco, CA",
    role: "Business Owner",
    stars: 5,
    quote:
      "Storefront in Hayes Valley, no parking nearby, narrow access. They figured it out and did it perfectly. Repeat customer.",
  },
  // Oakland
  {
    id: "t-oak-1",
    name: "Nora F.",
    city: "Oakland, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Wildfire ash all over our Montclair home. They cleaned it without spreading it through the landscaping. Worth every dollar.",
  },
  {
    id: "t-oak-2",
    name: "Greg M.",
    city: "Oakland, CA",
    role: "Realtor",
    stars: 5,
    quote:
      "Rockridge craftsman pre-list. House sold over asking the first weekend. The curb-appeal upgrade was the difference.",
  },
  // Berkeley
  {
    id: "t-bek-1",
    name: "Yusuf I.",
    city: "Berkeley, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "1928 painted bungalow in Elmwood. They treated it like a museum piece. Mildew is gone and the paint is intact.",
  },
  {
    id: "t-bek-2",
    name: "Margaret D.",
    city: "Berkeley, CA",
    role: "Homeowner",
    stars: 4,
    quote:
      "Brown-shingle home in the hills. Gentlest cleaning I've ever seen. The crew explained every step. Booked them for next year already.",
  },
  // Alameda
  {
    id: "t-ala-1",
    name: "Brian C.",
    city: "Alameda, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Gold Coast Victorian, salt-air everything. They restored the front facade and the metal fence. Beautiful work.",
  },
  {
    id: "t-ala-2",
    name: "Sienna P.",
    city: "Alameda, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Bay Farm Island stucco, north walls always mildew. Booked them on a recommendation. Walls clean, follow-up easy.",
  },
  // San Leandro
  {
    id: "t-sl-1",
    name: "Aaron J.",
    city: "San Leandro, CA",
    role: "Business Owner",
    stars: 5,
    quote:
      "Marina Boulevard storefront. They worked overnight and we opened to a clean facade. No complaints from us — or our customers.",
  },
  {
    id: "t-sl-2",
    name: "Lori T.",
    city: "San Leandro, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Tile roof full of algae streaks. Soft-washed without a cracked tile. Roof looks brand new from the street.",
  },
  // Hayward
  {
    id: "t-hay-1",
    name: "Diego R.",
    city: "Hayward, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Red-tile roof in Mission Hills. Looked like new after. They walked the roof carefully and didn't damage a thing.",
  },
  {
    id: "t-hay-2",
    name: "Carla V.",
    city: "Hayward, CA",
    role: "Homeowner",
    stars: 4,
    quote:
      "Steep hillside driveway, no problem for them. Crew was professional and the driveway looks new.",
  },
  // Walnut Creek
  {
    id: "t-wc-1",
    name: "Frank L.",
    city: "Walnut Creek, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Northgate. They text on arrival, send before/after, and don't leave until you sign off. Concierge experience.",
  },
  {
    id: "t-wc-2",
    name: "Diane H.",
    city: "Walnut Creek, CA",
    role: "Property Manager",
    stars: 5,
    quote:
      "Rossmoor common areas, on a quarterly schedule. Reliable, clean documentation, no resident complaints.",
  },
  // Concord
  {
    id: "t-con-1",
    name: "Amy E.",
    city: "Concord, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Crystyl Ranch home, wildfire ash everywhere. They cleaned every west-facing surface and didn't damage a single plant.",
  },
  {
    id: "t-con-2",
    name: "Steve M.",
    city: "Concord, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Lime Ridge stucco. Bright and clean again. Booked another for next spring.",
  },
  // San Mateo
  {
    id: "t-sm-1",
    name: "Olivia Y.",
    city: "San Mateo, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Aragon home, north-side mildew gone. Crew was discreet, fast, and meticulous. I appreciated the photos.",
  },
  {
    id: "t-sm-2",
    name: "Henry W.",
    city: "San Mateo, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Downtown craftsman, painted wood I was worried about. They were careful and the result is exceptional.",
  },
  // San Jose
  {
    id: "t-sj-1",
    name: "Nadia P.",
    city: "San Jose, CA",
    role: "Homeowner",
    stars: 5,
    quote:
      "Willow Glen craftsman. Painted wood, original from 1930s. They were genuinely careful and the result is beautiful.",
  },
  {
    id: "t-sj-2",
    name: "Eric H.",
    city: "San Jose, CA",
    role: "Property Manager",
    stars: 5,
    quote:
      "North San Jose townhome community, quarterly schedule. They show up, do the work, send the photos. Easy partnership.",
  },
];

export function testimonialsForCity(ids: string[]): Testimonial[] {
  return ids
    .map((id) => TESTIMONIALS.find((t) => t.id === id))
    .filter((t): t is Testimonial => Boolean(t));
}
