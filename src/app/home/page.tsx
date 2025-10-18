
import React from "react";
import Image from "next/image";
import '../globals.css';
import "./home.css";

export default function HomePage() {
  return (
    <main className="home-main">
      {/* Profile Section */}
      <section className="profile-section" id="profile">
        <Image
          src="/profile.jpeg"
          alt="Dinesh Bajgain portrait"
          width={140}
          height={140}
          className="profile-img"
        />
        <h1 className="profile-title">Dinesh Bajgain</h1>
        <h2 className="profile-role">Full Stack Developer & Designer</h2>
        <p className="profile-desc">
          Hi! I'm Dinesh, a passionate developer who loves building scalable web applications and beautiful user experiences. I enjoy learning new technologies, solving real-world problems, and collaborating with creative teams.
        </p>
        <div className="profile-interests">
          <span style={{ fontWeight: 600 }}>Interests:</span> Web development, UI/UX design, open source, creative coding, and lifelong learning.
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
