'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const THEME_VERSION = '2.0'; // Neue Version nach CSS-Fix
    const savedVersion = localStorage.getItem('napolill-theme-version');
    
    if (savedVersion !== THEME_VERSION) {
      // Old theme data, clear it
      localStorage.removeItem('napolill-theme');
      localStorage.setItem('napolill-theme-version', THEME_VERSION);
      setTheme('dark'); // Reset to default DARK
    } else {
      // Load saved theme
      const savedTheme = localStorage.getItem('napolill-theme') as Theme;
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    
    // AUCH die .dark Klasse setzen für Tailwind
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    localStorage.setItem('napolill-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
