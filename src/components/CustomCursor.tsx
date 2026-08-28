import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef   = useRef<HTMLDivElement>(null);
  const ringRef  = useRef<HTMLDivElement>(null);
  const posRef   = useRef({ x: -100, y: -100 });
  const trailRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // No custom cursor on touch devices or reduced-motion
    if (window.matchMedia('(pointer: coarse)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animId: number;
    let isHovered = false;
    let isVisible = false;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) {
        isVisible = true;
        if (dotRef.current)  dotRef.current.style.opacity  = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }
    };

    const onLeave = () => {
      isVisible = false;
      if (dotRef.current)  dotRef.current.style.opacity  = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      isHovered = !!t?.closest('a, button, [data-interactive]');
    };

    const loop = () => {
      trailRef.current.x += (posRef.current.x - trailRef.current.x) * 0.14;
      trailRef.current.y += (posRef.current.y - trailRef.current.y) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px) translate(-50%,-50%) scale(${isHovered ? 1.4 : 1})`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${trailRef.current.x}px, ${trailRef.current.y}px) translate(-50%,-50%) scale(${isHovered ? 1.8 : 1})`;
        ringRef.current.style.borderColor = isHovered ? '#3155FF' : '#111111';
      }
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    document.addEventListener('mouseleave', onLeave);
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Precision dot — dark for light theme */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full opacity-0 transition-transform duration-75"
        style={{ width: 6, height: 6, background: '#111111' }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border opacity-0"
        style={{ width: 32, height: 32, borderWidth: 1.5, borderColor: '#111111', background: 'transparent' }}
      />
    </>
  );
};
