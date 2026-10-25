/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#06080d',
          900: '#0b0f19',
          850: '#101624',
          800: '#161e31',
          700: '#222d47',
          600: '#334155',
        },
        cyan: {
          DEFAULT: '#00f0ff',
          glow: 'rgba(0, 240, 255, 0.4)',
          400: '#22d3ee',
          500: '#06b6d4',
        },
        accent: {
          emerald: '#10b981',
          indigo: '#6366f1',
          violet: '#8b5cf6',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Syne', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -4px rgba(0, 240, 255, 0.35)',
        'glow-cyan-sm': '0 0 12px -2px rgba(0, 240, 255, 0.4)',
        'glow-emerald': '0 0 25px -4px rgba(16, 185, 129, 0.35)',
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.07)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(0, 240, 255, 0.3), 0 0 25px -5px rgba(0, 240, 255, 0.2)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
};
