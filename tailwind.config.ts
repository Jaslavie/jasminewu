import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
        serif: ['var(--font-serif)'],
        subheading: ['var(--font-subheading)'],
      },
      colors: {
        background: 'var(--color-background)',
        outline: 'var(--color-outline)',
        cardBorder: 'var(--color-card-border)',
        text: {
            title: 'var(--color-text-title)',
            heading: 'var(--color-text-heading)',
            body: 'var(--color-text-body)',
            subheading: 'var(--color-text-subheading)',
            gradient: 'var(--color-text-gradient)',
        },
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [],
}

export default config
