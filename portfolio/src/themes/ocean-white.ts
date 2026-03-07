/**
 * Theme 1: Ocean White
 * White background with turquoise primary and soft gray secondary
 */
import type { ThemeConfig } from '../types/theme';
import { ThemeName } from '../types/theme';

export const oceanWhiteTheme: ThemeConfig = {
  name: ThemeName.OCEAN_WHITE,
  displayName: 'Ocean White',
  colors: {
    primary: '#2DD4BF', // Turquoise
    secondary: '#9CA3AF', // Soft gray
    accent: '#14B8A6', // Darker turquoise
    background: '#FFFFFF', // White
    surface: '#F8FAFC', // Off-white
    text: '#1E293B', // Dark slate
    textMuted: '#64748B', // Slate gray
    border: '#E2E8F0', // Light gray
    shadow: 'rgba(0, 0, 0, 0.1)',
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
    enabled: false,
    blur: '0px',
    opacity: 1,
  },
  sidebar: {
    enabled: false,
    position: 'left',
  },
};
