/**
 * About Section - Personal introduction and stats
 */
import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionSubtitle } from '../ui/SectionSubtitle';
import { TextBlock } from '../ui/TextBlock';
import { Card } from '../ui/Card';
import { aboutData } from '../../data/portfolioData';

// ============================================
// ABOUT SECTION COMPONENT
// ============================================
export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 scroll-mt-20"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT - Content */}
          <div>
            <SectionSubtitle className="text-[var(--color-primary)]">
              {aboutData.subtitle}
            </SectionSubtitle>
            <SectionTitle className="mt-2 text-[var(--color-text)]">
              {aboutData.title}
            </SectionTitle>

            <div className="mt-8 space-y-4">
              {aboutData.paragraphs.map((paragraph, index) => (
                <TextBlock
                  key={index}
                  className="text-[var(--color-text)]"
                >
                  {paragraph}
                </TextBlock>
              ))}
            </div>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Education</h3>
                <p className="text-[var(--color-text)] font-medium">{aboutData.education.degree}</p>
                <p className="text-[var(--color-text-muted)] text-sm">
                  {aboutData.education.institution} · {aboutData.education.location}
                </p>
                <p className="text-[var(--color-text-muted)] text-sm">{aboutData.education.duration}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-text)] mb-2">Certifications</h3>
                <ul className="space-y-2">
                  {aboutData.certifications.map((cert) => (
                    <li key={cert.name} className="text-sm text-[var(--color-text-muted)]">
                      <span className="text-[var(--color-text)]">{cert.name}</span>
                      {' — '}
                      {cert.issuer}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {aboutData.stats.map((stat, index) => (
              <Card
                key={index}
                className="text-center py-8"
              >
                <div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-sm font-medium"
                  style={{ color: 'var(--color-text-muted)' }}
                >
                  {stat.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
