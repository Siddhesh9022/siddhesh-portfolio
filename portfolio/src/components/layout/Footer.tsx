/**
 * Footer component - Page footer with social links and copyright
 */
import React from 'react';
import { Container } from '../ui/Container';
import { footerData } from '../../data/portfolioData';

// ============================================
// FOOTER COMPONENT
// ============================================
export const Footer: React.FC = () => {
  return (
    <footer
      className="py-8 border-t"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright & Tagline */}
          <div className="text-center md:text-left">
            <p
              className="text-sm font-medium"
              style={{ color: 'var(--color-text)' }}
            >
              {footerData.copyright}
            </p>
            <p
              className="text-xs mt-1"
              style={{ color: 'var(--color-text-muted)' }}
            >
              {footerData.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {footerData.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-opacity hover:opacity-70"
                style={{ color: 'var(--color-primary)' }}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
};
