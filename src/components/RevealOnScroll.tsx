import React, { useRef, useEffect, useState } from 'react';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
  disableTransformAfterReveal?: boolean;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  delay = 0,
  duration = 750,
  yOffset = 36,
  className = '',
  disableTransformAfterReveal = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    const currentEl = elementRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, []);

  useEffect(() => {
    if (isVisible && disableTransformAfterReveal) {
      const timer = setTimeout(() => {
        setAnimationCompleted(true);
      }, duration + delay + 50);
      return () => clearTimeout(timer);
    }
  }, [isVisible, disableTransformAfterReveal, duration, delay]);

  const style: React.CSSProperties = {
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`,
    opacity: isVisible ? 1 : 0,
    transform: animationCompleted 
      ? 'none' 
      : isVisible 
        ? 'translate3d(0, 0, 0)' 
        : `translate3d(0, ${yOffset}px, 0)`,
    willChange: animationCompleted ? 'auto' : 'opacity, transform'
  };

  return (
    <div ref={elementRef} style={style} className={className}>
      {children}
    </div>
  );
};
