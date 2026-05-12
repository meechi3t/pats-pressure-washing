// Keyboard-visible skip link. Hidden until focused.
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only z-50 rounded-2xl bg-brand-800 px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-accent-300"
    >
      Skip to main content
    </a>
  );
}
