import React from "react";
import "../globals.css";
import "./project.css";

const projects = [
  {
    title: "Veda Samvaad",
    slug: "veda-samvaad",
    description: "A platform for Vedic discussions and resources.",
    external: "https://vedasamvaad-frontend.onrender.com/",
  },
  {
    title: "BMI Calculator",
    slug: "bmi-calculator",
    description: "A simple BMI calculator web app.",
    external: undefined,
  },
  {
    title: "Currency Converter",
    slug: "currency-converter",
    description: "A currency converter tool built with React.",
    external: undefined,
  },
];

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
