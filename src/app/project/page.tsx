import React from "react";
import "../globals.css";
import "./project.css";

import projectsData from "../../data/projects.json";

const projects = projectsData;

export default function ProjectListPage() {
  return (
    <main className="project-section">
      <h1 className="project-list-title">All Projects</h1>
      <ul className="project-cards">
        {projects.map((project) => (
          <li key={project.slug} className="project-card">
            <h2 className="project-card-title">{project.title}</h2>
            <p className="project-card-desc">{project.description}</p>
            <a
              href={
                project.external ? project.external : `/project/${project.slug}`
              }
              target={project.external ? "_blank" : undefined}
              rel={project.external ? "noopener noreferrer" : undefined}
              className="project-card-link"
            >
              {project.external ? "Visit Project" : "View Details"}
            </a>
          </li>
        ))}
      </ul>
      <div className="project-list-note">
        <p>
          Each project links to a unique URL like{" "}
          <code>/project/project-one</code> using the slug. The slug is a
          dynamic part of the route handled by the <code>[slug]</code> folder.
        </p>
      </div>
    </main>
  );
}
