import React from "react";
import Image from "next/image";
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
            {/* <Image src="/mark.png" alt="Signature" className="hero-mark" width={200} height={200} /> */}
            <Image
              src="/portrait.png"
              alt="Portrait of Dinesh Bajgain"
              className="hero-portrait"
              width={400}
              height={400}
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
