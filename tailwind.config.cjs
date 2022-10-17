/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html', './vacante/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        roboto: "'Roboto', sans-serif",
      },
      colors: {
        'cip-white': {
          200: '#fafafa',
          300: '#e5e5e5',
        },
        'cip-gray': {
          300: '#666666',
          400: '#525252',
          500: '#3e3e3e',
          600: '#2a2a2a',
        },
        'cip-orange': {
          300: '#ff8944',
          400: '#fe7530',
          500: '#ea611c',
          600: '#d64d08',
        },
        'cip-blue': {
          300: '#57a8ff',
          400: '#4394ff',
          500: '#2f80ed',
          600: '#1b6cd9',
        },
      },
    },
  },
  plugins: [],
};
