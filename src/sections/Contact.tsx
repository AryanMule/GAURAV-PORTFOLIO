import React, { useState, useRef, useEffect } from 'react';
import { personalData } from '../data/personal';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { Copy, Check, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [copied, setCopied]       = useState(false);
  const [form, setForm]           = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleCopy = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    try { confetti({ particleCount: 40, spread: 55, origin: { y: 0.8 }, colors: ['#3155FF','#111111','#18A874'] }); } catch (_) {}
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      try { confetti({ particleCount: 70, spread: 60, origin: { y: 0.65 } }); } catch (_) {}
      setTimeout(() => { setSubmitted(false); setForm({ name:'', email:'', message:'' }); }, 4000);
    }, 900);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-canvas border-t border-border overflow-hidden">
      <div className="section-wrap">
        {/* Label row */}
        <div className="section-label-row">
          <span className="label text-muted">06 / CONTACT</span>
          <div className="line" />
        </div>

        {/* Giant editorial CTA */}
        <div className="scroll-reveal mb-16 relative">
          {/* Background ghost text */}
          <div
            className="absolute -top-4 -left-2 font-display font-bold text-ink pointer-events-none select-none"
            style={{ fontSize: 'clamp(5rem, 15vw, 14rem)', opacity: 0.04, lineHeight: 1, letterSpacing: '-0.05em' }}
            aria-hidden="true"
          >
            HELLO
          </div>

          <h2
            className="relative font-display font-bold text-ink leading-[1.0]"
            style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)', letterSpacing: '-0.03em' }}
          >
            LET&apos;S{' '}
            <span className="text-cobalt">BUILD</span>
            <br />
            SOMETHING
            <span className="text-coral">.</span>
          </h2>
          <p className="mt-4 text-base text-muted max-w-md leading-relaxed">
            Open to full-time software engineering roles, full-stack developer opportunities, and collaborative technical projects.
          </p>
        </div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left: Direct contact */}
          <div className="space-y-4">
            {/* Email copy */}
            <div className="scroll-reveal rounded-lg border border-border bg-surface shadow-card p-5">
              <div className="label text-faint mb-1.5">EMAIL</div>
              <div className="font-mono text-sm font-medium text-ink mb-4">{personalData.email}</div>
              <button
                onClick={handleCopy}
                className="btn-primary w-full justify-center !py-3"
              >
                {copied
                  ? <><Check className="w-4 h-4 text-green" /> Copied!</>
                  : <><Copy className="w-3.5 h-3.5" /> COPY EMAIL</>
                }
              </button>
            </div>

            {/* Social links */}
            <div className="scroll-reveal rounded-lg border border-border bg-surface shadow-card p-5 space-y-3">
              <div className="label text-faint mb-1">PROFESSIONAL PROFILES</div>
              <a href={personalData.socials.github.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-ink transition-colors group">
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-muted group-hover:text-ink" />
                  <div>
                    <div className="text-xs font-display font-bold text-ink">GitHub</div>
                    <div className="label text-faint">{personalData.socials.github.handle}</div>
                  </div>
                </div>
                <span className="label text-muted group-hover:text-ink transition-colors">↗</span>
              </a>

              <a href={personalData.socials.linkedin.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-border hover:border-cobalt transition-colors group">
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-muted group-hover:text-cobalt" />
                  <div>
                    <div className="text-xs font-display font-bold text-ink">LinkedIn</div>
                    <div className="label text-faint">{personalData.socials.linkedin.handle}</div>
                  </div>
                </div>
                <span className="label text-cobalt group-hover:translate-x-0.5 transition-transform">↗</span>
              </a>
            </div>
          </div>

          {/* Right: Message form */}
          <div className="scroll-reveal rounded-lg border border-border bg-surface shadow-card p-6 md:p-8">
            <div className="label text-ink mb-5">SEND A MESSAGE</div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-green" />
                </div>
                <div className="font-display font-bold text-ink text-lg">Message sent!</div>
                <p className="text-xs text-muted">I'll get back to you shortly at your email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { id: 'c-name', label: 'YOUR NAME', type: 'text', key: 'name', placeholder: 'Alex Morgan' },
                  { id: 'c-email', label: 'EMAIL', type: 'email', key: 'email', placeholder: 'alex@company.com' },
                ].map(({ id, label, type, key, placeholder }) => (
                  <div key={key}>
                    <label htmlFor={id} className="label text-faint block mb-1.5">{label}</label>
                    <input
                      id={id} type={type} required placeholder={placeholder}
                      value={form[key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                      className="w-full rounded border border-border bg-main px-3.5 py-2.5 text-sm font-sans text-ink placeholder:text-faint focus:border-cobalt focus:outline-none transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="c-msg" className="label text-faint block mb-1.5">MESSAGE</label>
                  <textarea
                    id="c-msg" rows={4} required
                    placeholder="I'd like to discuss a role / project opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded border border-border bg-main px-3.5 py-2.5 text-sm font-sans text-ink placeholder:text-faint focus:border-cobalt focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" disabled={submitting} className="btn-primary w-full justify-center !py-3">
                  {submitting
                    ? <span className="animate-pulse">Sending…</span>
                    : <><Send className="w-3.5 h-3.5" /> SEND MESSAGE</>
                  }
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
