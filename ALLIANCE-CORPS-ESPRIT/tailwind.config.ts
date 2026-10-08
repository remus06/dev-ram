import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#2B2622',
        muted: '#6B6158',
        sand: '#F7F2EB',
        shell: '#EFE6DA',
        line: '#E2D6C6',
        sage: { DEFAULT: '#56705F', dark: '#3C5245', light: '#E4EBE3' },
        clay: { DEFAULT: '#A85F3A', light: '#F3E2D6' }
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-source)', 'sans-serif']
      },
      maxWidth: { prose: '68ch' }
    }
  },
  plugins: []
};

export default config;
