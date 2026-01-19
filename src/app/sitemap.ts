import { MetadataRoute } from "next";
import projectsData from "@/data/projects.json";
import seoMetadata from "@/data/seometadata.json";

type Project = {
  slug: string;
  title: string;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoMetadata.siteUrl;
  const currentDate = new Date().toISOString();

  // Static pages with optimized priorities
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/project`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/skills`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  // Dynamic project pages with individual priorities
  const projects = projectsData as Project[];
  const projectPages: MetadataRoute.Sitemap = projects.map((project, index) => ({
    url: `${baseUrl}/project/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    // Higher priority for first few projects (featured)
    priority: index < 3 ? 0.7 : 0.6,
  }));

  return [...staticPages, ...projectPages];
}
