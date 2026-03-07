/**
 * Hero Section - Split screen layout with parallax, particle background, and resume download
 */
import React, { useEffect, useState } from 'react';
import { Container } from '../ui/Container';
import { PrimaryButton } from '../ui/PrimaryButton';
import { SecondaryButton } from '../ui/SecondaryButton';
import { FadeInOnScroll } from '../ui/FadeInOnScroll';
import { ParticleBackground } from '../effects/ParticleBackground';
import { heroData } from '../../data/portfolioData';

// ============================================
// HERO SECTION COMPONENT
// ============================================
export const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offset
  const parallaxOffset = scrollY * 0.4;
  const contentOffset = scrollY * 0.2;
  const opacity = Math.max(0, 1 - scrollY / 500);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticleBackground />
      </div>

      {/* Background Gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: `linear-gradient(135deg, var(--color-background) 0%, var(--color-surface) 100%)`,
        }}
      />

      {/* Floating Elements with Parallax */}
      <div 
        className="absolute top-20 right-20 w-72 h-72 rounded-full opacity-20 blur-3xl"
        style={{ 
          backgroundColor: 'var(--color-primary)',
          transform: `translateY(${parallaxOffset * 0.5}px)`,
        }}
      />
      <div 
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full opacity-15 blur-3xl"
        style={{ 
          backgroundColor: 'var(--color-accent)',
          transform: `translateY(${-parallaxOffset * 0.3}px)`,
        }}
      />

      <Container className="relative z-10">
        <div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          style={{
            transform: `translateY(${contentOffset}px)`,
            opacity,
            transition: 'opacity 0.3s ease',
          }}
        >
          {/* LEFT SIDE - Content */}
          <div className="order-2 lg:order-1">
            {/* Greeting */}
            <FadeInOnScroll delay={0}>
              <p className="text-lg md:text-xl mb-4 font-medium text-[var(--color-primary)]">
                {heroData.greeting}
              </p>
            </FadeInOnScroll>

            {/* Name */}
            <FadeInOnScroll delay={100}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 tracking-tight text-[var(--color-text)]">
                {heroData.name}
              </h1>
            </FadeInOnScroll>

            {/* Role */}
            <FadeInOnScroll delay={200}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-[var(--color-text-muted)]">
                {heroData.role}
              </h2>
            </FadeInOnScroll>

            {/* Short Intro */}
            <FadeInOnScroll delay={300}>
              <p className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed text-[var(--color-text)]">
                {heroData.intro}
              </p>
            </FadeInOnScroll>

            {/* CTA Buttons */}
            <FadeInOnScroll delay={400}>
              <div className="flex flex-wrap gap-4 mb-6">
                <PrimaryButton href={heroData.ctaButtons.primary.href}>
                  {heroData.ctaButtons.primary.label}
                </PrimaryButton>
                <SecondaryButton href={heroData.ctaButtons.secondary.href}>
                  {heroData.ctaButtons.secondary.label}
                </SecondaryButton>
              </div>
            </FadeInOnScroll>

            {/* Resume Download Button */}
            <FadeInOnScroll delay={500}>
              <a
                href="/Siddhesh_Patil_Resume.pdf"
                download
                className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
                <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </FadeInOnScroll>
          </div>

          {/* RIGHT SIDE - Visual */}
          <FadeInOnScroll delay={200} direction="left" className="order-1 lg:order-2">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-30 blur-xl bg-[var(--color-primary)]" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full opacity-20 blur-xl bg-[var(--color-accent)]" />
              
              {/* Profile Card */}
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)`,
                }}
              >
                <div className="text-center text-white p-12">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <p className="text-2xl font-bold mb-2">Junior Software Developer</p>
                  <p className="text-lg opacity-90 mb-4">SCM • EAM • Kafka • Full Stack</p>
                  
                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {['Java', 'Kafka', 'Python', 'React', 'MongoDB'].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/20 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>

        {/* Scroll indicator */}
        <FadeInOnScroll delay={600}>
          <div className="flex justify-center mt-16">
            <a
              href="#projects"
              className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity text-[var(--color-text-muted)]"
            >
              <span className="text-sm">Scroll to explore</span>
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </FadeInOnScroll>
      </Container>
    </section>
  );
};
