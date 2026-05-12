"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BRAND, telHref } from "@/lib/brand";
import { LinkButton } from "./Button";
import { Icon } from "./Icon";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  // Close on Escape and lock body scroll when the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-ink-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-brand-900" aria-label={`${BRAND.businessName} home`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-700 text-white">
            <Icon name="soft-spray" className="h-5 w-5" />
          </span>
          <span className="font-display text-lg font-bold leading-none">{BRAND.businessName}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-ink-700 transition hover:bg-brand-50 hover:text-brand-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={telHref}
            className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-brand-800 hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
          >
            <Icon name="phone" className="h-4 w-4" />
            {BRAND.phone.display}
          </a>
          <LinkButton href={BRAND.quoteHref} variant="primary" size="md">
            Get a Free Quote
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-ink-700 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-ink-100 bg-white md:hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-ink-800 hover:bg-brand-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <LinkButton href={telHref} variant="secondary" size="md" fullWidth>
                <Icon name="phone" className="h-4 w-4" />
                Call
              </LinkButton>
              <LinkButton href={BRAND.quoteHref} variant="primary" size="md" fullWidth onClick={() => setOpen(false)}>
                Get Quote
              </LinkButton>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
