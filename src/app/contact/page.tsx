import React from "react";
import {
  Mail,
  Send,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import PageNavigation from "@/components/navigation/PageNavigation";
import "./contact.css";

export default function ContactPage() {
  return (
    <main className="contact-main">
      <section className="contact-section" id="contact">
        <div className="contact-container">
          {/* Header */}
          <div className="contact-header">
            <span className="contact-greeting">Get in Touch</span>
            <h1 className="contact-title">Let's Work Together</h1>
            <p className="contact-subtitle">
              Have a project in mind or just want to connect?
              Let’s talk.
            </p>
          </div>

          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>
                <button type="submit" className="btn-submit">
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="contact-info">
              <a
                href="mailto:dinesh.bazgain@gmail.com"
                className="info-card clickable"
              >
                <Mail className="info-icon" size={20} />
                <div className="info-content">
                  <h3>Email</h3>
                  <span>dinesh.bazgain@gmail.com</span>
                </div>
              </a>
              <div className="info-card">
                <MapPin className="info-icon" size={20} />
                <div className="info-content">
                  <h3>Location</h3>
                  <span>Available for remote work worldwide</span>
                </div>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/dinesh-bazgain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github size={35} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mr-bajgain/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin size={35} />
                </a>
                <a
                  href="https://x.com/Mr_Bajgain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Twitter size={35} />
                </a>
                <a
                  href="https://instagram.com/mr.bajgain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Instagram size={35} />
                </a>
                <a
                  href="https://facebook.com/mr.bajgain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Facebook size={35} />
                </a>
              </div>

              <p className="response-note">
                I typically respond within 24-48 hours
              </p>
            </div>
          </div>
        </div>
      </section>
      <PageNavigation currentPage="/contact" />
    </main>
  );
}
