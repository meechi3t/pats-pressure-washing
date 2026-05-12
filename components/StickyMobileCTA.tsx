import { BRAND, telHref } from "@/lib/brand";
import { Icon } from "./Icon";

// Sticky bottom bar for mobile only. Hidden on md+ (desktop has the header CTAs).
// Tap targets meet the 44x44 minimum (h-12 = 48px).
export function StickyMobileCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-ink-100 bg-white/95 px-3 py-2 shadow-lift backdrop-blur supports-[backdrop-filter]:bg-white/80 md:hidden"
      role="region"
      aria-label="Quick contact"
    >
      <div className="mx-auto flex max-w-md items-center gap-2">
        <a
          href={telHref}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-brand-700 px-4 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          aria-label={`Call ${BRAND.businessName}`}
        >
          <Icon name="phone" className="h-5 w-5" />
          Call
        </a>
        <a
          href={BRAND.quoteHref}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-accent-600 px-4 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300"
        >
          Get a Free Quote
          <Icon name="arrow-right" className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
