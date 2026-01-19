import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Navbar from "@/components/layouts/Navbar";
import seoMetadata from "@/data/seometadata.json";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(seoMetadata.siteUrl),
  title: {
    default: seoMetadata.pages.home.title,
    template: `%s | Dinesh Bajgain`,
  },
  description: seoMetadata.pages.home.description,
  keywords: seoMetadata.defaultKeywords,
  authors: [{ name: seoMetadata.siteAuthor, url: seoMetadata.siteUrl }],
  creator: seoMetadata.siteAuthor,
  publisher: seoMetadata.siteAuthor,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: seoMetadata.iconImage, sizes: "32x32", type: "image/png" },
      { url: seoMetadata.iconImage, sizes: "16x16", type: "image/png" },
    ],
    shortcut: seoMetadata.iconImage,
    apple: [
      { url: seoMetadata.iconImage, sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: seoMetadata.siteLocale,
    url: seoMetadata.siteUrl,
    siteName: seoMetadata.siteName,
    title: seoMetadata.pages.home.title,
    description: seoMetadata.pages.home.description,
    images: [
      {
        url: `${seoMetadata.siteUrl}${seoMetadata.portraitImage}`,
        width: 1200,
        height: 630,
        alt: `${seoMetadata.siteAuthor} - Full Stack Developer & AI/ML Enthusiast from Nepal`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seoMetadata.pages.home.title,
    description: seoMetadata.pages.home.description,
    creator: seoMetadata.twitterHandle,
    site: seoMetadata.twitterHandle,
    images: {
      url: `${seoMetadata.siteUrl}${seoMetadata.portraitImage}`,
      alt: `${seoMetadata.siteAuthor} - Full Stack Developer & AI/ML Enthusiast`,
    },
  },
  alternates: {
    canonical: seoMetadata.siteUrl,
    languages: {
      "en-US": seoMetadata.siteUrl,
    },
  },
  category: "technology",
  classification: "Portfolio, Web Development, Software Engineering",
  referrer: "origin-when-cross-origin",
  other: {
    "google-site-verification": seoMetadata.verification?.google || "",
    "msvalidate.01": seoMetadata.verification?.bing || "",
    "yandex-verification": seoMetadata.verification?.yandex || "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://linkedin.com" />

        {/* JSON-LD Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoMetadata.structuredData.person),
          }}
        />
        {/* JSON-LD Structured Data for Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoMetadata.structuredData.website),
          }}
        />
        {/* JSON-LD Structured Data for BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoMetadata.structuredData.breadcrumb),
          }}
        />
        {/* JSON-LD Structured Data for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoMetadata.structuredData.faq),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="portfolio-theme"
          disableTransitionOnChange={false}
        >
          <Navbar orientation="horizontal" />
          <main className="page-content">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
