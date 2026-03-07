/**
 * Theme 3: Editorial Beige
 * Minimal fashion layout inspired
 * Beige background, soft brown typography, muted red accent, vertical sidebar option
 */
import type { ThemeConfig } from '../types/theme';
import { ThemeName } from '../types/theme';

export const editorialBeigeTheme: ThemeConfig = {
  name: ThemeName.EDITORIAL_BEIGE,
  displayName: 'Editorial Beige',
  colors: {
    primary: '#8B7355', // Soft brown
    secondary: '#A0937D', // Lighter brown
    accent: '#B85450', // Muted red
    background: '#F5F0E6', // Beige
    surface: '#EDE8DC', // Darker beige
    text: '#4A3F35', // Dark brown text
    textMuted: '#7D6B5D', // Muted brown
    border: '#D4C4A8', // Tan border
    shadow: 'rgba(74, 63, 53, 0.15)',
  },
  typography: {
    fontFamily: {
      heading: '"Playfair Display", "Times New Roman", serif',
      body: '"Inter", system-ui, sans-serif',
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.75,
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem',
    '4xl': '8rem',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      default: 'ease',
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
  },
  layout: {
    maxWidth: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    containerPadding: '1rem',
    sectionPadding: '6rem',
  },
  glassmorphism: {
    enabled: false,
    blur: '0px',
    opacity: 1,
  },
  sidebar: {
    enabled: true,
    position: 'left',
  },
};
