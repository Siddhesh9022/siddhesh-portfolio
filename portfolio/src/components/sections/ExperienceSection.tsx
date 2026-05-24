/**
 * Experience Section - Work history timeline
 */
import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionSubtitle } from '../ui/SectionSubtitle';
import { ExperienceItem } from '../ui/ExperienceItem';
import { experienceData } from '../../data/portfolioData';

// ============================================
// EXPERIENCE SECTION COMPONENT
// ============================================
export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-24 scroll-mt-20"
      style={{ backgroundColor: 'var(--color-surface)' }}
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <SectionSubtitle className="text-[var(--color-primary)]">
            Work History
          </SectionSubtitle>
          <SectionTitle className="mt-2 text-[var(--color-text)]">
            Experience
          </SectionTitle>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[var(--color-text-muted)]">
            Professional full-stack development building scalable enterprise applications.
          </p>
        </div>

        {/* Experience List */}
        <div className="max-w-3xl mx-auto space-y-8">
          {experienceData.map((exp, index) => (
            <ExperienceItem
              key={index}
              role={exp.role}
              organization={exp.organization}
              duration={exp.duration}
              location={exp.location}
              description={exp.description}
              techStack={exp.techStack}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
