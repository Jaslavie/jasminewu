import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        outline: 'var(--color-outline)',
        cardBorder: 'var(--color-card-border)',
        text: {
          heading: 'var(--color-text-heading)',
          body: 'var(--color-text-body)',
          subheading: 'var(--color-text-subheading)',
          active: 'var(--color-text-active)'
        },
        accent: 'var(--color-accent)',
      },
      fontFamily: {
        sans: ['var(--font-body)'],
        serif: ['var(--font-serif)'],
        mono: ['var(--font-mono)'],
        subheading: ['var(--font-subheading)'],
      },
    },
  },
  plugins: [],
}

export default config
