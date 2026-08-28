import React, { useState, useEffect } from 'react';
import { personalData } from '../data/personal';
import { Download, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection]   = useState('hero');

  const links = [
    { label: 'ABOUT',      href: '#about'      },
    { label: 'WORK',       href: '#projects'   },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACT',    href: '#contact'    },
  ];

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const sections = ['hero','about','skills','projects','experience','education','contact'];
      const pos = window.scrollY + 200;
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(s);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-main/90 backdrop-blur-md border-b border-border'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between">

        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt rounded">
          <div className="w-8 h-8 rounded-lg bg-ink flex items-center justify-center">
            <span className="font-display font-bold text-xs text-white tracking-wider">GP</span>
          </div>
          <div>
            <div className="font-display font-bold text-sm text-ink tracking-tight group-hover:text-cobalt transition-colors">
              {personalData.name}
            </div>
            <div className="label text-green flex items-center gap-1">
              <span className="w-1 h-1 rounded-full bg-green inline-block" />
              Open to work
            </div>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {links.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive  = activeSection === sectionId ||
              (sectionId === 'projects' && activeSection === 'projects');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`label transition-colors relative pb-0.5 ${
                  isActive ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-px bg-cobalt" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <a href={personalData.socials.github.url} target="_blank" rel="noopener noreferrer"
            aria-label="GitHub" className="text-muted hover:text-ink transition-colors p-1">
            <GithubIcon className="w-4 h-4" />
          </a>
          <a href={personalData.socials.linkedin.url} target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn" className="text-muted hover:text-cobalt transition-colors p-1">
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            download="Gaurav_Patil_Resume.pdf"
            className="btn-primary !py-2 !px-3.5 !text-[0.65rem] !gap-1.5"
          >
            <Download className="w-3 h-3" />
            RESUME ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a href="/resume.pdf" download className="label text-muted border border-border rounded px-2.5 py-1.5 flex items-center gap-1">
            <Download className="w-3 h-3" />
            CV
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded border border-border text-muted hover:text-ink"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-main border-t border-border px-6 py-6">
          <nav className="flex flex-col gap-0">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="label text-muted hover:text-ink py-3 border-b border-border flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-faint">↗</span>
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 mt-5">
            <a href={personalData.socials.github.url} target="_blank" rel="noopener noreferrer"
              className="text-muted hover:text-ink transition-colors">
              <GithubIcon className="w-4 h-4" />
            </a>
            <a href={personalData.socials.linkedin.url} target="_blank" rel="noopener noreferrer"
              className="text-muted hover:text-cobalt transition-colors">
              <LinkedinIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
