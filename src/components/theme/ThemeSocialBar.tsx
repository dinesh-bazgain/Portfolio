"use client";

import React, { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Sun,
  Moon,
  Twitter,
} from "lucide-react";
import { useTheme } from "next-themes";
import "../../app/home/home.css";

type ThemeSocialBarProps = {
  hideOnMobileMenu?: boolean;
};

const ThemeSocialBar = ({ hideOnMobileMenu = false }: ThemeSocialBarProps) => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div
      className={`theme-social-bar ${
        hideOnMobileMenu ? "hide-on-mobile-menu" : ""
      }`}
    >
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="social-icon-btn"
        aria-label="Toggle Theme"
      >
        {resolvedTheme === "dark" ? <Sun size={35} /> : <Moon size={35} />}
      </button>

      {/* Separator */}
      <div className="social-separator"></div>

      {/* Social Links */}
      <div className="social-links-row">
        <a
          href="https://github.com/dinesh-bazgain"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <Github size={35} />
        </a>
        <a
          href="https://instagram.com/mr.bajgain"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <Instagram size={35} />
        </a>
        <a
          href="https://www.linkedin.com/in/mr-bajgain/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <Linkedin size={35} />
        </a>
        <a
          href="https://facebook.com/mr.bajgain"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <Facebook size={35} />
        </a>
        <a
          href="https://x.com/Mr_Bajgain"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-link"
        >
          <Twitter size={35} />
        </a>
      </div>
    </div>
  );
};

export default ThemeSocialBar;
