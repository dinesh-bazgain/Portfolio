import { Metadata } from "next";
import HomePage from "./home/page";
import seoMetadata from "@/data/seometadata.json";
import { JsonLd, generateHowToHireSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: seoMetadata.pages.home.title,
  description: seoMetadata.pages.home.description,
  keywords: seoMetadata.pages.home.keywords,
  alternates: {
    canonical: seoMetadata.pages.home.canonical,
  },
  openGraph: {
    title: seoMetadata.pages.home.title,
    description: seoMetadata.pages.home.description,
    url: seoMetadata.siteUrl + seoMetadata.pages.home.canonical,
    images: [
      {
        url: seoMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: "Dinesh Bajgain - Full Stack Developer & AI/ML Enthusiast",
      },
    ],
  },
  twitter: {
    title: seoMetadata.pages.home.title,
    description: seoMetadata.pages.home.description,
    images: [seoMetadata.ogImage],
  },
};

export default function Home() {
  const howToSchema = generateHowToHireSchema({
    siteUrl: seoMetadata.siteUrl,
  });

  return (
    <>
      <JsonLd data={howToSchema} />
      <HomePage />
    </>
  );
}
