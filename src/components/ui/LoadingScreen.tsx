"use client";

import React, { useState, useEffect } from "react";
import "./LoadingScreen.css";

const loadingMessages = [
  "Compiling code...",
  "Charging social batteries...",
  "Brewing creativity...",
  "Polishing pixels...",
  "Loading awesomeness...",
  "Crafting experiences...",
  "Initializing magic...",
];

interface LoadingScreenProps {
  onComplete?: () => void;
  minDuration?: number;
}

export default function LoadingScreen({
  onComplete,
  minDuration = 2000,
}: LoadingScreenProps) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Rotate messages
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 500);

    // Minimum display duration
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setShowLoader(false);
        onComplete?.();
      }, 600);
    }, minDuration);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(exitTimer);
    };
  }, [minDuration, onComplete]);

  if (!showLoader) return null;

  return (
    <div className={`loading-screen ${isExiting ? "exiting" : ""}`}>
      <div className="loading-content">
        {/* Animated dots */}
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        {/* Main headline */}
        <h1 className="loading-headline">Great design is worth the wait</h1>

        {/* Rotating messages */}
        <p className="loading-message" key={currentMessageIndex}>
          {loadingMessages[currentMessageIndex]}
        </p>
      </div>

      {/* Subtle background gradient animation */}
      <div className="loading-bg-gradient"></div>
    </div>
  );
}
