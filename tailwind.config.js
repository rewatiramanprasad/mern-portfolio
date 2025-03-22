/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'loop-scroll-horizontal': 'loop-scroll-horizontal 50s linear infinite ',
        'loop-scroll-vertical': 'loop-scroll-vertical 50s linear infinite ',
      },
      keyframes: {
        'loop-scroll-horizontal': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'loop-scroll-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-100%)' },
        },
      },
    },
  },
  plugins: [],
  darkMode:'class'
}
