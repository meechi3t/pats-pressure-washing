import { cx } from "@/lib/cx";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  level?: "h2" | "h3";
  tone?: "light" | "dark";
};

export function SectionHeader({ eyebrow, title, description, align = "left", className, level = "h2", tone = "light" }: Props) {
  const Heading = level;
  // On dark sections (bg-brand-900) the accent eyebrow needs to flip to a lighter
  // accent for WCAG AA contrast. accent-300 (#6ce0a0) over brand-900 (#0a1c34)
  // gives ~9:1 contrast.
  const eyebrowClass =
    tone === "dark"
      ? "mb-3 text-sm font-semibold uppercase tracking-widest text-accent-300"
      : "mb-3 text-sm font-semibold uppercase tracking-widest text-accent-700";
  const titleClass =
    tone === "dark"
      ? "text-3xl font-bold tracking-tight text-white sm:text-4xl"
      : "text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl";
  const descClass =
    tone === "dark" ? "mt-4 text-lg text-white/90" : "mt-4 text-lg text-ink-600";
  return (
    <div className={cx("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <div className={eyebrowClass}>{eyebrow}</div> : null}
      <Heading className={titleClass}>{title}</Heading>
      {description ? <p className={descClass}>{description}</p> : null}
    </div>
  );
}
