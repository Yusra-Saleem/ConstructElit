/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D4AF37',
          50: '#FCF7E6',
          100: '#F9F0CC',
          200: '#F1E199',
          300: '#E9D366',
          400: '#E0C433',
          500: '#D4AF37',
          600: '#A98B22',
          700: '#7C6619',
          800: '#4F4110',
          900: '#221C07',
          950: '#110E03',
        },
        charcoal: {
          DEFAULT: '#2A2A2A',
          50: '#E6E6E6',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#2A2A2A',
          600: '#222222',
          700: '#1A1A1A',
          800: '#111111',
          900: '#090909',
          950: '#040404',
        },
        dark: {
          DEFAULT: '#121212',
          50: '#E3E3E3',
          100: '#C7C7C7',
          200: '#8F8F8F',
          300: '#575757',
          400: '#1F1F1F',
          500: '#121212',
          600: '#0E0E0E',
          700: '#0B0B0B',
          800: '#070707',
          900: '#030303',
          950: '#020202',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out forwards',
        'slide-up': 'slideUp 0.5s ease-in-out forwards',
        'scale-in': 'scaleIn 0.5s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};