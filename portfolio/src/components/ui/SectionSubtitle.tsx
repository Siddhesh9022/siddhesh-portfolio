/**
 * SectionSubtitle component - Consistent subtitle style for sections
 */
import React from 'react';

// ============================================
// COMPONENT PROPS INTERFACE
// ============================================
interface SectionSubtitleProps {
  children: React.ReactNode;
  className?: string;
}

// ============================================
// SECTION SUBTITLE COMPONENT
// ============================================
export const SectionSubtitle: React.FC<SectionSubtitleProps> = ({
  children,
  className = '',
}) => {
  const baseClasses = [
    'text-lg',
    'sm:text-xl',
    'font-medium',
    'tracking-wide',
    'uppercase',
    className,
  ].join(' ');

  return (
    <p className={baseClasses}>
      {children}
    </p>
  );
};
