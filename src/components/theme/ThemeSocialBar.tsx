"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, Facebook, Sun, Moon } from "lucide-react";
import "../../app/home/home.css";

const ThemeSocialBar = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        // Check initial theme
        if (document.body.classList.contains("dark-theme")) {
            setTheme("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.body.classList.toggle("dark-theme");
    };

    return (
        <div className="theme-social-bar">
            {/* Theme Toggle */}
            <button
                onClick={toggleTheme}
                className="social-icon-btn"
                aria-label="Toggle Theme"
            >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Separator */}
            <div className="social-separator"></div>

            {/* Social Links */}
            <div className="social-links-row">
                <a href="https://github.com/dineshbazgain" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <Github size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <Instagram size={20} />
                </a>
                <a href="https://linkedin.com/in/dineshbazgain" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <Linkedin size={20} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                    <Facebook size={20} />
                </a>
            </div>
        </div>
    );
};

export default ThemeSocialBar;
