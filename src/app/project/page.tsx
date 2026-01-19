import { Metadata } from "next";
import seoMetadata from "@/data/seometadata.json";
import ProjectListClient from "./ProjectListClient";

export const metadata: Metadata = {
  title: seoMetadata.pages.projects.title,
  description: seoMetadata.pages.projects.description,
  keywords: seoMetadata.pages.projects.keywords,
  alternates: {
    canonical: seoMetadata.pages.projects.canonical,
  },
  openGraph: {
    title: seoMetadata.pages.projects.title,
    description: seoMetadata.pages.projects.description,
    url: seoMetadata.siteUrl + seoMetadata.pages.projects.canonical,
    images: [
      {
        url: seoMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: "Projects - Dinesh Bajgain",
      },
    ],
  },
  twitter: {
    title: seoMetadata.pages.projects.title,
    description: seoMetadata.pages.projects.description,
    images: [seoMetadata.ogImage],
  },
};

export default function ProjectPage() {
  return <ProjectListClient />;
}
