/**
 * Theme 4: Midnight Glass
 * Dark modern background with glassmorphism cards and neon cyan accent
 */
import type { ThemeConfig } from '../types/theme';
import { ThemeName } from '../types/theme';

export const midnightGlassTheme: ThemeConfig = {
  name: ThemeName.MIDNIGHT_GLASS,
  displayName: 'Midnight Glass',
  colors: {
    primary: '#06B6D4', // Neon cyan
    secondary: '#1E293B', // Dark slate
    accent: '#22D3EE', // Bright cyan
    background: '#0F172A', // Midnight blue
    surface: '#1E293B', // Dark slate surface
    text: '#F1F5F9', // Light gray text
    textMuted: '#94A3B8', // Muted gray
    border: '#334155', // Dark border
    shadow: 'rgba(6, 182, 212, 0.3)',
  },
  typography: {
    fontFamily: {
      heading: '"Inter", system-ui, sans-serif',
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
    enabled: true,
    blur: '12px',
    opacity: 0.7,
  },
  sidebar: {
    enabled: false,
    position: 'left',
  },
};
