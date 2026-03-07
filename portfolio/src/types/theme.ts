/**
 * Theme type definitions for the portfolio
 * Defines the structure for design tokens and theme configurations
 */

// ============================================
// THEME NAMES (using const for erasableSyntaxOnly compatibility)
// ============================================
export const ThemeName = {
  OCEAN_WHITE: 'ocean-white',
  DEEP_SPACE: 'deep-space',
  EDITORIAL_BEIGE: 'editorial-beige',
  MIDNIGHT_GLASS: 'midnight-glass',
} as const;

export type ThemeNameType = typeof ThemeName[keyof typeof ThemeName];

// ============================================
// DESIGN TOKENS
// ============================================
export interface ColorTokens {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  textMuted: string;
  border: string;
  shadow: string;
}

export interface TypographyTokens {
  fontFamily: {
    heading: string;
    body: string;
  };
  fontSize: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
  };
  fontWeight: {
    light: number;
    normal: number;
    medium: number;
    semibold: number;
    bold: number;
  };
  lineHeight: {
    tight: number;
    normal: number;
    relaxed: number;
  };
}

export interface SpacingTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
}

export interface BreakpointTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface AnimationTokens {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  easing: {
    default: string;
    smooth: string;
    bounce: string;
  };
}

export interface LayoutTokens {
  maxWidth: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
  containerPadding: string;
  sectionPadding: string;
}

// ============================================
// COMPLETE THEME CONFIGURATION
// ============================================
export interface ThemeConfig {
  name: ThemeNameType;
  displayName: string;
  colors: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  breakpoints: BreakpointTokens;
  animation: AnimationTokens;
  layout: LayoutTokens;
  glassmorphism?: {
    enabled: boolean;
    blur: string;
    opacity: number;
  };
  sidebar?: {
    enabled: boolean;
    position: 'left' | 'right';
  };
}

// ============================================
// THEME CONTEXT TYPES
// ============================================
export interface ThemeContextType {
  currentTheme: ThemeConfig;
  setTheme: (theme: ThemeNameType) => void;
  availableThemes: ThemeNameType[];
  isDark: boolean;
}
