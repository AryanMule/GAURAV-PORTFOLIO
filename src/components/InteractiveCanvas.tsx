import React, { useEffect, useRef } from 'react';

/**
 * Subtle animated dot grid for the hero background.
 * Light theme — only renders on non-reduced-motion, non-touch viewports.
 */
export const BackgroundGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      w = canvas.width  = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const SPACING = 36;
    const COLS = Math.ceil(w / SPACING) + 1;
    const ROWS = Math.ceil(h / SPACING) + 1;

    const mouse = { x: -999, y: -999 };
    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('mousemove', onMove);

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const x = c * SPACING;
          const y = r * SPACING;
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const proximity = Math.max(0, 1 - dist / 180);

          // Base dot
          const baseAlpha = 0.18;
          const alpha     = baseAlpha + proximity * 0.55;
          const radius    = 1.4 + proximity * 2;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = proximity > 0.05
            ? `rgba(49,85,255,${alpha})`       // cobalt near cursor
            : `rgba(180,178,170,${baseAlpha})`; // grey dot at rest
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 w-full h-full opacity-70"
      aria-hidden="true"
    />
  );
};
