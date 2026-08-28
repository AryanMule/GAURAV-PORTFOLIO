/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main:    '#F5F4EF',
        surface: '#FFFFFF',
        canvas:  '#ECEBE5',
        ink:     '#111111',
        muted:   '#686868',
        faint:   '#9A9A9A',
        border:  '#D8D7D1',
        cobalt:  '#3155FF',
        coral:   '#FF5A5F',
        green:   '#18A874',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans:    ['"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(3.5rem,8vw,7rem)',    { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-xl':  ['clamp(2.8rem,6vw,5rem)',    { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-lg':  ['clamp(2rem,4vw,3.25rem)',   { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
        'display-md':  ['clamp(1.5rem,3vw,2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        'label':       ['0.6875rem',                 { lineHeight: '1', letterSpacing: '0.08em' }],
        'label-lg':    ['0.75rem',                   { lineHeight: '1', letterSpacing: '0.1em' }],
      },
      boxShadow: {
        'card':    '0 4px 20px rgba(0,0,0,0.06)',
        'card-lg': '0 8px 40px rgba(0,0,0,0.08)',
        'cobalt':  '0 4px 20px rgba(49,85,255,0.20)',
        'panel':   '0 2px 16px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.06)',
      },
      animation: {
        'float-a': 'floatA 6s ease-in-out infinite',
        'float-b': 'floatB 8s ease-in-out infinite',
        'float-c': 'floatC 7s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        floatA: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':     { transform: 'translateY(-10px) rotate(0.5deg)' },
        },
        floatB: {
          '0%,100%': { transform: 'translateY(0px) rotate(-0.5deg)' },
          '50%':     { transform: 'translateY(-14px) rotate(0.3deg)' },
        },
        floatC: {
          '0%,100%': { transform: 'translateY(-6px) rotate(0.3deg)' },
          '50%':     { transform: 'translateY(6px) rotate(-0.3deg)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
