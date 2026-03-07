/**
 * Theme registry - exports all themes and provides theme lookup utilities
 */
import { oceanWhiteTheme } from './ocean-white';
import { deepSpaceTheme } from './deep-space';
import { editorialBeigeTheme } from './editorial-beige';
import { midnightGlassTheme } from './midnight-glass';
import type { ThemeConfig, ThemeNameType } from '../types/theme';
import { ThemeName } from '../types/theme';

// ============================================
// THEME REGISTRY
// ============================================
export const themes: Record<ThemeNameType, ThemeConfig> = {
  [ThemeName.OCEAN_WHITE]: oceanWhiteTheme,
  [ThemeName.DEEP_SPACE]: deepSpaceTheme,
  [ThemeName.EDITORIAL_BEIGE]: editorialBeigeTheme,
  [ThemeName.MIDNIGHT_GLASS]: midnightGlassTheme,
};

// ============================================
// THEME UTILITIES
// ============================================

/**
 * Get a theme configuration by name
 */
export const getTheme = (name: ThemeNameType): ThemeConfig => {
  return themes[name];
};

/**
 * Get all available theme names
 */
export const getAvailableThemes = (): ThemeNameType[] => {
  return Object.keys(themes) as ThemeNameType[];
};

/**
 * Get default theme
 */
export const getDefaultTheme = (): ThemeConfig => {
  return editorialBeigeTheme;
};

/**
 * Check if a theme is dark mode
 */
export const isDarkTheme = (name: ThemeNameType): boolean => {
  const darkThemes: ThemeNameType[] = [
    ThemeName.MIDNIGHT_GLASS,
    ThemeName.DEEP_SPACE,
  ];
  return darkThemes.includes(name);
};

export { oceanWhiteTheme, deepSpaceTheme, editorialBeigeTheme, midnightGlassTheme };
