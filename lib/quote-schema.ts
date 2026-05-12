/**
 * Zod schema for the quote form.
 * Shared between the client (UI validation) and the server (route handler).
 *
 * Keeping fields tight on the required side reflects the competitor brief:
 * shorter required field set, with optional progressive disclosure for details.
 */

import { z } from "zod";
import { SERVICES } from "./services";
import { CITIES } from "./cities";

// Cast carefully: SERVICES is non-empty at compile time (asserted via runtime tests).
// CITIES + "other" likewise.
const SERVICE_SLUGS = SERVICES.map((s) => s.slug) as unknown as [string, ...string[]];
const CITY_SLUGS_OR_OTHER = [...CITIES.map((c) => c.slug), "other"] as unknown as [string, ...string[]];

export const QuoteSchema = z.object({
  // Honeypot — should be empty. We accept any value at the schema level so the
  // route handler can return a success-shaped response (and silently drop the
  // submission) rather than leaking the trap via a validation error.
  // Keep field name innocuous-but-uncommon so most bots will fill it.
  website: z.string().max(2000).optional().default(""),

  // Required
  name: z.string().trim().min(2, "Please enter your name.").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a phone number.")
    .max(25)
    .regex(/^[0-9+()\-.\s]+$/, "Phone numbers should only contain digits and common separators."),
  email: z.string().trim().email("Please enter a valid email.").max(160),
  serviceAddress: z.string().trim().min(5, "Please enter a service address.").max(200),
  city: z.enum(CITY_SLUGS_OR_OTHER),

  // Optional but commonly answered
  propertyType: z.enum(["residential", "commercial", "other"]).optional(),
  services: z.array(z.enum(SERVICE_SLUGS)).max(SERVICES.length).optional().default([]),
  squareFootage: z
    .union([
      z.number().int().nonnegative(),
      z.string().regex(/^\d{0,7}$/),
    ])
    .optional(),
  preferredDate: z
    .string()
    .trim()
    .max(40)
    .optional(),
  notes: z.string().trim().max(2000).optional().default(""),

  // File metadata only (no binary). We discard binary in dev (see route handler).
  photoFileNames: z.array(z.string().max(200)).max(8).optional().default([]),
});

export type QuoteInput = z.infer<typeof QuoteSchema>;
