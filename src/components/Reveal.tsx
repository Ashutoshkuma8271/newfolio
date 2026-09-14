import { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'zoom';
  duration?: number;
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const directionClass = {
    up: 'reveal-up',
    down: 'reveal-down',
    left: 'reveal-left',
    right: 'reveal-right',
    zoom: 'reveal-zoom',
    fade: 'reveal-fade',
  }[direction];

  return (
    <div
      ref={ref}
      className={`${directionClass} ${visible ? 'visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        ...(duration ? { transitionDuration: `${duration}ms` } : {}),
      }}
    >
      {children}
    </div>
  );
}
