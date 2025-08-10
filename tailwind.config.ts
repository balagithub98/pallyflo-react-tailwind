import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0b1a63',
          primary: '#1147c7',
          gold: '#f8b400',
        }
      }
    },
  },
  plugins: [],
} satisfies Config
