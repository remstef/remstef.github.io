"use client";

import {
  defaultDarkTheme,
  defaultLightTheme,
  defaultTheme,
} from "@/lib/constants";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = string | null;

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (newTheme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // Check localStorage for the saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      toggleTheme(savedTheme);
    } else {
      // Fall back to system preference or default
      if (defaultTheme != null) {
        toggleTheme(defaultTheme);
      } else {
        const userPrefersDarkTheme = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        if (userPrefersDarkTheme) {
          toggleTheme(defaultDarkTheme);
        } else {
          toggleTheme(defaultLightTheme);
        }
      }
    }
  }, []);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
