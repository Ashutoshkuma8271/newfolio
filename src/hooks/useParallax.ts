import { useEffect, useRef, useState } from 'react';

interface ParallaxOptions {
  speed?: number; // e.g. 0.2 for gentle depth, 0.4 for strong parallax
  direction?: 'up' | 'down';
  scale?: boolean;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>({
  speed = 0.2,
  direction = 'down',
  scale = false,
}: ParallaxOptions = {}) {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);
  const [scaleVal, setScaleVal] = useState(1);

  useEffect(() => {
    let ticking = false;
    let isMounted = true;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const updateParallax = () => {
      const el = ref.current;
      if (!el) {
        ticking = false;
        return;
      }

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Element is visible or close to viewport
      if (rect.bottom >= -100 && rect.top <= windowHeight + 100) {
        const scrolledIntoView = windowHeight - rect.top;
        const dirMultiplier = direction === 'up' ? -1 : 1;
        const currentOffset = (scrolledIntoView - windowHeight * 0.5) * speed * dirMultiplier;
        
        setOffset(currentOffset);

        if (scale) {
          const progress = Math.max(0, Math.min(1, scrolledIntoView / (windowHeight + rect.height)));
          setScaleVal(1 + progress * 0.05);
        }
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateParallax();

    return () => {
      isMounted = false;
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [speed, direction, scale]);

  return { ref, offset, scaleVal };
}
