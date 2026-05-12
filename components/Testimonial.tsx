import type { Testimonial as T } from "@/lib/testimonials";
import { Icon } from "./Icon";

export function TestimonialCard({ t }: { t: T }) {
  return (
    <figure className="flex h-full flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
      <div className="flex items-center gap-1 text-accent-500" role="img" aria-label={`${t.stars} out of 5 stars`}>
        {Array.from({ length: t.stars }).map((_, i) => (
          <Icon key={i} name="star" className="h-5 w-5" />
        ))}
      </div>
      <blockquote className="flex-1 text-base leading-relaxed text-ink-700">
        <p>&ldquo;{t.quote}&rdquo;</p>
      </blockquote>
      <figcaption className="text-sm">
        <div className="font-semibold text-brand-900">{t.name}</div>
        <div className="text-ink-500">
          {t.role} &middot; {t.city}
        </div>
      </figcaption>
    </figure>
  );
}
