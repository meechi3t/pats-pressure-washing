import Image from "next/image";

export type GalleryItem = {
  beforeSrc: string;
  afterSrc: string;
  alt: string;
  service: string;
  city: string;
};

// Static side-by-side before/after grid. A drag-slider would be a future enhancement.
export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  if (items.length === 0) {
    return (
      <p className="rounded-2xl border border-dashed border-ink-200 p-8 text-center text-sm text-ink-500">
        Gallery images coming soon. See IMAGES.md for the recommended subjects to capture.
      </p>
    );
  }
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, idx) => (
        <li key={idx} className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft">
          <div className="grid grid-cols-2 gap-px bg-ink-100">
            <figure className="relative aspect-[4/3] bg-ink-50">
              <Image src={it.beforeSrc} alt={`Before: ${it.alt}`} fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
              <figcaption className="absolute left-2 top-2 rounded-md bg-black/60 px-2 py-0.5 text-xs font-semibold text-white">
                Before
              </figcaption>
            </figure>
            <figure className="relative aspect-[4/3] bg-ink-50">
              <Image src={it.afterSrc} alt={`After: ${it.alt}`} fill sizes="(min-width: 1024px) 30vw, 50vw" className="object-cover" />
              <figcaption className="absolute left-2 top-2 rounded-md bg-accent-600 px-2 py-0.5 text-xs font-semibold text-white">
                After
              </figcaption>
            </figure>
          </div>
          <div className="p-4 text-sm">
            <div className="font-semibold text-brand-900">{it.service}</div>
            <div className="text-ink-500">{it.city}</div>
          </div>
        </li>
      ))}
    </ul>
  );
}
