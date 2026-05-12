import { BRAND } from "@/lib/brand";
import { Icon } from "./Icon";

const iconMap = {
  "Licensed & Insured": "shield",
  "Free Estimates": "info",
  "Satisfaction Guaranteed": "check",
  "Eco-Friendly Solutions": "leaf",
  "Locally Owned & Operated": "map",
  "Five-Star Rated": "star",
} as const;

export function TrustBar({ variant = "light" }: { variant?: "light" | "dark" }) {
  const wrapper = variant === "light" ? "bg-white" : "bg-brand-900";
  const text = variant === "light" ? "text-ink-700" : "text-white/90";
  const ringTop = variant === "light" ? "border-t border-ink-100" : "";
  const ringBottom = variant === "light" ? "border-b border-ink-100" : "";

  return (
    <div className={`${wrapper} ${ringTop} ${ringBottom}`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul
          className={`grid grid-cols-2 gap-3 py-4 text-sm sm:grid-cols-3 lg:grid-cols-6 ${text}`}
          aria-label="Trust indicators"
        >
          {BRAND.trustSignals.map((label) => {
            const key = (iconMap as Record<string, "shield" | "info" | "check" | "leaf" | "map" | "star">)[label] ?? "check";
            return (
              <li key={label} className="flex items-center gap-2">
                <Icon name={key} className="h-5 w-5 shrink-0 text-accent-500" />
                <span className="font-medium">{label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
