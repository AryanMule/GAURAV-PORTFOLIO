import React from 'react';
import { personalData } from '../data/personal';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => (
  <footer className="py-8 bg-main border-t border-border">
    <div className="section-wrap flex flex-col sm:flex-row items-center justify-between gap-4">
      {/* Brand */}
      <div className="flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-md bg-ink flex items-center justify-center">
          <span className="font-display font-bold text-[10px] text-white">GP</span>
        </div>
        <div>
          <div className="font-display font-semibold text-ink text-sm">{personalData.name}</div>
          <div className="label text-faint">Software Developer · Full Stack</div>
        </div>
      </div>

      {/* Social + Back-to-top */}
      <div className="flex items-center gap-4">
        <a href={personalData.socials.github.url} target="_blank" rel="noopener noreferrer"
           aria-label="GitHub" className="text-muted hover:text-ink transition-colors">
          <GithubIcon className="w-4 h-4" />
        </a>
        <a href={personalData.socials.linkedin.url} target="_blank" rel="noopener noreferrer"
           aria-label="LinkedIn" className="text-muted hover:text-cobalt transition-colors">
          <LinkedinIcon className="w-4 h-4" />
        </a>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          className="flex items-center justify-center w-8 h-8 rounded border border-border text-muted hover:text-ink hover:border-ink transition-all ml-1"
        >
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>

    <div className="section-wrap mt-4 pt-4 border-t border-border text-center">
      <span className="label text-faint">
        © {new Date().getFullYear()} Gaurav Patil · Built with React, TypeScript, Tailwind CSS & GSAP
      </span>
    </div>
  </footer>
);
