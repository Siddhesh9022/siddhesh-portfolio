/**
 * ExperienceItem component - Reusable experience card for work history
 */
import React from 'react';
import { Card } from './Card';
import { Tag } from './Tag';
import { TextBlock } from './TextBlock';

// ============================================
// COMPONENT PROPS INTERFACE
// ============================================
interface ExperienceItemProps {
  role: string;
  organization: string;
  duration: string;
  description: string[];
  techStack: string[];
  className?: string;
}

// ============================================
// EXPERIENCE ITEM COMPONENT
// ============================================
export const ExperienceItem: React.FC<ExperienceItemProps> = ({
  role,
  organization,
  duration,
  description,
  techStack,
  className = '',
}) => {
  return (
    <Card className={className}>
      {/* Header */}
      <div className="mb-4">
        <h3 
          className="text-xl font-bold mb-1"
          style={{ color: 'var(--color-text)' }}
        >
          {role}
        </h3>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span 
            className="font-medium"
            style={{ color: 'var(--color-primary)' }}
          >
            {organization}
          </span>
          <span style={{ color: 'var(--color-text-muted)' }}>•</span>
          <span style={{ color: 'var(--color-text-muted)' }}>
            {duration}
          </span>
        </div>
      </div>

      {/* Description */}
      <div className="mb-4 space-y-2">
        {description.map((item, index) => (
          <TextBlock key={index} size="sm" muted>
            • {item}
          </TextBlock>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <Tag key={tech} variant="outlined">
            {tech}
          </Tag>
        ))}
      </div>
    </Card>
  );
};
