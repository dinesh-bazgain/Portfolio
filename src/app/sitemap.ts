import { MetadataRoute } from "next";
import projectsData from "@/data/projects.json";
import seoMetadata from "@/data/seometadata.json";
import { NAV_ITEMS } from "@/data/navigation";

type Project = {
  slug: string;
  title: string;
  description?: string;
  tags?: string[];
};

// Page priority configuration - add new pages here to customize their priority
const PAGE_PRIORITIES: Record<
  string,
  {
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
  }
> = {
  "/": {
    priority: 1.0,
    changeFrequency: "weekly",
  },
  "/about": {
    priority: 0.9,
    changeFrequency: "monthly",
  },
  "/project": {
    priority: 0.9,
    changeFrequency: "weekly",
  },
  "/skills": {
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/experience": {
    priority: 0.8,
    changeFrequency: "monthly",
  },
  "/contact": {
    priority: 0.7,
    changeFrequency: "yearly",
  },
};

// Default values for pages not in the config
const DEFAULT_PAGE_CONFIG = {
  priority: 0.7,
  changeFrequency: "monthly" as const,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoMetadata.siteUrl;
  const currentDate = new Date().toISOString();

  // Home page (always included)
  const homePage: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: PAGE_PRIORITIES["/"].changeFrequency,
      priority: PAGE_PRIORITIES["/"].priority,
    },
  ];

  // Dynamic pages from navigation - automatically includes new pages
  const navPages: MetadataRoute.Sitemap = NAV_ITEMS.filter(
    (item) => !item.external && !item.disabled,
  ) // Exclude external links and disabled pages
    .map((item) => {
      const config = PAGE_PRIORITIES[item.href] || DEFAULT_PAGE_CONFIG;
      return {
        url: `${baseUrl}${item.href}`,
        lastModified: currentDate,
        changeFrequency: config.changeFrequency,
        priority: config.priority,
      };
    });

  // Dynamic project pages with individual priorities
  const projects = projectsData as Project[];
  const projectPages: MetadataRoute.Sitemap = projects.map(
    (project, index) => ({
      url: `${baseUrl}/project/${project.slug}`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      // Higher priority for first few projects (featured)
      priority: index < 3 ? 0.7 : 0.6,
    }),
  );

  return [...homePage, ...navPages, ...projectPages];
}
