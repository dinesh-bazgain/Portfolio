"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Github, Linkedin, Instagram, Facebook, X, ArrowLeft, ArrowRight } from "lucide-react";
import "./home.css";

// Import Section Components
import ProjectListPage from "../project/page";
import ContactPage from "../contact/page";
import WorkWithMe from "../workWithMe/page";
import Skills from "@/components/home/Skills";

// Define the navigation order
const SECTIONS = ['home', 'about', 'resume', 'projects', 'credentials', 'skills', 'testimonials', 'contact'];

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState('home');

  // Handle navigation
  const handleNavClick = (section: string) => {
    setCurrentSection(section);
  };

  const handleClose = () => {
    setCurrentSection('home');
  };

  const handleNext = () => {
    const currentIndex = SECTIONS.indexOf(currentSection);
    const nextIndex = (currentIndex + 1) % SECTIONS.length;
    // Skip 'home' if we are cycling through details, or maybe not? 
    // Usually detail navigation cycles through details. 
    // If next is home, maybe go to first detail? 
    // Let's just cycle normally. If next is home, it closes? 
    // User said "arrow for next and prev... with cross icon to head back to homepage".
    // So arrows probably cycle between content pages.
    let nextSection = SECTIONS[nextIndex];
    if (nextSection === 'home') nextSection = SECTIONS[1]; // Skip home when cycling next
    setCurrentSection(nextSection);
  };

  const handlePrev = () => {
    const currentIndex = SECTIONS.indexOf(currentSection);
    let prevIndex = (currentIndex - 1 + SECTIONS.length) % SECTIONS.length;
    let prevSection = SECTIONS[prevIndex];
    if (prevSection === 'home') prevSection = SECTIONS[SECTIONS.length - 1]; // Skip home when cycling prev
    setCurrentSection(prevSection);
  };

  // Render the active content
  const renderContent = () => {
    switch (currentSection) {
      case 'projects':
        return <ProjectListPage />;
      case 'contact':
        return <ContactPage />;
      case 'skills':
        return <Skills />;
      case 'about':
        return <WorkWithMe />; // Using WorkWithMe as About/Services placeholder
      case 'credentials':
        // Placeholder for credentials, reusing Skills for now or empty
        return <div className="p-10 text-center"><h2>Credentials & Certifications Coming Soon</h2></div>;
      case 'resume':
        return <div className="p-10 text-center"><h2>Resume Viewer Coming Soon</h2></div>;
      case 'testimonials':
        return <div className="p-10 text-center"><h2>Testimonials Coming Soon</h2></div>;
      default:
        return null; // Home or unknown
    }
  };

  return (
    <main className="home-main">
      {/* Background Home Grid (Visible when currentSection is home) */}
      <section className="hero-section" id="home">

        {/* Top Right Icons */}
        <div className="top-right-icons">
          <a href="#" className="icon-link"><Github size={20} /></a>
          <a href="#" className="icon-link"><Instagram size={20} /></a>
          <a href="#" className="icon-link"><Linkedin size={20} /></a>
          <a href="#" className="icon-link"><Facebook size={20} /></a>
        </div>

        {/* Left Content: Intro */}
        <div className="hero-intro">
          <h1 className="hero-title">
            <span>Dinesh</span>
            <span>Bajgain</span>
          </h1>
          <h2 className="hero-subtitle">
            Full Stack Dev
          </h2>
          <p className="hero-description">
            Exceptional experiences are built on structure, empathy, and vision. I architect scalable systems and intuitive flows that connect people to technology with purpose. From global e-commerce platforms to emerging AI products, I build frameworks that feel seamless, human, and ready for the future.
          </p>
        </div>

        {/* Right Content: Vertical Navigation */}
        <nav className="hero-nav">
          {/* Map links to state changes */}
          <span onClick={() => handleNavClick('about')} className="nav-link">About</span>
          <span onClick={() => handleNavClick('resume')} className="nav-link">Resume</span>
          <span onClick={() => handleNavClick('credentials')} className="nav-link">Credentials</span>
          <span onClick={() => handleNavClick('projects')} className="nav-link">Projects</span>
          <span onClick={() => handleNavClick('skills')} className="nav-link">Skills</span>
          <span onClick={() => handleNavClick('testimonials')} className="nav-link">Testimonials</span>
          <span onClick={() => handleNavClick('contact')} className="nav-link">Contact</span>

          {/* Disabled links */}
          <span className="nav-link" style={{ opacity: 0.5, cursor: 'not-allowed' }}>Design Systems</span>
          <span className="nav-link" style={{ opacity: 0.5, cursor: 'not-allowed' }}>Figma Templates</span>
          <span className="nav-link" style={{ opacity: 0.5, cursor: 'not-allowed' }}>Interaction Design</span>
        </nav>

        {/* Center Bottom Image */}
        <div className="hero-portrait-container">
          <img
            src="/DP.jpg"
            alt="Dinesh Bajgain Portrait"
            className="hero-portrait"
          />
        </div>
      </section>

      {/* Slide Overlay (Detail View) */}
      <div className={`slide-overlay ${currentSection !== 'home' ? 'active' : ''}`}>
        <div className="slide-controls">
          <div className="control-group">
            <button onClick={handlePrev} className="control-btn" aria-label="Previous Section">
              <ArrowLeft size={32} />
            </button>
            <button onClick={handleNext} className="control-btn" aria-label="Next Section">
              <ArrowRight size={32} />
            </button>
          </div>

          <button onClick={handleClose} className="control-btn" aria-label="Close">
            <X size={32} />
          </button>
        </div>

        <div className="slide-content">
          {currentSection !== 'home' && renderContent()}
        </div>
      </div>
    </main>
  );
}
