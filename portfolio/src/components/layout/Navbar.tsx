/**
 * Navbar component - Main navigation with theme switcher
 */
import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { ThemeSwitcher } from '../theme/ThemeSwitcher';
import { navigationData } from '../../data/portfolioData';

// ============================================
// NAVBAR COMPONENT
// ============================================
export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'backdrop-blur-md shadow-md border-[var(--color-border)]'
          : 'border-transparent shadow-none'
      }`}
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <Container>
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex flex-col leading-tight min-w-0 max-w-[55vw] sm:max-w-none"
          >
            <span
              className="text-base sm:text-lg md:text-xl font-bold tracking-tight truncate"
              style={{ color: 'var(--color-primary)' }}
            >
              {navigationData.brandName}
            </span>
            <span
              className="hidden sm:block text-xs md:text-sm font-medium truncate"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {navigationData.brandSubtitle}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationData.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: 'var(--color-text)' }}
              >
                {link.label}
              </a>
            ))}
            <ThemeSwitcher />
          </div>

          {/* Mobile Menu Button with Animation */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg transition-colors relative w-10 h-10"
              style={{ color: 'var(--color-text)' }}
              aria-label="Toggle menu"
            >
              {/* Hamburger Icon */}
              <span
                className={`absolute left-1/2 top-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5'
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute left-1/2 top-1/2 w-5 h-0.5 bg-current transform -translate-x-1/2 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1.5'
                }`}
              />
            </button>
          </div>
        </nav>

        {/* Mobile Menu with Slide-in Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div
            className="py-4 border-t transform transition-transform duration-300"
            style={{
              backgroundColor: 'var(--color-background)',
              borderColor: 'var(--color-border)',
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(-10px)',
            }}
          >
            <div className="flex flex-col gap-2">
              {navigationData.links.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium px-4 py-3 rounded-lg transition-all duration-200 hover:bg-[var(--color-surface)] hover:pl-6"
                  style={{ 
                    color: 'var(--color-text)',
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transitionDelay: `${index * 50}ms`,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};
