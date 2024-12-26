"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  attribute?: 'class' | 'data-theme';
  defaultTheme?: string;
  enableSystem?: boolean;
  disableTransitionOnChange?: boolean;
};

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force dark mode on initial load
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
} 