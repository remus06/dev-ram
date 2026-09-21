import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14181A',
        paper: '#F4F4EF',
        line: '#DEDED4',
        accent: {
          DEFAULT: '#1F6F63',
          dark: '#154F46',
          light: '#E4EEEC'
        },
        clay: '#C0653B',
        muted: '#5B6360'
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace']
      },
      maxWidth: {
        prose: '68ch'
      }
    }
  },
  plugins: []
};

export default config;
