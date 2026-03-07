/**
 * TextBlock component - Consistent paragraph text styling
 */
import React from 'react';

// ============================================
// COMPONENT PROPS INTERFACE
// ============================================
interface TextBlockProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'base' | 'lg';
  muted?: boolean;
}

// ============================================
// TEXT BLOCK COMPONENT
// ============================================
export const TextBlock: React.FC<TextBlockProps> = ({
  children,
  className = '',
  size = 'base',
  muted = false,
}) => {
  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
  };

  const baseClasses = [
    'leading-relaxed',
    sizeClasses[size],
    muted ? 'opacity-70' : '',
    className,
  ].join(' ');

  return (
    <p className={baseClasses}>
      {children}
    </p>
  );
};
