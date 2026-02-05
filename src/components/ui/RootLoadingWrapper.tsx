"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "./LoadingScreen";

interface RootLoadingWrapperProps {
  children: React.ReactNode;
}

export default function RootLoadingWrapper({
  children,
}: RootLoadingWrapperProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // Only show loading screen for the root path "/" on first visit
    if (pathname === "/" || pathname === "") {
      const hasVisited = sessionStorage.getItem("hasVisitedRoot");
      if (!hasVisited) {
        setIsLoading(true);
      }
    }
  }, [pathname]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasVisitedRoot", "true");
  };

  // Don't render anything until client-side to avoid hydration mismatch
  if (!isClient) {
    return <>{children}</>;
  }

  // Only show loading screen for root path on first visit
  if (isLoading && (pathname === "/" || pathname === "")) {
    return (
      <>
        <LoadingScreen onComplete={handleLoadingComplete} minDuration={2500} />
        <div style={{ visibility: "hidden", position: "absolute" }}>
          {children}
        </div>
      </>
    );
  }

  return <>{children}</>;
}
