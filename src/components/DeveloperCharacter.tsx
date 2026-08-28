import React, { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────────────────────
   DEVELOPER CHARACTER SVG
   Original illustrated character for Gaurav Patil's portfolio.
   Structured into animatable layers for GSAP.
   Style: Clean editorial line illustration, minimal color.
   ──────────────────────────────────────────────────────────── */

interface DeveloperCharacterProps {
  className?: string;
}

export const DeveloperCharacter: React.FC<DeveloperCharacterProps> = ({ className = '' }) => {
  const charRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const importGsap = async () => {
      const { gsap } = await import('gsap');

      const svg = charRef.current;
      if (!svg) return;

      const body = svg.querySelector('#char-body');
      const head = svg.querySelector('#char-head');
      const laptop = svg.querySelector('#char-laptop');
      const hair = svg.querySelector('#char-hair');
      const eyeL = svg.querySelector('#char-eye-l');
      const eyeR = svg.querySelector('#char-eye-r');
      const shadow = svg.querySelector('#char-shadow');

      // Body float
      if (body) {
        gsap.to(body, {
          y: -8,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Head gentle bob (slower, smaller)
      if (head) {
        gsap.to(head, {
          y: -4,
          rotation: 0.8,
          transformOrigin: '50% 100%',
          duration: 4.2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.3,
        });
      }

      // Hair secondary motion
      if (hair) {
        gsap.to(hair, {
          y: -3,
          skewX: 0.5,
          duration: 3.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 0.6,
        });
      }

      // Laptop subtle tilt
      if (laptop) {
        gsap.to(laptop, {
          rotation: 0.8,
          transformOrigin: '50% 100%',
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: 1,
        });
      }

      // Shadow breathe
      if (shadow) {
        gsap.to(shadow, {
          scaleX: 0.88,
          scaleY: 0.9,
          transformOrigin: '50% 50%',
          opacity: 0.5,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Eye blink loop
      const blinkEyes = () => {
        if (!eyeL || !eyeR) return;
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 3.5 });
        tl.to([eyeL, eyeR], { scaleY: 0.1, transformOrigin: '50% 50%', duration: 0.08, ease: 'power2.in' })
          .to([eyeL, eyeR], { scaleY: 1, transformOrigin: '50% 50%', duration: 0.12, ease: 'power2.out' })
          .to([eyeL, eyeR], { scaleY: 0.1, transformOrigin: '50% 50%', duration: 0.08, delay: 0.06, ease: 'power2.in' })
          .to([eyeL, eyeR], { scaleY: 1, transformOrigin: '50% 50%', duration: 0.12, ease: 'power2.out' });
      };
      blinkEyes();
    };

    importGsap();
  }, []);

  return (
    <svg
      ref={charRef}
      className={className}
      viewBox="0 0 360 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      {/* ── SHADOW ── */}
      <g id="char-shadow">
        <ellipse cx="180" cy="558" rx="88" ry="12" fill="#D8D7D1" />
      </g>

      {/* ── BODY / TORSO ── */}
      <g id="char-body">

        {/* Shoes */}
        <g id="char-shoes">
          {/* Left shoe */}
          <rect x="120" y="500" width="48" height="20" rx="10" fill="#111111"/>
          <rect x="116" y="510" width="8" height="10" rx="4" fill="#111111"/>
          {/* Right shoe */}
          <rect x="192" y="500" width="48" height="20" rx="10" fill="#111111"/>
          <rect x="236" y="510" width="8" height="10" rx="4" fill="#111111"/>
          {/* Shoe lace detail */}
          <line x1="130" y1="508" x2="158" y2="508" stroke="#F5F4EF" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="202" y1="508" x2="230" y2="508" stroke="#F5F4EF" strokeWidth="1.5" strokeLinecap="round"/>
        </g>

        {/* Legs */}
        <g id="char-legs">
          {/* Left leg */}
          <rect x="128" y="390" width="44" height="118" rx="8" fill="#2A2A3E"/>
          {/* Right leg */}
          <rect x="188" y="390" width="44" height="118" rx="8" fill="#2A2A3E"/>
          {/* Cargo pocket L */}
          <rect x="133" y="420" width="20" height="24" rx="4" fill="none" stroke="#F5F4EF" strokeWidth="1.2" opacity="0.4"/>
          {/* Cargo pocket R */}
          <rect x="207" y="420" width="20" height="24" rx="4" fill="none" stroke="#F5F4EF" strokeWidth="1.2" opacity="0.4"/>
        </g>

        {/* Torso / Hoodie */}
        <g id="char-torso">
          {/* Main hoodie body */}
          <path d="M118 240 Q104 260 100 320 L100 395 Q100 402 107 402 L253 402 Q260 402 260 395 L260 320 Q256 260 242 240 Z" fill="#FFFFFF" stroke="#D8D7D1" strokeWidth="1.5"/>
          {/* Hoodie kangaroo pocket */}
          <path d="M148 330 Q148 360 180 360 Q212 360 212 330 L212 310 Q212 305 207 305 L153 305 Q148 305 148 310 Z" fill="#ECEBE5" stroke="#D8D7D1" strokeWidth="1"/>
          {/* Center zip line */}
          <line x1="180" y1="250" x2="180" y2="360" stroke="#D8D7D1" strokeWidth="1" strokeDasharray="3 4"/>
          {/* Hoodie drawstring */}
          <path d="M165 256 Q172 270 180 270 Q188 270 195 256" stroke="#D8D7D1" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          {/* Cobalt accent stripe on sleeve */}
          <rect x="100" y="270" width="18" height="4" rx="2" fill="#3155FF" opacity="0.7"/>
          <rect x="242" y="270" width="18" height="4" rx="2" fill="#3155FF" opacity="0.7"/>
        </g>

        {/* Left arm (raised, holding laptop) */}
        <g id="char-arm-left">
          <path d="M118 248 Q80 260 64 310 Q58 330 66 338 Q74 346 82 338 Q88 316 104 300 Z" fill="#FFFFFF" stroke="#D8D7D1" strokeWidth="1.5"/>
          {/* Left hand */}
          <ellipse cx="68" cy="345" rx="14" ry="12" fill="#FDDCB5" stroke="#D8D7D1" strokeWidth="1.2"/>
          {/* Fingers */}
          <path d="M58 340 Q54 330 58 326 Q62 322 66 328" stroke="#D8D7D1" strokeWidth="1" fill="none" strokeLinecap="round"/>
          <path d="M62 337 Q56 325 62 320 Q68 316 70 324" stroke="#D8D7D1" strokeWidth="1" fill="none" strokeLinecap="round"/>
        </g>

        {/* Right arm (hanging naturally, slightly gestured) */}
        <g id="char-arm-right">
          <path d="M242 248 Q272 262 280 298 Q284 316 278 322 Q272 328 266 320 Q260 300 248 290 Z" fill="#FFFFFF" stroke="#D8D7D1" strokeWidth="1.5"/>
          {/* Right hand */}
          <ellipse cx="278" cy="328" rx="13" ry="11" fill="#FDDCB5" stroke="#D8D7D1" strokeWidth="1.2"/>
        </g>

        {/* LAPTOP */}
        <g id="char-laptop">
          {/* Laptop base/keyboard (held by left arm) */}
          <rect x="42" y="318" width="100" height="62" rx="6" fill="#ECEBE5" stroke="#D8D7D1" strokeWidth="1.5"/>
          {/* Keyboard area */}
          <rect x="50" y="326" width="84" height="46" rx="4" fill="#FFFFFF" stroke="#D8D7D1" strokeWidth="1"/>
          {/* Keyboard rows */}
          <rect x="54" y="330" width="76" height="5" rx="2" fill="#ECEBE5"/>
          <rect x="54" y="339" width="76" height="5" rx="2" fill="#ECEBE5"/>
          <rect x="54" y="348" width="60" height="5" rx="2" fill="#ECEBE5"/>
          <rect x="54" y="357" width="40" height="4" rx="2" fill="#ECEBE5"/>
          {/* Screen (slightly open / angled) */}
          <path d="M46 318 L54 248 L140 252 L142 322 Z" fill="#111111" stroke="#111111" strokeWidth="1.5" strokeLinejoin="round"/>
          {/* Screen content */}
          <rect x="58" y="256" width="78" height="58" rx="3" fill="#1A1A2E"/>
          {/* Code lines on screen */}
          <rect x="62" y="262" width="30" height="3" rx="1.5" fill="#3155FF" opacity="0.9"/>
          <rect x="66" y="269" width="44" height="2.5" rx="1.25" fill="#18A874" opacity="0.8"/>
          <rect x="66" y="275" width="36" height="2.5" rx="1.25" fill="#F5F4EF" opacity="0.5"/>
          <rect x="66" y="281" width="50" height="2.5" rx="1.25" fill="#18A874" opacity="0.7"/>
          <rect x="70" y="287" width="28" height="2.5" rx="1.25" fill="#F5F4EF" opacity="0.4"/>
          <rect x="62" y="293" width="38" height="2.5" rx="1.25" fill="#FF5A5F" opacity="0.7"/>
          {/* Camera dot */}
          <circle cx="97" cy="254" r="2" fill="#333"/>
        </g>

      </g>

      {/* ── HEAD ── */}
      <g id="char-head">

        {/* Neck */}
        <rect x="168" y="190" width="24" height="30" rx="6" fill="#FDDCB5"/>

        {/* Head shape */}
        <ellipse cx="180" cy="155" rx="52" ry="56" fill="#FDDCB5"/>

        {/* Ear L */}
        <path d="M128 148 Q120 148 120 158 Q120 168 128 168" fill="#FDDCB5" stroke="#D8D7D1" strokeWidth="1"/>
        {/* Ear R */}
        <path d="M232 148 Q240 148 240 158 Q240 168 232 168" fill="#FDDCB5" stroke="#D8D7D1" strokeWidth="1"/>

        {/* HAIR */}
        <g id="char-hair">
          <path d="M128 120 Q130 80 180 75 Q230 70 232 120 Q220 100 210 108 Q198 90 180 90 Q162 88 150 108 Q140 100 128 120 Z" fill="#1C1008"/>
          {/* Fringe detail */}
          <path d="M148 108 Q155 95 165 100 Q172 88 180 90" stroke="#1C1008" strokeWidth="2" fill="none"/>
          <path d="M212 108 Q205 95 195 100 Q188 88 180 90" stroke="#1C1008" strokeWidth="2" fill="none"/>
        </g>

        {/* Eyebrows */}
        <path d="M154 130 Q163 125 172 128" stroke="#1C1008" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M188 128 Q197 125 206 130" stroke="#1C1008" strokeWidth="2.5" strokeLinecap="round" fill="none"/>

        {/* Eyes */}
        <g id="char-eye-l">
          <ellipse cx="162" cy="145" rx="8" ry="9" fill="white" stroke="#D8D7D1" strokeWidth="1"/>
          <ellipse cx="163" cy="146" rx="5" ry="6" fill="#1C1008"/>
          <ellipse cx="161" cy="144" rx="1.5" ry="1.5" fill="white"/>
        </g>
        <g id="char-eye-r">
          <ellipse cx="198" cy="145" rx="8" ry="9" fill="white" stroke="#D8D7D1" strokeWidth="1"/>
          <ellipse cx="199" cy="146" rx="5" ry="6" fill="#1C1008"/>
          <ellipse cx="197" cy="144" rx="1.5" ry="1.5" fill="white"/>
        </g>

        {/* Nose */}
        <path d="M176 155 Q180 165 184 155" stroke="#D8D7D1" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

        {/* Mouth — slight smile */}
        <path d="M168 172 Q180 180 192 172" stroke="#111111" strokeWidth="2" fill="none" strokeLinecap="round"/>

        {/* Headphones (subtle, editorial accent) */}
        <path d="M128 132 Q128 88 180 88 Q232 88 232 132" stroke="#111111" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <rect x="120" y="130" width="14" height="20" rx="7" fill="#111111"/>
        <rect x="226" y="130" width="14" height="20" rx="7" fill="#111111"/>
        {/* Cobalt accent on headphones */}
        <rect x="122" y="135" width="10" height="10" rx="5" fill="#3155FF"/>
        <rect x="228" y="135" width="10" height="10" rx="5" fill="#3155FF"/>

      </g>
    </svg>
  );
};
