import React, { useEffect, useRef } from 'react';
import { personalData } from '../data/personal';

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      const el = sectionRef.current;
      if (!el) return;

      const targets = el.querySelectorAll('.scroll-reveal');
      targets.forEach((t) => {
        gsap.fromTo(t,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: t, start: 'top 85%', once: true },
          }
        );
      });
    };
    init();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-main">
      <div className="section-wrap">

        {/* Label row */}
        <div className="section-label-row">
          <span className="label text-muted">01 / ABOUT</span>
          <div className="line" />
        </div>

        {/* Asymmetric 2-col */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: Big statement (7 cols) */}
          <div className="lg:col-span-7 scroll-reveal">
            <h2 className="font-display font-bold text-ink mb-8 leading-tight" style={{ fontSize: 'clamp(2rem,4.5vw,3.5rem)', letterSpacing: '-0.025em' }}>
              Computer Science engineer building{' '}
              <span className="text-cobalt">scalable full-stack</span>{' '}
              MERN applications, secure APIs, and{' '}
              <span className="text-cobalt">database-driven</span> architectures.
            </h2>

            <p className="text-base text-muted leading-relaxed font-sans max-w-xl">
              {personalData.summary}
            </p>

            {/* Code identity card */}
            <div className="mt-8 rounded-lg border border-border bg-surface p-5 font-mono text-xs shadow-card">
              <div className="flex gap-1.5 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-coral/70" />
                <div className="w-2.5 h-2.5 rounded-full border border-border" />
                <div className="w-2.5 h-2.5 rounded-full bg-green/70" />
                <span className="ml-auto text-faint text-[10px]">identity.ts</span>
              </div>
              <div className="space-y-1 text-muted leading-relaxed">
                <div><span className="text-cobalt font-medium">const</span> <span className="text-ink font-medium">dev</span> = {'{'}</div>
                <div className="pl-4">name:     <span className="text-green">&apos;Gaurav Patil&apos;</span>,</div>
                <div className="pl-4">degree:   <span className="text-green">&apos;B.E Computer Science&apos;</span>,</div>
                <div className="pl-4">cgpa:     <span className="text-cobalt">7.42</span>,</div>
                <div className="pl-4">stack:    [<span className="text-green">&apos;React&apos;</span>, <span className="text-green">&apos;Node&apos;</span>, <span className="text-green">&apos;MongoDB&apos;</span>, <span className="text-green">&apos;MySQL&apos;</span>],</div>
                <div className="pl-4">openToWork: <span className="text-cobalt">true</span>,</div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>

          {/* Right: Metadata cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">

            {/* Education */}
            <div className="scroll-reveal rounded-lg border border-border bg-surface p-5 shadow-card hover:shadow-card-lg transition-shadow">
              <div className="label text-cobalt mb-2">EDUCATION</div>
              <div className="font-display font-semibold text-ink text-base mb-0.5">{personalData.education.degree}</div>
              <div className="text-sm text-muted mb-3">{personalData.education.institution}</div>
              <div className="flex items-center justify-between text-xs font-mono text-faint border-t border-border pt-3">
                <span>{personalData.education.period}</span>
                <span className="text-ink font-bold">{personalData.education.cgpa} CGPA</span>
              </div>
            </div>

            {/* Location */}
            <div className="scroll-reveal rounded-lg border border-border bg-surface p-5 shadow-card hover:shadow-card-lg transition-shadow">
              <div className="label text-muted mb-2">LOCATION & AVAILABILITY</div>
              <div className="font-display font-semibold text-ink text-base mb-1">{personalData.location}</div>
              <div className="flex items-center gap-1.5 text-xs text-green font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-green inline-block animate-pulse" />
                Open to remote & on-site opportunities
              </div>
            </div>

            {/* Core principles */}
            <div className="scroll-reveal rounded-lg border border-border bg-surface p-5 shadow-card">
              <div className="label text-muted mb-3">ENGINEERING FOCUS</div>
              <div className="flex flex-wrap gap-1.5">
                {['OOP', 'Database Design', 'REST APIs', 'Responsive Web', 'JWT Auth', 'RBAC', 'MERN Stack'].map(item => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
