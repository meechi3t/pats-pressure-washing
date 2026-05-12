import Link from "next/link";
import type { Service } from "@/lib/services";
import { Icon } from "./Icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex h-full flex-col gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
    >
      <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-700 group-hover:bg-brand-100">
        <Icon name={service.iconKey} className="h-6 w-6" />
      </span>
      <div className="flex-1">
        <h3 className="font-display text-xl font-semibold text-brand-900">{service.shortName}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-600">{service.tagline}</p>
      </div>
      <div className="flex items-center gap-1 text-sm font-semibold text-accent-600 group-hover:text-accent-700">
        Learn more
        <Icon name="arrow-right" className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
