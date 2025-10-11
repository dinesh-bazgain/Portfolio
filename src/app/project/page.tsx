import React from "react";
import Link from "next/link";

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
  },
  {
    title: "Currency Converter",
    slug: "currency-converter",
    description: "A currency converter tool built with React.",
  },
];

export default function ProjectListPage() {
  return (
    <main className="max-w-3xl mx-auto py-16 px-4 text-gray-900">
      <h1 className="text-4xl font-bold mb-8 text-center">All Projects</h1>
      <ul className="space-y-6">
        {projects.map((project) => (
          <li key={project.slug} className="bg-gray-50 rounded shadow p-6">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-700 mb-2">{project.description}</p>
            {project.external ? (
              <a
                href={project.external}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Project
              </a>
            ) : (
              <Link
                href={`/project/${project.slug}`}
                className="text-blue-600 hover:underline"
              >
                View Details
              </Link>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-10 text-center text-gray-500 text-sm">
        <p>
          Each project links to a unique URL like{" "}
          <code>/project/project-one</code> using the slug. The slug is a
          dynamic part of the route handled by the <code>[slug]</code> folder.
        </p>
      </div>
    </main>
  );
}
