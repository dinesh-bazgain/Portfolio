import React from "react";
import { notFound } from "next/navigation";

type Project = {
  title: string;
  description: string;
  features: string[];
  demo: string;
};

type ProjectsMap = {
  [key: string]: Project;
};

// type PageProps = {
//   params: { slug: string };
// };

// Example project data
const projects: ProjectsMap = {
  "currency-converter": {
    title: "Currency Converter",
    description:
      "A simple and intuitive web application for real-time currency conversion.",
    features: [
      "Real-time conversion",
      "User-friendly design",
      "Responsive layout",
      "Powered by public exchange rate APIs",
    ],
    demo: "https://dinesh-bazgain.github.io/Currency-Converter/",
  },
  "veda-samvaad": {
    title: "Veda Samvaad",
    description: "A platform for Vedic discussions and resources.",
    features: ["Community discussions", "Resource sharing", "Modern UI"],
    demo: "https://vedasamvaad-frontend.onrender.com/",
  },
  "bmi-calculator": {
    title: "BMI Calculator",
    description: "A simple BMI calculator web app.",
    features: ["Easy BMI calculation", "Clean interface", "Mobile friendly"],
    demo: "https://bmi-calculator-by-mrbajgain.netlify.app/",
  },
  // Add more projects here
};

export default function ProjectSlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project: Project | undefined = projects[slug];

  if (!project) {
    notFound(); // Show 404 if project not found
  }

  return (
    <main className="max-w-2xl mx-auto py-16 px-4 text-gray-900">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg mb-4">{project.description}</p>
      <ul className="list-disc pl-6 mb-4">
        {project.features.map((feature: string, idx: number) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition"
      >
        Live Demo
      </a>
    </main>
  );
}
