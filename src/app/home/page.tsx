import React from "react";
import Image from "next/image";
import "../globals.css";
import "./home.css";

export default function HomePage() {
  return (
    <main className="home-main">
      {/* Profile Section */}
      <section className="profile-section" id="profile">
        <div className="display-picture">
          <img
            src="/DP.jpg"
            alt="Dinesh Bajgain portrait"
            className="profile-img"
          />
        </div>

        <div className="profile-text">
          <h1>Dinesh Bajgain</h1>
          <h2>Full Stack Developer | AI Enthusiast | Creative Thinker</h2>
          <p>
            Hey there 👋 I’m <strong>Dinesh</strong> — a passionate developer
            who loves blending <strong>intelligence</strong> with
            <strong>innovation</strong>. I build end-to-end web and AI-powered
            solutions that not only look great but also <em>think smart</em>.
            From crafting scalable systems to exploring neural networks, I’m
            constantly pushing the limits of what tech can do.
          </p>
          <div className="side-content">
            <p>
              My journey revolves around transforming ideas into digital reality
              — whether it’s a <strong>React + Node.js</strong> full-stack app
              or an <strong>AI model</strong> that understands, learns, and
              adapts. Every line of code I write aims to make the web more
              <strong>intelligent, accessible, and impactful.</strong>
            </p>
            <div className="profile-interests">
              <span style={{ fontWeight: 600 }}>Areas of Interest</span>
              <ul>
                <li>Artificial Intelligence</li>
                <li>Deep Learning</li>
                <li>Web Development</li>
                <li>Creative Coding</li>
                <li>Human-AI Interaction</li>
                <li>Future Tech Innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <h3 className="skills-title">Technical Arsenal</h3>
        <ul className="skills-list">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js / Express</li>
          <li>Python / TensorFlow / Keras / OpenCV</li>
          <li>MongoDB / PostgreSQL</li>
          <li>REST APIs / GraphQL</li>
        </ul>
      </section>
    </main>
  );
}
