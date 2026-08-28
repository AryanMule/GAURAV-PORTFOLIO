import React from 'react';

/* ─────────────────────────────────────────────────────────────
   FLOATING UI PANELS
   Developer-context floating cards orbiting the character.
   Each has independent float animation via CSS + GSAP parallax.
   ──────────────────────────────────────────────────────────── */

interface PanelData {
  id: string;
  label: string;
  lines: { text: string; accent?: 'cobalt' | 'green' | 'coral' | 'muted' }[];
  animClass: string;
  posClass: string;
  delay: string;
}

const panels: PanelData[] = [
  {
    id: 'panel-react',
    label: 'REACT.JS',
    lines: [
      { text: 'components.tsx', accent: 'muted' },
      { text: 'useState([])', accent: 'cobalt' },
      { text: 'useEffect(() => {', accent: 'cobalt' },
      { text: '  fetchData()', accent: 'green' },
      { text: '})', accent: 'cobalt' },
    ],
    animClass: 'animate-float-a',
    posClass: '',
    delay: '0s',
  },
  {
    id: 'panel-api',
    label: 'REST API',
    lines: [
      { text: 'GET /api/projects', accent: 'cobalt' },
      { text: '→ 200 OK', accent: 'green' },
      { text: 'data: [3 items]', accent: 'muted' },
      { text: 'auth: JWT', accent: 'coral' },
    ],
    animClass: 'animate-float-b',
    posClass: '',
    delay: '1.2s',
  },
  {
    id: 'panel-db',
    label: 'MONGODB',
    lines: [
      { text: 'collections: 04', accent: 'cobalt' },
      { text: 'users: 1.2k', accent: 'muted' },
      { text: 'products: 360', accent: 'muted' },
      { text: 'indexed: true', accent: 'green' },
    ],
    animClass: 'animate-float-c',
    posClass: '',
    delay: '0.6s',
  },
  {
    id: 'panel-deploy',
    label: 'VERCEL',
    lines: [
      { text: 'status: live', accent: 'green' },
      { text: 'branch: main', accent: 'cobalt' },
      { text: 'deploy: 42s', accent: 'muted' },
      { text: 'uptime: 99.9%', accent: 'green' },
    ],
    animClass: 'animate-float-a',
    posClass: '',
    delay: '1.8s',
  },
];

const accentColor: Record<string, string> = {
  cobalt: '#3155FF',
  green:  '#18A874',
  coral:  '#FF5A5F',
  muted:  '#9A9A9A',
};

export const FloatingPanel: React.FC<{ panel: PanelData }> = ({ panel }) => (
  <div
    id={panel.id}
    className={`panel ${panel.animClass} select-none`}
    style={{ animationDelay: panel.delay }}
    aria-hidden="true"
  >
    <div
      className="text-[9px] font-mono font-bold tracking-widest mb-2 pb-1.5"
      style={{ color: '#3155FF', borderBottom: '1px solid #ECEBE5' }}
    >
      {panel.label}
    </div>
    <div className="space-y-0.5">
      {panel.lines.map((line, i) => (
        <div
          key={i}
          className="text-[10px] font-mono leading-snug"
          style={{ color: line.accent ? accentColor[line.accent] : '#111111' }}
        >
          {line.text}
        </div>
      ))}
    </div>
  </div>
);

export { panels };
