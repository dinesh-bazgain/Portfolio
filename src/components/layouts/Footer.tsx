import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import "./footer.css";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/dinesh-bazgain",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/mr-bajgain/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:dinesh.bazgain@example.com",
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Dinesh Bajgain. All rights reserved.
          </div>
          <div className="footer-links">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                  aria-label={link.label}
                >
                  <Icon size={20} />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
