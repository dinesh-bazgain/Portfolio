import React from "react";
import { Code2, Cpu, Database, Globe, Sparkles, Terminal } from "lucide-react";
import PageNavigation from "@/components/navigation/PageNavigation";
import "./Skills.css";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            icon: Globe,
            skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
        },
        {
            title: "Backend Development",
            icon: Terminal,
            skills: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL"],
        },
        {
            title: "AI & Machine Learning",
            icon: Cpu,
            skills: ["Python", "TensorFlow", "Keras", "OpenCV", "Scikit-learn"],
        },
        {
            title: "Database & Tools",
            icon: Database,
            skills: ["MongoDB", "PostgreSQL", "Git", "Docker", "AWS"],
        },
        {
            title: "Languages",
            icon: Code2,
            skills: ["JavaScript/TypeScript", "Python", "SQL", "C++"],
        },
        {
            title: "Specializations",
            icon: Sparkles,
            skills: ["Full Stack", "Deep Learning", "Computer Vision", "NLP", "DevOps"],
        },
    ];

    return (
        <>
            <section className="skills-section" id="skills">
                <div className="skills-container">
                    <div className="skills-header">
                        <h2 className="skills-title">
                            Technical <span className="text-gradient">Arsenal</span>
                        </h2>
                        <p className="skills-description">
                            A comprehensive toolkit for building intelligent, scalable applications
                        </p>
                    </div>

                    <div className="skills-grid">
                        {skillCategories.map((category, index) => {
                            const Icon = category.icon;
                            return (
                                <div key={index} className="skill-card glass">
                                    <div className="skill-card-header">
                                        <Icon className="skill-icon" size={28} />
                                        <h3 className="skill-category-title">{category.title}</h3>
                                    </div>
                                    <ul className="skill-list">
                                        {category.skills.map((skill, idx) => (
                                            <li key={idx} className="skill-item">
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <PageNavigation currentPage="/skills" />
        </>
    );
}
