// Minimal inline icon set. Each is a 24x24 viewBox SVG with currentColor.
// Adding icons here is preferable to a heavy icon library for our perf budget.
import type { SVGProps } from "react";
import type { IconKey } from "@/lib/services";

type IconProps = SVGProps<SVGSVGElement> & { name: IconKey | "phone" | "mail" | "check" | "star" | "arrow-right" | "menu" | "close" | "shield" | "leaf" | "map" | "image" | "calendar" | "info" };

export function Icon({ name, className = "h-6 w-6", ...rest }: IconProps) {
  switch (name) {
    case "house":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M3 11l9-7 9 7" />
          <path d="M5 10v9h14v-9" />
          <path d="M10 19v-5h4v5" />
        </svg>
      );
    case "building":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
        </svg>
      );
    case "soft-spray":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M4 18c2-1 4-1 6 0 2 1 4 1 6 0 2-1 4-1 4-1" />
          <path d="M4 14c2-1 4-1 6 0 2 1 4 1 6 0 2-1 4-1 4-1" />
          <path d="M8 9c1-2 3-3 4-3 1 0 3 1 4 3" />
        </svg>
      );
    case "concrete":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <rect x="3" y="6" width="18" height="12" rx="1" />
          <path d="M3 10h18M3 14h18M9 6v12M15 6v12" />
        </svg>
      );
    case "roof":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M2 13L12 4l10 9" />
          <path d="M5 12v8h14v-8" />
          <path d="M9 20v-4h6v4" />
        </svg>
      );
    case "gutter":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M3 8h18l-2 4H5z" />
          <path d="M9 12v8M15 12v8" />
        </svg>
      );
    case "deck":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M3 8h18M3 14h18" />
          <path d="M6 4v16M10 4v16M14 4v16M18 4v16" />
        </svg>
      );
    case "window":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <rect x="4" y="4" width="16" height="16" rx="1" />
          <path d="M12 4v16M4 12h16" />
        </svg>
      );
    case "solar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <rect x="3" y="5" width="18" height="10" rx="1" />
          <path d="M3 10h18M9 5v10M15 5v10" />
          <path d="M12 17v3M9 20h6" />
        </svg>
      );
    case "graffiti":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M3 18c4-3 8-6 12-6s6 3 6 6" />
          <path d="M9 12L7 7M14 11l1-6M19 13l2-3" />
        </svg>
      );
    case "bin":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M5 7h14l-1.5 13h-11z" />
          <path d="M9 7V4h6v3" />
          <path d="M10 11v6M14 11v6" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
          <path d="M5 19c4-4 8-8 14-14" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
        </svg>
      );
    case "mail":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M5 13l4 4L19 7" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden {...rest}>
          <path d="M12 2l3 6.9 7.5.8-5.6 5 1.6 7.4L12 18.4 5.5 22.1l1.6-7.4-5.6-5 7.5-.8z" />
        </svg>
      );
    case "arrow-right":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      );
    case "menu":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M6 6l12 12M6 18L18 6" />
        </svg>
      );
    case "map":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z" />
          <path d="M9 4v14M15 6v14" />
        </svg>
      );
    case "image":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="1.5" />
          <path d="M21 17l-5-6-6 7-3-3-4 4" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M3 9h18M8 3v4M16 3v4" />
        </svg>
      );
    case "info":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden {...rest}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8h.01M11 12h1v5h1" />
        </svg>
      );
    default:
      return null;
  }
}
