import React from "react";
import { Briefcase, Code, Zap } from "lucide-react";
import "./workwithme.css";

export default function WorkWithMe() {
  const services = [
    {
      icon: Code,
      title: "Full Stack Development",
      description:
        "Building scalable web applications with modern technologies like React, Next.js, Node.js, and databases.",
    },
    {
      icon: Zap,
      title: "AI/ML Integration",
      description:
        "Implementing intelligent features using TensorFlow, Keras, and OpenCV for computer vision and NLP tasks.",
    },
    {
      icon: Briefcase,
      title: "Consulting & Collaboration",
      description:
        "Working with teams to architect solutions, optimize performance, and solve complex technical challenges.",
    },
  ];

  return (
    <section className="work-section" id="WorkWithMe">
      <div className="work-container">
        <div className="work-header">
          <h2 className="work-title">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="work-description">
            Bringing ideas to life with cutting-edge technology and clean code
          </p>
        </div>

        <div className="work-services">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="service-card glass">
                <Icon className="service-icon" size={40} />
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="work-cta">
          <p>Ready to start a project or explore opportunities?</p>
          <a href="#contact" className="btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
