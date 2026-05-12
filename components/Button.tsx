import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cx } from "@/lib/cx";

type Variant = "primary" | "secondary" | "ghost" | "white";
type Size = "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    // accent-600 (#0d8848) gives a 4.7:1 contrast with white text for WCAG AA compliance.
    "bg-accent-600 text-white hover:bg-accent-700 focus-visible:ring-accent-300 shadow-soft",
  secondary:
    "bg-brand-700 text-white hover:bg-brand-800 focus-visible:ring-brand-300",
  ghost:
    "bg-transparent text-brand-700 hover:bg-brand-50 focus-visible:ring-brand-300",
  white:
    "bg-white text-brand-800 hover:bg-ink-100 focus-visible:ring-white/50 shadow-soft",
};

const sizeClasses: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

function baseClasses(variant: Variant, size: Size, fullWidth?: boolean, extra?: string) {
  return cx(
    "inline-flex items-center justify-center gap-2 rounded-2xl font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-60 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth && "w-full",
    extra
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  children: ReactNode;
};

export function Button({ variant = "primary", size = "md", fullWidth, className, children, ...rest }: ButtonProps) {
  return (
    <button className={baseClasses(variant, size, fullWidth, className)} {...rest}>
      {children}
    </button>
  );
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  external?: boolean;
  children: ReactNode;
};

export function LinkButton({ href, variant = "primary", size = "md", fullWidth, external, className, children, ...rest }: LinkButtonProps) {
  const cls = baseClasses(variant, size, fullWidth, className);
  if (external || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
    // External, tel:, or mailto: links go through a normal <a> so the browser handles them.
    // rel="noopener noreferrer" is added for any explicitly external link.
    const rel = external ? "noopener noreferrer" : undefined;
    const target = external ? "_blank" : undefined;
    return (
      <a href={href} className={cls} rel={rel} target={target} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
