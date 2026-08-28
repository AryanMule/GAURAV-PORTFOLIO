import React, { useEffect, useRef } from 'react';
import { experienceData } from '../data/experience';

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      sectionRef.current?.querySelectorAll('.scroll-reveal').forEach((t) => {
        gsap.fromTo(t, { y: 36, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: t, start: 'top 88%', once: true },
        });
      });
    };
    init();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 bg-canvas border-t border-border">
      <div className="section-wrap">
        {/* Label row */}
        <div className="section-label-row">
          <span className="label text-muted">04 / EXPERIENCE</span>
          <div className="line" />
        </div>

        {/* Header */}
        <div className="scroll-reveal mb-14">
          <h2 className="font-display font-bold text-ink text-display-lg leading-tight">
            Industry experience &{' '}
            <span className="text-cobalt">real-world</span> impact.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 border-l border-border space-y-14">
          {experienceData.map((exp, idx) => (
            <div key={idx} className="scroll-reveal relative">
              {/* Timeline dot */}
              <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-main border-2 border-cobalt" />

              {/* Card */}
              <div className="rounded-lg border border-border bg-surface shadow-card p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-5 pb-5 border-b border-border">
                  <div>
                    <div className="tag mb-2">{exp.type}</div>
                    <h3 className="font-display font-bold text-ink text-xl mb-0.5">{exp.role}</h3>
                    <div className="font-display font-semibold text-cobalt text-base">{exp.company}</div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 shrink-0">
                    <span className="label text-muted border border-border rounded px-2.5 py-1.5">{exp.period}</span>
                    <span className="label text-muted border border-border rounded px-2.5 py-1.5">{exp.location}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-muted leading-relaxed mb-5">{exp.summary}</p>

                {/* Bullets */}
                <div className="space-y-2.5 mb-6">
                  {exp.highlights.map((h, hi) => (
                    <div key={hi} className="flex items-start gap-2.5 text-sm text-muted">
                      <span className="text-cobalt mt-0.5 shrink-0">→</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Impact badges */}
                <div className="flex flex-wrap gap-2 mb-5 pb-5 border-b border-border">
                  {exp.impactBadges.map((b) => (
                    <span key={b} className="label text-ink border border-border rounded px-2.5 py-1 bg-canvas">{b}</span>
                  ))}
                </div>

                {/* Skills used */}
                <div>
                  <div className="label text-faint mb-2">TECHNOLOGIES APPLIED</div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.skillsUsed.map((s) => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
