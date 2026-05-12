// Renders a JSON-LD <script>. Server component by default.
// We stringify with no spaces and use suppressHydrationWarning to avoid hydration noise.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify with no replacer is safe: pure data, no HTML.
      // We intentionally do not encode angle brackets — the browser parses application/ld+json as data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
