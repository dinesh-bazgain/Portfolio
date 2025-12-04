import React from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import "./project.css";

import projectsData from "@/data/projects.json";

type Project = {
  title: string;
  description: string;
  features: string[];
  demo: string;
  subTitle: string;
  slug: string;
  external: string | null;
  tags: string[];
};

const projects = projectsData as Project[];

export default function ProjectListPage() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="projects-description">
            A showcase of my work in full-stack development and AI/ML
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.slug} className="project-card glass">
              <div className="project-card-content">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-description">{project.description}</p>

                {/* Tags */}
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-card-actions">
                  <a
                    href={project.external || `/project/${project.slug}`}
                    target={project.external ? "_blank" : undefined}
                    rel={project.external ? "noopener noreferrer" : undefined}
                    className="project-card-link"
                  >
                    {project.external ? (
                      <>
                        Live Demo <ExternalLink size={16} />
                      </>
                    ) : (
                      <>
                        View Details <ArrowRight size={16} />
                      </>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
