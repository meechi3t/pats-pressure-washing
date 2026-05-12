/** @type {import('next').NextConfig} */

// Static export configured for GitHub Pages hosting under /pats-pressure-washing.
// Notes:
// - `output: 'export'` produces a fully static `out/` directory via `next build`.
// - `basePath` + `assetPrefix` scope the site to the repo subpath on github.io.
// - `trailingSlash` makes `out/foo/index.html` resolve cleanly on Pages.
// - Security headers (CSP/HSTS/etc.) are not honored on Pages and have been removed
//   from this config. The previous Azure SWA-oriented `headers()` function used to
//   live here; production hosting that supports response headers should reintroduce
//   them via the host's config (SWA, Vercel, CDN, etc.).
// - Image optimizer is disabled (`unoptimized: true`) because static export cannot
//   run the Next.js image pipeline at request time. The `formats` field was removed
//   for the same reason — it is a no-op without the optimizer.
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: "export",
  basePath: "/pats-pressure-washing",
  assetPrefix: "/pats-pressure-washing/",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [],
    // Allow local SVG placeholders. Production photos will be JPG/WebP and this
    // can be flipped off if you remove all SVGs from /public/images.
    // The contentSecurityPolicy locks SVG to a sandboxed script-disabled mode.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
