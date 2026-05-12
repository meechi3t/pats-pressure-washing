import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { BRAND } from "@/lib/brand";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { SkipLink } from "@/components/SkipLink";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: `${BRAND.businessName} | Pressure Washing in ${BRAND.primaryCity} & the ${BRAND.secondaryMarket}`,
    template: `%s | ${BRAND.businessName}`,
  },
  description: `Residential and commercial pressure washing across ${BRAND.primaryCity} and the ${BRAND.secondaryMarket}. Licensed, insured, eco-friendly. Free same-day quotes.`,
  openGraph: {
    type: "website",
    siteName: BRAND.businessName,
    locale: "en_US",
    images: [
      {
        url: "/images/og/og-default.svg",
        width: 1200,
        height: 630,
        alt: `${BRAND.businessName} — Pressure washing in Sacramento and the Bay Area`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#173d70",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen bg-white font-sans">
        <SkipLink />
        <Header />
        <main id="main" className="pb-24 md:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
