import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          'ice-white': '#F6FAFC',
          'light-blue': '#EAF7FC',
          'sky-blue': '#57BFE5',
          navy: '#17314D',
          dark: '#18212B',
          gray: '#697583',
          'soft-border': '#E2E8F0',
        },
        edition: {
          deochan: {
            DEFAULT: '#75D5E8',
            soft: '#E6F8FC',
            dark: '#0284C7',
          },
          sucmanh: {
            DEFAULT: '#DC3348',
            soft: '#FEECEE',
            dark: '#B91C1C',
          },
          thugian: {
            DEFAULT: '#9678D0',
            soft: '#F4EEFB',
            dark: '#7C3AED',
          },
          trehoa: {
            DEFAULT: '#4D6F9C',
            soft: '#EDF3F9',
            dark: '#1E3A8A',
            accent: '#06B6D4',
          },
        },
      },
      fontFamily: {
        sans: ['var(--font-vietnam)', 'var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-vietnam)', 'sans-serif'],
      },
      boxShadow: {
        'clean-subtle': '0 4px 20px -2px rgba(23, 49, 77, 0.05)',
        'clean-hover': '0 20px 40px -10px rgba(23, 49, 77, 0.1)',
        'glow-sky': '0 0 40px -10px rgba(87, 191, 229, 0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
