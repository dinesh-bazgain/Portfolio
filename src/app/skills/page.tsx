import React from "react";
import Image from "next/image";
import PageNavigation from "@/components/navigation/PageNavigation";
import skills from "@/data/skills.json";
import "./Skills.css";

export default function Skills() {
  return (
    <>
      <section className="skills-section" id="skills">
        <div className="skills-container">
          <h1 className="skills-main-title">Technical Skills</h1>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={index} className="skill-category-card">
                <div className="category-header">
                  <h2 className="category-title">{category}</h2>
                  <div className="category-accent"></div>
                </div>
                <div className="skills-items-grid">
                  {items.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-icon-wrapper">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={60}
                          height={60}
                          className="skill-icon-img"
                        />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <PageNavigation currentPage="/skills" />
      </section>
    </>
  );
}
