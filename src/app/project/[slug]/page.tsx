import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import seoMetadata from "@/data/seometadata.json";
import "../project.css";

import projectsData from "../../../data/projects.json";

type Project = {
  title: string;
  description: string;
  features: string[];
  demo: string;
  subTitle: string;
  slug: string;
  external: string | null;
};

const projects = projectsData as unknown as Project[];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    };
  }

  const title = `${project.title} | Dinesh Bajgain Projects`;
  const description = project.description || project.subTitle;

  return {
    title,
    description,
    keywords: [
      project.title,
      "Dinesh Bajgain",
      "Project",
      "Portfolio",
      ...project.features.slice(0, 3),
    ],
    alternates: {
      canonical: `/project/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${seoMetadata.siteUrl}/project/${slug}`,
      type: "article",
      images: [
        {
          url: seoMetadata.ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} - Dinesh Bajgain`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [seoMetadata.ogImage],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound(); // Show 404 if project not found
  }

  return (
    <main className="project-details-container">
      <h1 className="project-title">{project.title}</h1>
      <h2 className="project-subtitle">{project.subTitle}</h2>
      <p className="project-description">{project.description}</p>
      <ul className="project-features">
        {project.features.map((feature: string, idx: number) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="project-demo-btn"
      >
        Live Demo
      </a>
    </main>
  );
}
