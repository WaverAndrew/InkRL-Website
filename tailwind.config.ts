import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        'muted-gray': 'var(--muted-gray)',
        'accent-yellow': 'var(--accent-yellow)',
        'accent-blue': 'var(--accent-blue)',
      },
      fontFamily: {
        mono: ['var(--font-mono)'],
        sans: ['var(--font-sans)'],
      },
      container: {
        center: true,
        padding: '1.5rem',
      },
    },
  },
  plugins: [],
}
export default config

