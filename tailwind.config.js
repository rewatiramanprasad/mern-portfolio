/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'loop-scroll-horizontal': 'loop-scroll-horizontal 50s linear infinite ',
        'loop-scroll-vertical': 'loop-scroll-vertical 50s linear infinite ',
        'roamWholeScreen': 'roamWholeScreen 50s linear infinite',
        'bounce-one': 'bounceOne 0.5s ease-in-out 1',
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
        roamWholeScreen: {
          '0%': {
            transform: 'translate(0, 0) rotate(0deg)',
          },

          '25%': {
            transform: ' translate(2vw, -5vh) rotate(30deg)',
            /* Move to the right and up */
          },

          '50%': {
            transform: 'translate(-80vw, 30vh) rotate(-30deg)',
            /* Move to the left and down */
          },

          '75%': {
            transform: ' translate(50vw, -10vh) rotate(20deg)',
            /* Move to the right and up */
          },

          '100%': {
            transform: ' translate(0, 0) rotate(0deg)',
            /* Back to center */
          },
        },
        bounceOne: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
