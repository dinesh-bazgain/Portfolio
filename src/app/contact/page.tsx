import React from "react";
import '../globals.css';
import "./contact.css";

export default function ContactPage() {
  return (
    <main className="contact-main">
      <section className="contact-section">
        <h1 className="contact-title">Contact Me</h1>
        <p className="contact-desc">
          Interested in working together, have a question, or just want to say hello? Fill out the form below or reach out directly!!
        </p>
      </section>
      <form className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-direct">
        <p className="mb-2">Or email me directly:</p>
        <a href="mailto:dineshbajgain@gmail.com">dineshbajgain@gmail.com</a>
        <div className="contact-socials">
          <a
            href="https://github.com/dinesh-bazgain"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/dineshbajgain"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
