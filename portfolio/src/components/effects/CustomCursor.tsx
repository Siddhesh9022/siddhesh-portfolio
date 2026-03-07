/**
 * CustomCursor - Animated cursor with hover effects
 * Adds a custom cursor that highlights on interactive elements
 */
import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovering(false);
      }
    };

    const animate = () => {
      // Smooth follow effect
      const ease = 0.15;
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * ease;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * ease;

      setPosition({
        x: currentRef.current.x,
        y: currentRef.current.y,
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    const animationId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
        }}
      >
        <div
          className="rounded-full bg-[var(--color-primary)]"
          style={{
            width: isHovering ? '50px' : '8px',
            height: isHovering ? '50px' : '8px',
            opacity: isHovering ? 0.5 : 1,
            transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
          }}
        />
      </div>
      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          width: isHovering ? '60px' : '40px',
          height: isHovering ? '60px' : '40px',
          border: '1px solid var(--color-primary)',
          borderRadius: '50%',
          opacity: isHovering ? 0.8 : 0.3,
          transition: 'all 0.15s ease',
        }}
      />
    </>
  );
};
