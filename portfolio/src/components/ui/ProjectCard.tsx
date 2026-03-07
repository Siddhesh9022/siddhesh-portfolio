/**
 * ProjectCard component - Reusable project showcase card
 */
import React from 'react';
import { Card } from './Card';
import { Tag } from './Tag';
import { TextBlock } from './TextBlock';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';

// ============================================
// STATUS ENUM
// ============================================
export const ProjectStatus = {
  COMPLETED: 'completed',
  IN_PROGRESS: 'in-progress',
  PLANNED: 'planned',
} as const;

export type ProjectStatusType = typeof ProjectStatus[keyof typeof ProjectStatus];

// ============================================
// COMPONENT PROPS INTERFACE
// ============================================
interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  status: ProjectStatusType;
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}

// ============================================
// STATUS CONFIGURATION
// ============================================
const statusConfig: Record<ProjectStatusType, { label: string; variant: 'default' | 'accent' | 'outlined' }> = {
  [ProjectStatus.COMPLETED]: { label: 'Completed', variant: 'accent' },
  [ProjectStatus.IN_PROGRESS]: { label: 'In Progress', variant: 'default' },
  [ProjectStatus.PLANNED]: { label: 'Planned', variant: 'outlined' },
};

// ============================================
// PROJECT CARD COMPONENT
// ============================================
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  status,
  githubUrl,
  liveUrl,
  className = '',
}) => {
  const statusInfo = statusConfig[status];

  return (
    <Card className={className}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 
          className="text-xl font-bold"
          style={{ color: 'var(--color-text)' }}
        >
          {title}
        </h3>
        <Tag variant={statusInfo.variant}>
          {statusInfo.label}
        </Tag>
      </div>

      {/* Description */}
      <TextBlock muted className="mb-4">
        {description}
      </TextBlock>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech) => (
          <Tag key={tech} variant="default">
            {tech}
          </Tag>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        {liveUrl && (
          <PrimaryButton href={liveUrl} size="sm">
            View Live
          </PrimaryButton>
        )}
        {githubUrl && (
          <SecondaryButton href={githubUrl} size="sm">
            GitHub
          </SecondaryButton>
        )}
      </div>
    </Card>
  );
};
