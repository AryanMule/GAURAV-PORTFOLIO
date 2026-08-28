import React, { useEffect, useRef } from 'react';
import { DeveloperCharacter } from '../components/DeveloperCharacter';
import { FloatingPanel, panels } from '../components/FloatingPanels';

export const Hero: React.FC = () => {
  const heroRef      = useRef<HTMLElement>(null);
  const headlineRef  = useRef<HTMLDivElement>(null);
  const charWrapRef  = useRef<HTMLDivElement>(null);
  const panel0Ref    = useRef<HTMLDivElement>(null);
  const panel1Ref    = useRef<HTMLDivElement>(null);
  const panel2Ref    = useRef<HTMLDivElement>(null);
  const panel3Ref    = useRef<HTMLDivElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);
  const bgTextRef    = useRef<HTMLDivElement>(null);
  const scrollIndRef = useRef<HTMLDivElement>(null);

  // Mouse parallax
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ticking = false;
    const handleMouse = (e: MouseEvent) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rx = (e.clientX / window.innerWidth  - 0.5) * 2;
        const ry = (e.clientY / window.innerHeight - 0.5) * 2;

        if (bgTextRef.current) {
          bgTextRef.current.style.transform = `translate(${rx * 10}px, ${ry * 6}px)`;
        }
        if (panel0Ref.current) {
          panel0Ref.current.style.transform = `translate(${rx * -18}px, ${ry * -12}px)`;
        }
        if (panel1Ref.current) {
          panel1Ref.current.style.transform = `translate(${rx * 22}px, ${ry * -14}px)`;
        }
        if (panel2Ref.current) {
          panel2Ref.current.style.transform = `translate(${rx * -14}px, ${ry * 16}px)`;
        }
        if (panel3Ref.current) {
          panel3Ref.current.style.transform = `translate(${rx * 20}px, ${ry * 18}px)`;
        }
        if (charWrapRef.current) {
          charWrapRef.current.style.transform = `translate(${rx * 10}px, ${ry * 8}px)`;
        }
        ticking = false;
      });
    };

    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  // GSAP entrance
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const init = async () => {
      const { gsap } = await import('gsap');

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Headline lines
      const lines = headlineRef.current?.querySelectorAll('.hero-line');
      if (lines) {
        gsap.set(lines, { y: 80, opacity: 0 });
        tl.to(lines, { y: 0, opacity: 1, stagger: 0.12, duration: 0.9 }, 0.1);
      }

      // Character enter
      if (charWrapRef.current) {
        gsap.set(charWrapRef.current, { y: 60, opacity: 0, scale: 0.95 });
        tl.to(charWrapRef.current, { y: 0, opacity: 1, scale: 1, duration: 1, ease: 'power4.out' }, 0.35);
      }

      // Panels enter staggered
      const panelEls = [panel0Ref.current, panel1Ref.current, panel2Ref.current, panel3Ref.current];
      panelEls.forEach((p, i) => {
        if (!p) return;
        gsap.set(p, { y: 20, opacity: 0 });
        tl.to(p, { y: 0, opacity: 1, duration: 0.6 }, 0.65 + i * 0.12);
      });

      // CTA
      if (ctaRef.current) {
        gsap.set(ctaRef.current, { y: 20, opacity: 0 });
        tl.to(ctaRef.current, { y: 0, opacity: 1, duration: 0.6 }, 0.8);
      }

      // Scroll indicator
      if (scrollIndRef.current) {
        gsap.set(scrollIndRef.current, { opacity: 0 });
        tl.to(scrollIndRef.current, { opacity: 1, duration: 0.6 }, 1.2);
        // Animate the line inside
        const line = scrollIndRef.current.querySelector('.scroll-line');
        if (line) {
          gsap.to(line, { scaleY: 0, transformOrigin: 'top', duration: 0.8, repeat: -1, yoyo: true, ease: 'power1.inOut', delay: 1.5 });
        }
      }
    };

    init();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[100svh] bg-main overflow-hidden flex flex-col"
    >
      {/* ── Background: Dot grid + giant bg text ── */}
      <div className="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <div
        ref={bgTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden transition-transform duration-100 ease-out"
        aria-hidden="true"
      >
        <div
          className="font-display font-bold text-center leading-none"
          style={{
            fontSize: 'clamp(6rem, 18vw, 18rem)',
            color: 'transparent',
            WebkitTextStroke: '1px rgba(0,0,0,0.055)',
            letterSpacing: '-0.04em',
          }}
        >
          FULL<br/>STACK
        </div>
      </div>

      {/* ── Main content grid ── */}
      <div className="relative z-10 flex-1 grid grid-cols-1 lg:grid-cols-12 items-center max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-14 pt-28 pb-16 gap-4 lg:gap-0">

        {/* Left: Headline + CTA (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1 pb-10 lg:pb-0">
          <div ref={headlineRef} className="mb-8">
            {/* Eyebrow */}
            <div className="hero-line label text-cobalt mb-4 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green" />
              Software Developer · Pune, India
            </div>

            {/* Giant headline */}
            <h1 className="font-display font-bold leading-[1.02] tracking-tight" style={{ fontSize: 'clamp(3rem,7vw,5.5rem)', letterSpacing: '-0.03em' }}>
              <span className="hero-line block overflow-hidden">
                <span className="block">FULL-STACK</span>
              </span>
              <span className="hero-line block overflow-hidden">
                <span className="block text-cobalt">ENGINEER.</span>
              </span>
              <span className="hero-line block overflow-hidden" style={{ fontSize: 'clamp(1.2rem,2.8vw,2rem)', letterSpacing: '-0.01em', color: '#686868', fontWeight: 500 }}>
                <span className="block mt-2">React · Node · MongoDB · SQL</span>
              </span>
            </h1>
          </div>

          {/* CTA Row */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              Explore My Work
              <span className="arrow">↗</span>
            </a>
            <a href="#contact" className="btn-secondary">
              Reach Me
              <span className="arrow">↗</span>
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-10 pt-6 border-t border-border flex items-center gap-6 flex-wrap">
            <div>
              <div className="font-display font-bold text-xl text-ink">7.42</div>
              <div className="label text-muted">CGPA · B.E CSE</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="font-display font-bold text-xl text-ink">3+</div>
              <div className="label text-muted">MERN Projects</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div>
              <div className="font-display font-bold text-xl text-ink">Intern</div>
              <div className="label text-muted">TechOctanet '25</div>
            </div>
          </div>
        </div>

        {/* Center: Character + Floating Panels (7 cols) */}
        <div className="lg:col-span-7 relative flex items-center justify-center order-1 lg:order-2 min-h-[420px] lg:min-h-[600px]">

          {/* Panel 0: React — top left */}
          <div
            ref={panel0Ref}
            className="absolute z-20 transition-transform duration-150 ease-out"
            style={{ top: '4%', left: '0%' }}
          >
            <FloatingPanel panel={panels[0]} />
          </div>

          {/* Panel 1: API — top right */}
          <div
            ref={panel1Ref}
            className="absolute z-20 transition-transform duration-150 ease-out"
            style={{ top: '8%', right: '2%' }}
          >
            <FloatingPanel panel={panels[1]} />
          </div>

          {/* Panel 2: MongoDB — bottom left */}
          <div
            ref={panel2Ref}
            className="absolute z-20 transition-transform duration-150 ease-out"
            style={{ bottom: '12%', left: '2%' }}
          >
            <FloatingPanel panel={panels[2]} />
          </div>

          {/* Panel 3: Deploy — bottom right */}
          <div
            ref={panel3Ref}
            className="absolute z-20 transition-transform duration-150 ease-out"
            style={{ bottom: '8%', right: '0%' }}
          >
            <FloatingPanel panel={panels[3]} />
          </div>

          {/* Character */}
          <div
            ref={charWrapRef}
            className="relative z-10 transition-transform duration-150 ease-out"
            style={{ width: 'clamp(240px, 40vw, 400px)' }}
          >
            <DeveloperCharacter className="w-full h-auto" />
          </div>

          {/* Role labels (below character, like reference) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-8 whitespace-nowrap z-20">
            <div className="label text-muted tracking-widest text-center">MERN DEVELOPER</div>
            <div className="w-1 h-1 rounded-full bg-border" />
            <div className="label text-cobalt tracking-widest text-center">FULL-STACK / END-TO-END</div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div ref={scrollIndRef} className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="label text-faint">SCROLL</span>
        <div className="w-px h-8 bg-border relative overflow-hidden">
          <div className="scroll-line absolute inset-0 bg-cobalt" />
        </div>
      </div>
    </section>
  );
};
