/**
 * Card component - Reusable card container with glassmorphism support
 */
import React from 'react';

// ============================================
// COMPONENT PROPS INTERFACE
// ============================================
interface CardProps {
  children: React.ReactNode;
  className?: string;
  glassmorphism?: boolean;
  hover?: boolean;
}

// ============================================
// CARD COMPONENT
// ============================================
export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  glassmorphism = false,
  hover = true,
}) => {
  const baseClasses = [
    'rounded-2xl',
    'p-6',
    'transition-all',
    'duration-300',
    hover ? 'hover:scale-[1.02]' : '',
    glassmorphism 
      ? 'backdrop-blur-xl bg-white/10 border border-white/20' 
      : 'bg-[var(--color-surface)] border border-[var(--color-border)]',
    className,
  ].join(' ');

  return (
    <div className={baseClasses}>
      {children}
    </div>
  );
};
