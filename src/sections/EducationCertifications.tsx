import React, { useEffect, useRef } from 'react';
import { personalData } from '../data/personal';

export const EducationCertifications: React.FC = () => {
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
    <section id="education" ref={sectionRef} className="py-24 md:py-32 bg-main border-t border-border">
      <div className="section-wrap">
        {/* Label row */}
        <div className="section-label-row">
          <span className="label text-muted">05 / EDUCATION & CREDENTIALS</span>
          <div className="line" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Education (7 cols) */}
          <div className="lg:col-span-7 scroll-reveal">
            <div className="rounded-lg border border-border bg-surface shadow-card p-6 md:p-8">
              <div className="tag mb-4">BACHELOR OF ENGINEERING</div>
              <h3 className="font-display font-bold text-ink text-display-md leading-tight mb-2">
                {personalData.education.degree}
              </h3>
              <div className="font-display font-semibold text-cobalt text-base mb-1">
                {personalData.education.institution}
              </div>
              <p className="text-sm text-muted mb-6 leading-relaxed">
                {personalData.education.details}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-border">
                <div>
                  <div className="label text-faint mb-1">CUMULATIVE GPA</div>
                  <div className="font-display font-bold text-3xl text-ink">{personalData.education.cgpa}</div>
                </div>
                <div>
                  <div className="label text-faint mb-1">DURATION</div>
                  <div className="font-display font-semibold text-ink text-lg">{personalData.education.period}</div>
                </div>
                <div className="tag">Computer Science Engineering</div>
              </div>
            </div>
          </div>

          {/* Certifications + Leadership (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Certifications */}
            <div className="scroll-reveal rounded-lg border border-border bg-surface shadow-card p-5">
              <div className="label text-cobalt mb-4">CERTIFICATIONS</div>
              <div className="space-y-3">
                {personalData.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-2 pb-3 border-b border-border last:border-0 last:pb-0">
                    <div>
                      <div className="font-display font-semibold text-ink text-sm mb-0.5">{cert.title}</div>
                      <div className="text-xs text-cobalt font-medium">{cert.issuer}</div>
                      <div className="text-xs text-muted mt-0.5">{cert.type}</div>
                    </div>
                    <div className="tag text-green border-green/30 bg-green/5 shrink-0">VERIFIED</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership */}
            <div className="scroll-reveal rounded-lg border border-border bg-surface shadow-card p-5">
              <div className="label text-muted mb-4">LEADERSHIP & EXTRACURRICULAR</div>
              {personalData.leadership.map((item, idx) => (
                <div key={idx}>
                  <div className="font-display font-semibold text-ink text-sm mb-1 flex items-center gap-2">
                    <span className="text-cobalt">★</span>
                    {item.organization}
                  </div>
                  <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
