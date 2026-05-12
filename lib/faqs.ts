/**
 * Site-wide FAQ entries (used by /faq).
 * Service-specific FAQs live alongside their service in lib/services.ts.
 * City-specific FAQs live alongside their city in lib/cities.ts.
 */

export type FAQ = { q: string; a: string };

export const SITE_FAQS: FAQ[] = [
  {
    q: "How much does pressure washing cost?",
    a: "Most residential house washes fall between $250 and $600 depending on size, surface, and access. Driveways, roofs, and gutters are priced separately. Every quote is free — send photos through our quote form and we'll give you a real number, not a placeholder.",
  },
  {
    q: "What's the difference between pressure washing and soft washing?",
    a: "Pressure washing uses high water pressure to lift dirt mechanically. Soft washing uses low pressure plus a biodegradable cleaning solution that breaks down mildew and algae chemically. Soft washing is what you want on siding, stucco, painted surfaces, and roofs — high pressure can damage those.",
  },
  {
    q: "How often should I have my home pressure washed?",
    a: "Most homes benefit from a yearly exterior wash. North-facing walls and shaded areas with mildew may need every six months. Gutters typically need twice-yearly clearing.",
  },
  {
    q: "Will pressure washing damage my siding, paint, or stucco?",
    a: "Not when it's done right. We tailor pressure and chemistry to each surface — painted siding, stucco, and brick all get soft-washed at low pressure. The cleaning is chemical, not mechanical.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes. Every quote is free — there's no obligation and no high-pressure follow-up. Most quotes go out the same business day.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Sacramento and the greater San Francisco Bay Area. That includes Elk Grove, Roseville, Folsom, Citrus Heights, Rancho Cordova, Davis, San Francisco, Oakland, Berkeley, Alameda, San Leandro, Hayward, Walnut Creek, Concord, San Mateo, San Jose, and the surrounding communities.",
  },
  {
    q: "How long does a job take?",
    a: "A typical house wash is 1–3 hours. Driveways are 30–90 minutes. Gutters are 1–2 hours. We give you an arrival window and a finish-time estimate when we book.",
  },
  {
    q: "Do I need to be home during the service?",
    a: "No. As long as we can access water and the areas to be cleaned, you don't need to be home. We text before we arrive and send photos when we finish.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, ACH/bank transfer, check, Zelle, and Venmo. Commercial accounts can be invoiced on net-30 terms.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We carry general liability and workers' compensation insurance. We're happy to email a Certificate of Insurance to your property manager or HOA before service.",
  },
  {
    q: "Do you use eco-friendly cleaning solutions?",
    a: "Yes. Every detergent we use is biodegradable. We pre-rinse landscaping, contain runoff, and respect storm drains — especially in our watershed communities.",
  },
  {
    q: "How quickly can you schedule a job?",
    a: "Most quote requests are answered the same business day, and we typically schedule within 7–10 days. Urgent or graffiti calls we try to handle within 24–48 hours.",
  },
];
