import React, { useState, MouseEvent } from "react";
import { Mail, Send } from "lucide-react";
import PageNavigation from "@/components/navigation/PageNavigation";
import "./contact.css";

export default function ContactPage() {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="contact-description">
              Have a project in mind or just want to chat? I'd love to hear from
              you!
            </p>
          </div>

          <div className="contact-content">
            {/* Contact Form */}
            <div className="contact-form-wrapper glass">
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
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
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

            {/* Direct Contact */}
            <div className="contact-direct">
              <div className="contact-direct-card glass">
                <Mail className="contact-icon" size={32} />
                <h3>Email Me Directly</h3>
                <a
                  href="mailto:dineshbajgain@gmail.com"
                  className="contact-email"
                >
                  dineshbajgain@gmail.com
                </a>
                <p className="contact-response-time">
                  I typically respond within 24-48 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PageNavigation currentPage="/contact" />
    </>
  );
}
