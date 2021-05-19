const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  darkMode: false,
  purge: ['./components/**/*.js', './data/**/*.{md,mdx}', './pages/**/*.js'],
  theme: {
    extend: {
      boxShadow: {
        'prism-marker': 'inset 5px 0px 0 0px #ebcb8b',
      },
      colors: {
        accent: '#efa25c',
        middle: '#f04770',
        primary: '#3f425e',
        secondary: '#00bad9',
        prism: {
          base: '#f8f8f2',
          bg: '#2e3440',
          comment: '#636f88',
          function: '#88c0d0',
          marker: '#384153',
          number: '#b48ead',
          punctuation: '#81a1c1',
          regex: '#ebcb8b',
          string: '#a3be8c',
        },
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['Inconsolata', ...fontFamily.mono],
      },
      fontSize: {
        '7xl': '5rem',
      },
      strokeWidth: {
        '1-3': '1.3',
        '1-5': '1.5',
        '2-5': '2.5',
        3: '3',
        4: '4',
      },
      maxWidth: {
        media: '768px',
      },
    },
    screens: {
      sm: '600px',
      md: '700px',
      lg: '800px',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
