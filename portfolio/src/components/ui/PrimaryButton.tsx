/**
 * PrimaryButton component - Main call-to-action button
 */
import React from 'react';

// ============================================
// COMPONENT PROPS INTERFACE
// ============================================
interface PrimaryButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit';
}

// ============================================
// PRIMARY BUTTON COMPONENT
// ============================================
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className = '',
  onClick,
  href,
  size = 'md',
  disabled = false,
  type = 'button',
}) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const baseClasses = [
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'rounded-lg',
    'transition-all',
    'duration-300',
    'hover:scale-105',
    'active:scale-95',
    sizeClasses[size],
    disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    className,
  ].join(' ');

  // Apply theme-aware styles using CSS variables
  const themeStyles: React.CSSProperties = {
    backgroundColor: 'var(--color-primary)',
    color: 'var(--color-background)',
    boxShadow: `0 4px 14px 0 var(--color-shadow)`,
  };

  if (href) {
    return (
      <a 
        href={href} 
        className={baseClasses}
        style={themeStyles}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      style={themeStyles}
    >
      {children}
    </button>
  );
};
