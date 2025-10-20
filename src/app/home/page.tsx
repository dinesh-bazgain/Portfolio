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
          <h2>Full Stack Developer & Designer</h2>
          <p>
            Hi! I'm Dinesh, a passionate developer who loves building scalable
            web applications and beautiful user experiences. I enjoy learning
            new technologies, solving real-world problems, and collaborating
            with creative teams.
          </p>
          <div className="profile-interests">
            <span style={{ fontWeight: 600 }}>Interests:</span> Web development,
            UI/UX design, open source, creative coding, and lifelong learning.
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section" id="skills">
        <h3 className="skills-title">Skills</h3>
        <ul className="skills-list">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
          <li>MongoDB</li>
          <li>REST APIs</li>
        </ul>
      </section>
    </main>
  );
}
