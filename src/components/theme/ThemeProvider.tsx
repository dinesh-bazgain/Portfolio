"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

const STORAGE_KEY = "portfolio-theme";

// Component to sync theme with sessionStorage
function ThemeSync() {
  const { theme, setTheme } = useTheme();
  const initialized = React.useRef(false);

  React.useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      // On mount, check sessionStorage for saved theme
      const sessionTheme = sessionStorage.getItem(STORAGE_KEY);
      if (sessionTheme) {
        setTheme(sessionTheme);
      }
      // Clear localStorage to prevent next-themes from using it
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [setTheme]);

  React.useEffect(() => {
    // Sync theme changes to sessionStorage
    if (theme && initialized.current) {
      sessionStorage.setItem(STORAGE_KEY, theme);
    }
  }, [theme]);

  return null;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeSync />
      {children}
    </NextThemesProvider>
  );
}
