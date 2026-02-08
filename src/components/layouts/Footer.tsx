import React from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
  Heart,
} from "lucide-react";
import "./footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Left: Copyright */}
          <div className="footer-copyright">
            <p>© {currentYear} Dinesh Bajgain. All rights reserved.</p>
          </div>

          {/* Right: Social Links */}
          <div className="footer-socials">
            <a
              href="https://github.com/dinesh-bajgain-dev"
              target="_blank"
              rel="noopener noreferrer me"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/dinesh-bajgain"
              target="_blank"
              rel="noopener noreferrer me"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://instagram.com/mr.bajgain"
              target="_blank"
              rel="noopener noreferrer me"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com/mr.bajgain"
              target="_blank"
              rel="noopener noreferrer me"
              className="footer-social-link"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com/dinesh__bajgain"
              target="_blank"
              rel="noopener noreferrer me"
              className="footer-social-link"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
