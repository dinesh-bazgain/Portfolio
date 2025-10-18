import React from "react";
import Image from "next/image";
import "./workwithme.css";

export default function WorkWithMe() {
  return (
    <main className="workwithme-container">
      <section className="workwithme-profile-section">
        <Image
          src="/profile.jpeg"
          alt="Dinesh Bajgain portrait"
          width={140}
          height={140}
          className="workwithme-profile-img"
        />
        <h1 className="workwithme-title">Work With Me</h1>
        <h2 className="workwithme-subtitle">
          Let's build something great together!
        </h2>
        <p className="workwithme-desc">
          I’m Dinesh, a full stack developer and designer who loves
          collaborating on creative projects and solving real-world problems. If
          you’re looking for a reliable partner to help bring your ideas to
          life, let’s connect!
        </p>
      </section>

      <section className="workwithme-skills-section">
        <h3 className="workwithme-skills-title">Skills</h3>
        <ul className="workwithme-skills-list">
          <li className="workwithme-skill-item">JavaScript / TypeScript</li>
          <li className="workwithme-skill-item">React / Next.js</li>
          <li className="workwithme-skill-item">Node.js / Express</li>
          <li className="workwithme-skill-item">UI/UX Design</li>
          <li className="workwithme-skill-item">Tailwind CSS</li>
          <li className="workwithme-skill-item">Figma / Adobe XD</li>
        </ul>
      </section>

      <section className="workwithme-contact-section">
        <h3 className="workwithme-contact-title">Contact</h3>
        <p className="workwithme-contact-desc">
          Interested in working together, collaborating, or just want to say
          hello? I’m always open to new opportunities and creative partnerships.
        </p>
        <div className="workwithme-contact-btn-wrapper">
          <a
            href="mailto:dineshbajgain@gmail.com"
            className="workwithme-contact-btn"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}
