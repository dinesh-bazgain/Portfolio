import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-inner">
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Dinesh Bajgain. All rights reserved.
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/dinesh-bazgain"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mr-bajgain/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            LinkedIn
          </a>
          <a href="mailto:dinesh.bazgain@example.com" className="footer-link">
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
