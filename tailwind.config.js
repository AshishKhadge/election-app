/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Cabinet Grotesk"', '"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ink: {
          DEFAULT: '#0C0E1A',
          50: '#f5f5f8',
          100: '#e8e9f0',
          200: '#c8cad8',
          300: '#9799b0',
          400: '#6e7090',
          500: '#4a4d6b',
          600: '#363952',
          700: '#272a3d',
          800: '#1a1c2e',
          900: '#0C0E1A',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#F0D080',
          dark: '#8B6B1E',
        },
        cobalt: {
          DEFAULT: '#1B3A6B',
          light: '#2A5BA8',
          lighter: '#4A80D4',
          dark: '#0F2040',
        },
        crimson: {
          DEFAULT: '#A8252A',
          light: '#D44249',
          dark: '#6B1518',
        },
        sage: {
          DEFAULT: '#2A6B4A',
          light: '#3E9B6C',
          dark: '#1A4530',
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
