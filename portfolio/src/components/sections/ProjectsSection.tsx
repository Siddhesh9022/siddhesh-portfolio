/**
 * Projects Section - Grid of project cards
 */
import React from 'react';
import { Container } from '../ui/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { SectionSubtitle } from '../ui/SectionSubtitle';
import { ProjectCard } from '../ui/ProjectCard';
import { projectsData } from '../../data/portfolioData';

// ============================================
// PROJECTS SECTION COMPONENT
// ============================================
export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-24 bg-[var(--color-background)]"
    >
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <SectionSubtitle className="text-[var(--color-primary)]">
            Featured Work
          </SectionSubtitle>
          <SectionTitle
            className="mt-2 text-[var(--color-text)]"
          >
            Projects
          </SectionTitle>
          <p
            className="mt-4 text-lg max-w-2xl mx-auto text-[var(--color-text-muted)]"
          >
            A collection of projects I've worked on, from full-stack applications to creative experiments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              status={project.status}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
