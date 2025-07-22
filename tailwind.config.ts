import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
        'geist': ['Geist', 'sans-serif'],
        'geist-mono': ['Geist Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['12px', '1.4'],
        'sm': ['14px', '1.5'],
        'base': ['15px', '1.6'],
        'lg': ['18px', '1.5'],
        'xl': ['20px', '1.4'],
        '2xl': ['24px', '1.4'],
        '3xl': ['32px', '1.4'],
        '4xl': ['40px', '1.4'],
        '5xl': ['48px', '1.4'],
        '6xl': ['56px', '1.4'],
        '7xl': ['64px', '1.4'],
      },
      colors: {
        // Dynamic agent colors using CSS custom properties
        'agent-primary': 'var(--agent-primary)',
        'agent-secondary': 'var(--agent-secondary)', 
        'agent-accent': 'var(--agent-accent)',
        
        // Legacy brand color support (maps to agent-primary)
        brand: {
          DEFAULT: 'var(--agent-primary)',
          50: 'color-mix(in srgb, var(--agent-primary) 5%, white)',
          100: 'color-mix(in srgb, var(--agent-primary) 10%, white)',
          200: 'color-mix(in srgb, var(--agent-primary) 20%, white)',
          300: 'color-mix(in srgb, var(--agent-primary) 30%, white)',
          400: 'color-mix(in srgb, var(--agent-primary) 40%, white)',
          500: 'var(--agent-primary)',
          600: 'color-mix(in srgb, var(--agent-primary) 80%, black)',
          700: 'color-mix(in srgb, var(--agent-primary) 70%, black)',
          800: 'color-mix(in srgb, var(--agent-primary) 60%, black)',
          900: 'color-mix(in srgb, var(--agent-primary) 50%, black)',
          950: 'color-mix(in srgb, var(--agent-primary) 40%, black)',
        },
      },
    },
  },
  plugins: [],
} satisfies Config 