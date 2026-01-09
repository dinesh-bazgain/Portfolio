"use client";

import React from "react";
import PageNavigation from "@/components/navigation/PageNavigation";
import "./home.css";

export default function HomePage() {
  return (
    <main className="home-main">
      {/* Background Home Grid (Visible when currentSection is home) */}
      <section className={`hero-section`} id="home">
        {/* Left Content: Minimal Intro (with portrait preserved) */}
        <div className="left-container">
          <div className="hero-intro minimal">
            <h1 className="hero-title">Dinesh Bajgain</h1>
            <div className="hero-accent" aria-hidden="true" />
          </div>

          {/* Center Bottom Image (kept as requested) */}
          <div className="hero-portrait-container">
            {/* <img src="/mark.png" alt="Signature" className="hero-mark" /> */}
            <img src="/portrait.png" alt="Portrait" className="hero-portrait" />
          </div>
        </div>
      </section>

    </main>
  );
}
