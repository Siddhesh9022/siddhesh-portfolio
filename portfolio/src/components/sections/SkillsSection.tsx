/**
 * Skills Section - Display skill categories
 */
import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionSubtitle } from '../ui/SectionSubtitle';
import { Tag } from '../ui/Tag';
import { Card } from '../ui/Card';
import { skillsData } from '../../data/portfolioData';

// ============================================
// SKILLS SECTION COMPONENT
// ============================================
export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-24 scroll-mt-20"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <SectionSubtitle className="text-[var(--color-primary)]">
            What I Do
          </SectionSubtitle>
          <SectionTitle className="mt-2 text-[var(--color-text)]">
            Skills & Technologies
          </SectionTitle>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-[var(--color-text-muted)]">
            Technologies and tools I use to build exceptional digital experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category) => (
            <Card key={category.category} className="h-full">
              <h3
                className="text-lg font-semibold mb-4"
                style={{ color: 'var(--color-primary)' }}
              >
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Tag key={skill} variant="default">
                    {skill}
                  </Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};
