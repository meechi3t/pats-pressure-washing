// Server component using <details>/<summary> for native, accessible, zero-JS disclosure.
// Each FAQ is also surfaced as JSON-LD by the page that includes it.
export function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group rounded-2xl border border-ink-100 bg-white p-5 shadow-soft open:shadow-lift">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-brand-900 marker:hidden">
        <span>{q}</span>
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 text-brand-600 transition group-open:rotate-45"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </summary>
      <p className="mt-3 text-sm leading-relaxed text-ink-600">{a}</p>
    </details>
  );
}
