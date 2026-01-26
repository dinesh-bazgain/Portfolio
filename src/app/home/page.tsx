"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import LoadingScreen from "@/components/ui/LoadingScreen";
import "./home.css";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the portrait image
    const img = new window.Image();
    img.src = "/portrait.png";
    img.onload = () => setImageLoaded(true);

    // If image is already cached, it will load immediately
    if (img.complete) {
      setImageLoaded(true);
    }
  }, []);

  const handleLoadingComplete = () => {
    if (imageLoaded) {
      setIsLoading(false);
    }
  };

  // If image loads before minimum duration, loading screen handles it
  // If image takes longer, wait for both
  useEffect(() => {
    if (imageLoaded && !isLoading) {
      // Everything is ready
    }
  }, [imageLoaded, isLoading]);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={handleLoadingComplete} minDuration={2500} />
      )}
      <main className={`home-main ${isLoading ? "loading" : "loaded"}`}>
        {/* Background Home Grid (Visible when currentSection is home) */}
        <section className="hero-section" id="home">
          {/* Left Content: Minimal Intro (with portrait preserved) */}
          <div className="left-container">
            <div className="hero-intro minimal">
              <h1 className="hero-title">Dinesh Bajgain</h1>
              <div className="hero-accent" aria-hidden="true" />
            </div>

            {/* Center Bottom Image (kept as requested) */}
            <div className="hero-portrait-container">
              <Image
                src="/portrait.png"
                alt="Portrait of Dinesh Bajgain"
                className="hero-portrait"
                width={400}
                height={400}
                priority
                onLoad={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
