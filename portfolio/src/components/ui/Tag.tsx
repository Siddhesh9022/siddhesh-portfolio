/**
 * Tag component - Small badge/pill for skills and technologies
 */
import React from 'react';

// ============================================
// COMPONENT PROPS INTERFACE
// ============================================
interface TagProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'accent';
}

// ============================================
// TAG COMPONENT
// ============================================
export const Tag: React.FC<TagProps> = ({
  children,
  className = '',
  variant = 'default',
}) => {
  const variantClasses = {
    default: 'bg-[var(--color-surface)] text-[var(--color-text)]',
    outlined: 'border border-[var(--color-border)] text-[var(--color-text)] bg-transparent',
    accent: 'bg-[var(--color-accent)] text-[var(--color-background)]',
  };

  const baseClasses = [
    'inline-flex',
    'items-center',
    'px-3',
    'py-1',
    'rounded-full',
    'text-sm',
    'font-medium',
    'transition-all',
    'duration-200',
    variantClasses[variant],
    className,
  ].join(' ');

  return (
    <span className={baseClasses}>
      {children}
    </span>
  );
};
