/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      screens: {
        'xs': '475px',
      },
      zIndex: {
        'nav': 1000,
        'modal': 1100,
        'tooltip': 1200,
      },
    },
  },
  plugins: [
    function({ addBase, theme }) {
      addBase({
        'html': { fontSize: '16px' },
        '@screen lg': {
          'html': { fontSize: '18px' },
        },
      })
    },
  ],
};