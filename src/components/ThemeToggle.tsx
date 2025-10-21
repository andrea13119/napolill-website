'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        w-10 h-10 rounded-full glass hover:glass-dark transition-all duration-300
        hover:scale-110 active:scale-95 flex items-center justify-center
        focus:outline-none focus:ring-2 focus:ring-accent-rose focus:ring-offset-2
      "
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Moon className="w-5 h-5 text-accent-rose" />
      ) : (
        <Sun className="w-5 h-5 text-primary-teal" />
      )}
    </button>
  );
}
