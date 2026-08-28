import React, { useEffect } from 'react';
import type { Project } from '../data/projects';
import { X, ExternalLink, CheckCircle2, ShieldCheck, Cpu, Server } from 'lucide-react';
import { GithubIcon } from './Icons';

interface Props {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<Props> = ({ project, onClose }) => {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', esc);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', esc);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div role="dialog" aria-modal="true" aria-labelledby="modal-title"
         className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div onClick={onClose} className="absolute inset-0 bg-ink/40 backdrop-blur-sm" />

      {/* Modal */}
      <div className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-xl bg-surface border border-border shadow-card-lg p-6 md:p-8">
        
        {/* Close */}
        <button onClick={onClose} aria-label="Close"
          className="absolute right-4 top-4 w-9 h-9 flex items-center justify-center rounded-lg border border-border text-muted hover:text-ink hover:border-ink transition-colors">
          <X className="w-4 h-4" />
        </button>

        {/* Badge */}
        <div className="tag mb-4">{project.badge}</div>

        <h3 id="modal-title" className="font-display font-bold text-ink text-2xl md:text-3xl mb-1.5"
            style={{ letterSpacing: '-0.02em' }}>
          {project.title}
        </h3>
        <p className="text-sm text-muted mb-6">{project.subtitle}</p>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-7 pb-6 border-b border-border">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
             className="btn-secondary !py-2 !px-4 !text-[0.7rem]">
            <GithubIcon className="w-3.5 h-3.5" /> CODE REPO
          </a>
          <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer"
             className="btn-primary !py-2 !px-4 !text-[0.7rem]">
            <ExternalLink className="w-3.5 h-3.5" /> LIVE DEMO ↗
          </a>
          <span className="ml-auto flex items-center gap-1.5 label text-faint">
            <Server className="w-3 h-3" /> {project.deploymentPlatform}
          </span>
        </div>

        {/* Description */}
        <div className="mb-6">
          <div className="label text-cobalt flex items-center gap-1.5 mb-2.5">
            <Cpu className="w-3.5 h-3.5" /> OVERVIEW
          </div>
          <p className="text-sm text-muted leading-relaxed">{project.description}</p>
        </div>

        {/* Resume bullets */}
        <div className="mb-6 rounded-lg bg-canvas border border-border p-4">
          <div className="label text-ink mb-3">RESUME VERIFIED ACCOMPLISHMENTS</div>
          <ul className="space-y-2">
            {project.bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-muted">
                <CheckCircle2 className="w-4 h-4 text-cobalt shrink-0 mt-0.5" />{b}
              </li>
            ))}
          </ul>
        </div>

        {/* Architecture */}
        <div className="mb-6">
          <div className="label text-muted flex items-center gap-1.5 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> SYSTEM ARCHITECTURE
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.architectureHighlights.map((a, i) => (
              <div key={i} className="rounded-lg border border-border bg-canvas p-3">
                <div className="font-mono text-[9px] font-bold text-cobalt uppercase tracking-widest mb-1">{a.layer}</div>
                <div className="text-xs text-muted leading-relaxed">{a.details}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-6">
          <div className="label text-muted mb-3">KEY MODULES</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((f, i) => (
              <div key={i} className="rounded-lg border border-border bg-canvas p-3">
                <div className="text-xs font-display font-semibold text-ink mb-1">{f.title}</div>
                <div className="text-xs text-muted leading-relaxed">{f.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div>
          <div className="label text-faint mb-2">TECHNOLOGIES</div>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
