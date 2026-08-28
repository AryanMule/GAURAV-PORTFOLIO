import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fading,   setFading]   = useState(false);

  useEffect(() => {
    // Skip on reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onComplete(); return;
    }

    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => { setFading(true); setTimeout(onComplete, 500); }, 120);
          return 100;
        }
        return Math.min(p + Math.floor(Math.random() * 14) + 7, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[60] flex flex-col items-center justify-center bg-main transition-opacity duration-500 ${fading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Monogram */}
      <div className="w-14 h-14 rounded-2xl bg-ink flex items-center justify-center mb-6 shadow-card-lg">
        <span className="font-display font-bold text-xl text-white tracking-widest">GP</span>
      </div>

      <p className="label text-muted mb-5">LOADING PORTFOLIO</p>

      {/* Progress bar */}
      <div className="w-48 h-px bg-border relative overflow-hidden rounded-full">
        <div
          className="absolute left-0 top-0 h-full bg-cobalt rounded-full transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="font-mono text-[10px] text-faint mt-2">{progress}%</p>
    </div>
  );
};
