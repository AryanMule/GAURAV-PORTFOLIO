import { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Preloader }     from './components/Preloader';
import { CustomCursor }  from './components/CustomCursor';
import { BackgroundGrid } from './components/InteractiveCanvas';
import { Navbar }        from './sections/Navbar';
import { Hero }          from './sections/Hero';
import { About }         from './sections/About';
import { Skills }        from './sections/Skills';
import { Projects }      from './sections/Projects';
import { Experience }    from './sections/Experience';
import { EducationCertifications } from './sections/EducationCertifications';
import { Contact }       from './sections/Contact';
import { Footer }        from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) { setLoading(false); return; }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-main text-ink">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <CustomCursor />
      <BackgroundGrid />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <EducationCertifications />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
