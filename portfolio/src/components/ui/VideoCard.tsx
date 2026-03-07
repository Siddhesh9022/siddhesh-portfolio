/**
 * VideoCard component - For hero section video content
 */
import React from 'react';

// ============================================
// COMPONENT PROPS INTERFACE
// ============================================
interface VideoCardProps {
  videoUrl: string;
  posterUrl?: string;
  className?: string;
  glassmorphism?: boolean;
}

// ============================================
// VIDEO CARD COMPONENT
// ============================================
export const VideoCard: React.FC<VideoCardProps> = ({
  videoUrl,
  posterUrl,
  className = '',
  glassmorphism = false,
}) => {
  const baseClasses = [
    'relative',
    'rounded-2xl',
    'overflow-hidden',
    'aspect-video',
    'shadow-2xl',
    glassmorphism 
      ? 'backdrop-blur-xl bg-white/10 border border-white/20' 
      : 'border border-[var(--color-border)]',
    className,
  ].join(' ');

  return (
    <div className={baseClasses}>
      <video
        className="w-full h-full object-cover"
        src={videoUrl}
        poster={posterUrl}
        autoPlay
        muted
        loop
        playsInline
      />
      {/* Gradient overlay for better integration */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.1) 100%)'
        }}
      />
    </div>
  );
};
