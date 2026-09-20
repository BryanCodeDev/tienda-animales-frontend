/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFFDF8',
        carbon: '#171717',
        primary: '#FF7A45',
        secondary: '#F4B942',
        natural: '#6FAF5F',
        gray: {
          50: '#F5F5F5',
          100: '#EAEAEA',
          200: '#E0E0E0',
          300: '#CCCCCC',
          400: '#B3B3B3',
          500: '#999999',
          600: '#6B6B6B',
          700: '#4D4D4D',
          800: '#333333',
          900: '#171717',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xs': ['1.625rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-sm': ['2.125rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xl': ['4.5rem', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-2xl': ['5.5rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
