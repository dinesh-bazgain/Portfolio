import React from "react";
import { notFound } from "next/navigation";
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

const projects = projectsData as Project[];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
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
