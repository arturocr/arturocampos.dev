const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  corePlugins: {
    container: false,
  },
  darkMode: false,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
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
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
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
  },
  variants: {
    extend: {
      borderColor: ['group-focus'],
      borderWidth: ['last', 'hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '700px',
          },
          '@screen lg': {
            maxWidth: '800px',
          },
        },
      });
    },
  ],
};
