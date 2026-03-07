/**
 * ThemeContext - Provides theme state and switching functionality
 */
import React, { createContext, useState, useCallback, useMemo, useEffect } from 'react';
import type { ThemeConfig, ThemeNameType, ThemeContextType } from '../types/theme';
import { ThemeName } from '../types/theme';
import { themes, getDefaultTheme, isDarkTheme, getAvailableThemes } from '../themes';

// ============================================
// CONTEXT CREATION
// ============================================
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ============================================
// PROVIDER PROPS
// ============================================
interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: ThemeNameType;
}

// ============================================
// THEME PROVIDER COMPONENT
// ============================================
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ 
  children, 
  initialTheme 
}) => {
  // Initialize theme from localStorage or prop
  const [currentThemeName, setCurrentThemeName] = useState<ThemeNameType>(() => {
    if (initialTheme) return initialTheme;
    
    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeNameType | null;
    if (savedTheme && Object.values(ThemeName).includes(savedTheme)) {
      return savedTheme;
    }
    
    return ThemeName.EDITORIAL_BEIGE;
  });

  // Get current theme configuration
  const currentTheme = useMemo((): ThemeConfig => {
    return themes[currentThemeName] || getDefaultTheme();
  }, [currentThemeName]);

  // Check if current theme is dark
  const isDark = useMemo((): boolean => {
    return isDarkTheme(currentThemeName);
  }, [currentThemeName]);

  // Get available themes
  const availableThemes = useMemo((): ThemeNameType[] => {
    return getAvailableThemes();
  }, []);

  // Theme setter function
  const setTheme = useCallback((theme: ThemeNameType): void => {
    if (Object.values(ThemeName).includes(theme)) {
      setCurrentThemeName(theme);
      localStorage.setItem('portfolio-theme', theme);
    }
  }, []);

  // Apply theme to document body for CSS variable support
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply CSS variables for theme colors
    root.style.setProperty('--color-primary', currentTheme.colors.primary);
    root.style.setProperty('--color-secondary', currentTheme.colors.secondary);
    root.style.setProperty('--color-accent', currentTheme.colors.accent);
    root.style.setProperty('--color-background', currentTheme.colors.background);
    root.style.setProperty('--color-surface', currentTheme.colors.surface);
    root.style.setProperty('--color-text', currentTheme.colors.text);
    root.style.setProperty('--color-text-muted', currentTheme.colors.textMuted);
    root.style.setProperty('--color-border', currentTheme.colors.border);
    root.style.setProperty('--color-shadow', currentTheme.colors.shadow);
    
    // Apply background color to body
    document.body.style.backgroundColor = currentTheme.colors.background;
    document.body.style.color = currentTheme.colors.text;
    
    // Apply font family
    root.style.setProperty('--font-heading', currentTheme.typography.fontFamily.heading);
    root.style.setProperty('--font-body', currentTheme.typography.fontFamily.body);
  }, [currentTheme]);

  // Context value
  const contextValue = useMemo((): ThemeContextType => ({
    currentTheme,
    setTheme,
    availableThemes,
    isDark,
  }), [currentTheme, setTheme, availableThemes, isDark]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
