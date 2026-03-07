/**
 * useTheme hook - Custom hook for accessing theme context
 */
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import type { ThemeContextType } from '../types/theme';

/**
 * Custom hook to access the theme context
 * @returns ThemeContextType containing current theme, setTheme function, available themes, and isDark flag
 * @throws Error if used outside of ThemeProvider
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};
