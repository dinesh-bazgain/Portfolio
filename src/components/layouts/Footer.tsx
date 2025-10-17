import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-6 mt-8">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-gray-600">
        <div className="mb-2 md:mb-0 text-center md:text-left">
          &copy; {new Date().getFullYear()} Dinesh Bajgain. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a
            href="https://github.com/dinesh-bazgain"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mr-bajgain/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:dinesh.bazgain@example.com"
            className="hover:text-blue-600 transition"
          >
            E-mail
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
