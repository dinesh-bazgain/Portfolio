import React from "react";
import Image from "next/image";
import Skills from "@/components/home/Skills";
import "./home.css";

export default function HomePage() {
  return (
    <main className="home-main">
      {/* Hero Section */}
      <section className="hero-section" id="profile">
        <div className="hero-content">
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img
                src="/DP.jpg"
                alt="Dinesh Bajgain portrait"
                className="hero-image"
              />
            </div>
          </div>

          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Dinesh Bajgain</span>
            </h1>
            <h2 className="hero-subtitle">
              Full Stack Developer · AI/ML Enthusiast · Problem Solver
            </h2>
            <p className="hero-description">
              I build <strong>intelligent web applications</strong> that merge cutting-edge AI with seamless user experiences.
              From architecting scalable full-stack systems to training neural networks,
              I transform complex problems into elegant solutions.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Animated Background */}
        <div className="hero-bg-gradient"></div>
      </section>

      {/* Skills Section */}
      <Skills />
    </main>
  );
}
