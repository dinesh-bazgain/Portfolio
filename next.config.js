/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Trailing slashes for consistent URLs (better for SEO)
  trailingSlash: false,
  // Compress for better performance
  compress: true,
  // Generate ETags for caching
  generateEtags: true,
  // Powered by header removal (security & cleaner headers)
  poweredByHeader: false,
  // Note: Security headers should be configured in your hosting platform
  // (Vercel, Netlify, etc.) since static export doesn't support Next.js headers
  // Example _headers file for Netlify or vercel.json for Vercel:
  // X-Content-Type-Options: nosniff
  // X-Frame-Options: DENY
  // X-XSS-Protection: 1; mode=block
  // Referrer-Policy: strict-origin-when-cross-origin
};

module.exports = nextConfig;
