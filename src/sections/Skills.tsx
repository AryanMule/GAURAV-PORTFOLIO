import React, { useEffect, useRef, useState } from 'react';
import { skillCategories, allSkillsList } from '../data/skills';

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      const el = sectionRef.current;
      if (!el) return;
      el.querySelectorAll('.scroll-reveal').forEach((t) => {
        gsap.fromTo(t, { y: 36, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: t, start: 'top 88%', once: true },
        });
      });
    };
    init();
  }, []);

  const allSkills = skillCategories.flatMap((c) => c.skills);
  const displayed = activeTab === 'all'
    ? skillCategories
    : skillCategories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" ref={sectionRef} className="py-24 md:py-32 bg-canvas border-t border-border">
      <div className="section-wrap">
        {/* Label row */}
        <div className="section-label-row">
          <span className="label text-muted">02 / SKILLS</span>
          <div className="line" />
        </div>

        {/* Header */}
        <div className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 items-end">
          <h2 className="font-display font-bold text-ink text-display-lg leading-tight">
            Tools, languages &{' '}
            <span className="text-cobalt">engineering stack.</span>
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Verified proficiencies from real-world internship experience, MERN stack projects,
            database engineering, and REST API design.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="scroll-reveal flex flex-wrap gap-2 mb-10 pb-5 border-b border-border">
          <button
            onClick={() => setActiveTab('all')}
            className={`label px-3 py-1.5 rounded border transition-all ${activeTab === 'all'
              ? 'bg-ink text-white border-ink'
              : 'text-muted border-border hover:text-ink hover:border-ink'}`}
          >
            ALL ({allSkills.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`label px-3 py-1.5 rounded border transition-all ${activeTab === cat.id
                ? 'bg-ink text-white border-ink'
                : 'text-muted border-border hover:text-ink hover:border-ink'}`}
            >
              {cat.title.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Skills: typography-first grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-16">
          {displayed.map((cat) => (
            <div key={cat.id} className="scroll-reveal">
              <div className="label text-cobalt mb-3">{cat.title.toUpperCase()}</div>
              <div className="space-y-0.5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-item group">
                    <span className="skill-dot" />
                    <span className="text-sm">{skill.name}</span>
                    {skill.proficiency === 'Certified Intermediate' && (
                      <span className="ml-auto text-[9px] font-mono text-green border border-green/30 rounded px-1.5 py-0.5">
                        CERTIFIED
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Running marquee */}
        <div className="scroll-reveal relative overflow-hidden rounded border border-border bg-surface py-3">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-surface to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-surface to-transparent z-10" />
          <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
            {[...allSkillsList, ...allSkillsList].map((s, i) => (
              <span key={i} className="label text-faint flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-cobalt inline-block" />{s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
