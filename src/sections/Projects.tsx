import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../data/projects';
import type { Project } from '../data/projects';
import { ProjectModal } from '../components/ProjectModal';
import { GithubIcon } from '../components/Icons';
import { ArrowUpRight, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [selected, setSelected] = useState<Project | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);
      sectionRef.current?.querySelectorAll('.scroll-reveal').forEach((t) => {
        gsap.fromTo(t, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: t, start: 'top 87%', once: true },
        });
      });
    };
    init();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 md:py-32 bg-main border-t border-border">
      <div className="section-wrap">
        {/* Label row */}
        <div className="section-label-row">
          <span className="label text-muted">03 / PROJECTS</span>
          <div className="line" />
        </div>

        {/* Header */}
        <div className="scroll-reveal flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <h2 className="font-display font-bold text-ink text-display-lg leading-tight">
            Production-ready{' '}
            <span className="text-cobalt">full-stack</span>{' '}
            applications.
          </h2>
          <p className="text-sm text-muted max-w-xs leading-relaxed">
            Built end-to-end with the MERN stack. Authentication, authorization, cloud storage, and database optimization.
          </p>
        </div>

        {/* Project list */}
        <div className="space-y-0">
          {projectsData.map((project, index) => (
            <article
              key={project.id}
              className="scroll-reveal group border-t border-border last:border-b py-10 md:py-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">

                {/* Left: Number + Title (8 cols) */}
                <div className="lg:col-span-8">
                  <div className="flex items-start gap-4 mb-4">
                    <span className="project-num mt-1 shrink-0">0{index + 1}</span>
                    <div>
                      <h3 className="font-display font-bold text-ink text-xl md:text-2xl leading-tight mb-1 group-hover:text-cobalt transition-colors"
                          style={{ letterSpacing: '-0.015em' }}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted">{project.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted leading-relaxed ml-8 mb-5 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Bullets */}
                  <div className="ml-8 space-y-2 mb-5">
                    {project.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-cobalt mt-1 shrink-0 text-xs">→</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="ml-8 flex flex-wrap gap-1.5">
                    {project.techStack.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right: Actions (4 cols) */}
                <div className="lg:col-span-4 flex flex-col gap-3 lg:items-end lg:justify-start lg:pt-1">
                  <button
                    onClick={() => setSelected(project)}
                    className="btn-primary !text-[0.7rem] !py-2.5 !px-4 w-full lg:w-auto justify-center"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    ARCHITECTURE ↗
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !text-[0.7rem] !py-2.5 !px-4 w-full lg:w-auto justify-center"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    CODE REPO
                  </a>

                  {/* Arch summary */}
                  <div className="mt-2 w-full lg:max-w-[200px] rounded-lg border border-border bg-canvas p-3 space-y-2">
                    {project.architectureHighlights.slice(0,2).map((arch, ai) => (
                      <div key={ai}>
                        <div className="font-mono text-[9px] font-bold text-cobalt uppercase tracking-wider mb-0.5">{arch.layer}</div>
                        <div className="text-[10px] text-muted leading-snug">{arch.details}</div>
                      </div>
                    ))}
                    <div className="label text-faint pt-1 flex items-center gap-1 cursor-pointer hover:text-ink"
                         onClick={() => setSelected(project)}>
                      VIEW FULL <ArrowUpRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};
