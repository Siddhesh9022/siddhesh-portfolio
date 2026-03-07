/**
 * SectionTitle component - Consistent heading style for sections
 */
import React from 'react';

// ============================================
// COMPONENT PROPS INTERFACE
// ============================================
interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

// ============================================
// SECTION TITLE COMPONENT
// ============================================
export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  className = '',
  as: Component = 'h2',
}) => {
  const baseClasses = [
    'text-3xl',
    'sm:text-4xl',
    'lg:text-5xl',
    'font-bold',
    'tracking-tight',
    'leading-tight',
    className,
  ].join(' ');

  return (
    <Component className={baseClasses}>
      {children}
    </Component>
  );
};
