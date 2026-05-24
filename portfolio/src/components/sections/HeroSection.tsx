/**
 * Hero Section - Split screen layout with particle background and resume download
 */
import React from 'react';
import { Container } from '../ui/Container';
import { PrimaryButton } from '../ui/PrimaryButton';
import { SecondaryButton } from '../ui/SecondaryButton';
import { ParticleBackground } from '../effects/ParticleBackground';
import { heroData } from '../../data/portfolioData';

// ============================================
// HERO SECTION COMPONENT
// ============================================
export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-0 lg:min-h-screen flex items-center pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-20 lg:pb-16 overflow-hidden scroll-mt-20"
    >
      {/* Particle Background — behind content, no scroll fade */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <ParticleBackground />
      </div>

      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(135deg, var(--color-background) 0%, var(--color-surface) 100%)',
        }}
      />

      {/* Decorative blurs — desktop only */}
      <div
        className="hidden lg:block absolute top-20 right-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: 'var(--color-primary)' }}
      />
      <div
        className="hidden lg:block absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: 'var(--color-accent)' }}
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Content — always first on mobile */}
          <div className="order-1 relative z-10">
            <p className="hero-fade-in text-base sm:text-lg md:text-xl mb-3 sm:mb-4 font-medium text-[var(--color-primary)]">
              {heroData.greeting}
            </p>

            <h1 className="hero-fade-in hero-fade-in-delay-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 tracking-tight text-[var(--color-text)]">
              {heroData.name}
            </h1>

            <div className="hero-fade-in hero-fade-in-delay-2 mb-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[var(--color-primary)]">
                {heroData.role}
              </p>
              <p className="text-base sm:text-lg md:text-xl mt-1 text-[var(--color-text-muted)]">
                {heroData.niche}
              </p>
            </div>

            <div className="hero-fade-in hero-fade-in-delay-2 flex flex-wrap items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
              {heroData.profileLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] px-1 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {link.label === 'GitHub' ? (
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                  {link.label}
                </a>
              ))}
            </div>

            <p className="hero-fade-in hero-fade-in-delay-3 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-lg leading-relaxed text-[var(--color-text)]">
              {heroData.intro}
            </p>

            <div className="hero-fade-in hero-fade-in-delay-4 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 w-full sm:w-auto">
              <PrimaryButton
                href={heroData.ctaButtons.primary.href}
                className="w-full sm:w-auto min-h-[44px] justify-center"
              >
                {heroData.ctaButtons.primary.label}
              </PrimaryButton>
              <SecondaryButton
                href={heroData.ctaButtons.secondary.href}
                className="w-full sm:w-auto min-h-[44px] justify-center"
              >
                {heroData.ctaButtons.secondary.label}
              </SecondaryButton>
            </div>

            <a
              href={heroData.resumeUrl}
              download
              className="hero-fade-in hero-fade-in-delay-5 inline-flex items-center gap-2 min-h-[44px] text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group"
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
            </a>
          </div>

          {/* Profile card — below content on mobile */}
          <div className="order-2 relative z-10 w-full max-w-md mx-auto lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div
                className="flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)',
                }}
              >
                <div className="text-center text-white p-6 sm:p-8 md:p-12 w-full">
                  <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold mb-1">{heroData.role}</p>
                  <p className="text-base sm:text-lg opacity-90 mb-4">{heroData.niche}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {heroData.highlightTags.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 sm:px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator — desktop only */}
        <div className="hidden md:flex justify-center mt-12 lg:mt-16">
          <a
            href="#projects"
            className="flex flex-col items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
          >
            <span className="text-sm">Scroll to explore</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  );
};
