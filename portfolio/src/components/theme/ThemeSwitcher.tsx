/**
 * ThemeSwitcher component - Dropdown for switching between themes
 */
import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../hooks/useTheme';

// ============================================
// THEME SWITCHER COMPONENT
// ============================================
export const ThemeSwitcher: React.FC = () => {
  const { currentTheme, setTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get display name for theme
  const getThemeDisplayName = (themeName: string): string => {
    const names: Record<string, string> = {
      'ocean-white': 'Ocean White',
      'pacific-energy': 'Pacific Energy',
      'editorial-beige': 'Editorial Beige',
      'midnight-glass': 'Midnight Glass',
    };
    return names[themeName] || themeName;
  };

  // Get color indicator for theme
  const getThemeColor = (themeName: string): string => {
    const colors: Record<string, string> = {
      'ocean-white': '#2DD4BF',
      'pacific-energy': '#FCD34D',
      'editorial-beige': '#B85450',
      'midnight-glass': '#06B6D4',
    };
    return colors[themeName] || '#888888';
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg transition-colors hover:bg-[var(--color-surface)]"
        style={{ color: 'var(--color-text)' }}
      >
        {/* Theme indicator dot */}
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: getThemeColor(currentTheme.name) }}
        />
        <span className="hidden sm:inline text-sm font-medium">
          {getThemeDisplayName(currentTheme.name)}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-50 border"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="py-1">
            {availableThemes.map((theme) => (
              <button
                key={theme}
                onClick={() => {
                  setTheme(theme);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 px-4 py-2 text-left text-sm hover:bg-[var(--color-primary)] hover:bg-opacity-10 transition-colors"
                style={{ color: 'var(--color-text)' }}
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: getThemeColor(theme) }}
                />
                <span>{getThemeDisplayName(theme)}</span>
                {currentTheme.name === theme && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
