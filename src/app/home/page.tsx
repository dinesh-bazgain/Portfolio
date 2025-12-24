"use client";

import React, { useState } from "react";
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import "./home.css";

// Import Section Components
import ProjectListPage from "../project/page";
import ContactPage from "../contact/page";
import WorkWithMe from "../about/page";
import Skills from "../skills/page";
import ThemeSocialBar from "@/components/theme/ThemeSocialBar";
import { NAV_ITEMS } from "@/data/navigation";
import Navbar from "@/components/layouts/Navbar";

// Define the navigation order based on valid IDs
const SECTIONS = NAV_ITEMS.filter((item) => !item.disabled).map(
  (item) => item.id
);

export default function HomePage() {
  const [currentSection, setCurrentSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle navigation
  const handleNavClick = (section: string) => {
    setCurrentSection(section);
  };

  const handleMenuToggle = (isOpen: boolean) => {
    setIsMenuOpen(isOpen);
  };

  const handleClose = () => {
    setCurrentSection("home");
  };

  // Determine indices for content sections (About is first)
  const currentIndex = SECTIONS.indexOf(currentSection);
  const firstContentIndex = 0; // 'about' is first
  const lastContentIndex = SECTIONS.length - 1; // 'contact' is last

  const isFirstSection = currentIndex === firstContentIndex;
  const isLastSection = currentIndex === lastContentIndex;

  const handleNext = () => {
    if (isLastSection) return;
    const nextIndex = currentIndex + 1;
    setCurrentSection(SECTIONS[nextIndex]);
  };

  const handlePrev = () => {
    if (isFirstSection) return;
    const prevIndex = currentIndex - 1;
    setCurrentSection(SECTIONS[prevIndex]);
  };

  // Render the active content
  const renderContent = () => {
    switch (currentSection) {
      case "projects":
        return <ProjectListPage />;
      case "contact":
        return <ContactPage />;
      case "skills":
        return <Skills />;
      case "about":
        return <WorkWithMe />;
      case "credentials":
        // Placeholder for credentials, reusing Skills for now or empty
        return (
          <div className="p-10 text-center">
            <h2>Credentials & Certifications Coming Soon</h2>
          </div>
        );
      case "resume":
        return (
          <div className="p-10 text-center">
            <h2>Resume Viewer Coming Soon</h2>
          </div>
        );
      case "testimonials":
        return (
          <div className="p-10 text-center">
            <h2>Testimonials Coming Soon</h2>
          </div>
        );
      default:
        return null; // Home or unknown
    }
  };

  return (
    <main className="home-main">
      {/* Background Home Grid (Visible when currentSection is home) */}
      <section
        className={`hero-section ${isMenuOpen ? "pushed-back" : ""}`}
        id="home"
      >
        {/* Top Right Theme/Social Bar */}
        <ThemeSocialBar hideOnMobileMenu={isMenuOpen} />

        {/* Left Content: Minimal Intro (with portrait preserved) */}
        <div className="left-container">
          <div className="hero-intro minimal">
            <h1 className="hero-title">Dinesh Bajgain</h1>
            <div className="hero-accent" aria-hidden="true" />
          </div>

          {/* Center Bottom Image (kept as requested) */}
          <div className="hero-portrait-container">
            <img src="/mark.png" alt="Signature" className="hero-mark" />
            <img src="/portrait.png" alt="Portrait" className="hero-portrait" />
          </div>
        </div>
        {/* Right Content: Vertical Navigation */}
        <div className="right-container">
          <div className="hero-navbar">
            <Navbar
              orientation="vertical"
              onNavClick={handleNavClick}
              onMenuToggle={handleMenuToggle}
              className="hero-navbar-vertical"
            />
          </div>
        </div>
      </section>

      {/* Slide Overlay (Detail View) */}
      <div
        className={`slide-overlay ${currentSection !== "home" ? "active" : ""}`}
      >
        <div className="slide-controls">
          <div className="control-group">
            <button
              onClick={handlePrev}
              className={`control-btn ${isFirstSection ? "disabled" : ""}`}
              aria-label="Previous Section"
              disabled={isFirstSection}
              style={{
                opacity: isFirstSection ? 0.3 : 1,
                cursor: isFirstSection ? "default" : "pointer",
              }}
            >
              <ArrowLeft size={32} />
            </button>
            <button
              onClick={handleNext}
              className={`control-btn ${isLastSection ? "disabled" : ""}`}
              aria-label="Next Section"
              disabled={isLastSection}
              style={{
                opacity: isLastSection ? 0.3 : 1,
                cursor: isLastSection ? "default" : "pointer",
              }}
            >
              <ArrowRight size={32} />
            </button>
          </div>

          <button
            onClick={handleClose}
            className="control-btn"
            aria-label="Close"
          >
            <X size={32} />
          </button>
        </div>

        <div className="slide-content">
          {currentSection !== "home" && renderContent()}
        </div>
      </div>
    </main>
  );
}
