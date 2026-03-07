/**
 * Theme: Deep Space
 * Deep cosmic purple background with electric accents
 * Modern dark theme with neon purple and cyan highlights
 */
import type { ThemeConfig } from '../types/theme';
import { ThemeName } from '../types/theme';

export const deepSpaceTheme: ThemeConfig = {
  name: ThemeName.DEEP_SPACE,
  displayName: 'Deep Space',
  colors: {
    primary: '#A855F7', // Electric purple
    secondary: '#6366F1', // Indigo
    accent: '#22D3EE', // Cyan
    background: '#0D0D0F', // Deep space black
    surface: '#1A1A2E', // Cosmic purple surface
    text: '#F8FAFC', // Bright white
    textMuted: '#94A3B8', // Muted gray
    border: '#2D2D44', // Purple-tinted border
    shadow: 'rgba(168, 85, 247, 0.25)',
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
    opacity: 0.8,
  },
  sidebar: {
    enabled: false,
    position: 'left',
  },
};
