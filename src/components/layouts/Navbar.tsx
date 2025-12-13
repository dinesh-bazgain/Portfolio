"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./navbar.css";
import { NAV_ITEMS } from "@/data/navigation";

interface NavbarProps {
  onNavClick?: (id: string) => void;
  onMenuToggle?: (isOpen: boolean) => void;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

const Navbar = ({ onNavClick, onMenuToggle, orientation = "horizontal", className = "" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    if (onMenuToggle) onMenuToggle(newState);
  };

  const navLinks = orientation === "vertical"
    ? NAV_ITEMS
    : NAV_ITEMS.filter(item => !item.disabled && ['home', 'skills', 'projects', 'contact'].includes(item.id));

  // Render Vertical Layout (Sidebar)
  if (orientation === "vertical") {
    return (
      <>
        {/* Mobile Hamburger (Visible only on mobile via CSS) */}
        <button
          className="navbar-vertical-toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Vertical Nav (Always visible on desktop, toggled on mobile) */}
        <nav className={`navbar-vertical ${className} ${isOpen ? 'open' : ''}`}>
          {navLinks.map((item) => (
            <span
              key={item.id}
              onClick={
                item.disabled
                  ? undefined
                  : () => {
                    if (onNavClick) onNavClick(item.id);
                    setIsOpen(false); // Close menu on click
                    if (onMenuToggle) onMenuToggle(false);
                  }
              }
              className="nav-link"
              style={item.disabled ? { opacity: 0.5, cursor: "not-allowed" } : {}}
            >
              {item.label}
            </span>
          ))}
        </nav>
      </>
    );
  }

  // Render Horizontal Layout (Default Top Nav)
  return (
    <nav className={`navbar-container ${className}`}>
      <div className="navbar-inner">
        <div className="navbar-logo">
          <Image src="/icon.png" alt="Logo" width={40} height={40} />
          <span className="navbar-title">Dinesh Bajgain</span>
        </div>

        {/* Desktop Links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} className="navbar-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="navbar-mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="navbar-mobile-link"
              onClick={toggleMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
