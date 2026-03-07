/**
 * Container component - Provides consistent max-width and padding
 */
import React from 'react';

// ============================================
// COMPONENT PROPS INTERFACE
// ============================================
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

// ============================================
// CONTAINER COMPONENT
// ============================================
export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'xl',
}) => {
  // Map theme max-widths to Tailwind classes
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
    '2xl': 'max-w-[96rem]',
  };

  const baseClasses = [
    'w-full',
    'mx-auto',
    'px-4',
    'sm:px-6',
    'lg:px-8',
    sizeClasses[size],
    className,
  ].join(' ');

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};
