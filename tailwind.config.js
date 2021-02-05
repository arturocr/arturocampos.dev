const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        firago: ['FiraGO', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        sm2: '0.9375rem', // 15px label
        base: '1rem', // 16px base
        md: '1.0625rem', // 17px body
        lg: '1.125rem', // 18px heading
      },
      lineHeight: {
        snugish: '1.32',
        normal: '1.34',
      },
      maxWidth: {
        letter: '66.40625rem',
        a4: '64.609375rem',
      },
      height: {
        letter: '85.9375rem',
        'letter-col': '71.625rem',
        'letter-col-full': '77.9375rem',
        a4: '91.350883rem',
        'a4-col': '77.038383rem',
        'a4-col-full': '83.350883rem',
      },
      spacing: {
        '0.5': '2px', // 2px
        '1.5': '0.375rem', // 6px
        '1.6': '0.4375rem', // 7px
        '2.1': '0.5625rem', // 9px
        '2.5': '10px', // 10px
        '3.2': '0.8125rem', // 16px
        '4.5': '1.125rem', // 8px
        '11': '2.75rem', // 44px (once)
      },
      colors: {
        gray: {
          '150': 'hsl(210, 44%, 97%)',
          '250': 'hsl(210, 40%, 93.5%)',
          '550': 'hsl(218, 20%, 63%)',
          '650': 'hsl(216, 15%, 48%)',
          '750': 'hsl(214, 17%, 32%)',
          ...defaultTheme.colors.gray,
        },
        link: '#fbf3f3',
      },
    },
    screens: {
      print: { raw: 'print' },
      xsm: '500px',
      sm: '640px',
      md: '833px',
      lg: '1079.5px',
      xl: '1280px',
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    margin: ['responsive', 'last', 'first'],
    padding: ['responsive', 'last'],
  },
  plugins: [
    plugin(function ({ addBase, addUtilities, theme }) {
      addBase({
        body: {
          '-webkit-font-smoothing': 'subpixel-antialiased',
        },
      });

      /**
       * Project Spicific Utilities
       */
      const projectSpecificUtils = {
        '.border-inset': {
          'box-shadow': `inset 0 0 0 1px ${theme('colors.gray.400')}`,
        },
      };

      addUtilities(projectSpecificUtils, {
        variants: ['responsive'],
      });

      /**
       * CSS Multi-Column Layout Utilities
       */
      const columnUtils = {
        '.col-count-1': {
          'column-count': '1',
        },
        '.col-count-2': {
          'column-count': '2',
        },
        '.col-count-3': {
          'column-count': '3',
        },
        '.gap-md': {
          'column-gap': '2.1875rem',
        },
        '.break-after-col': {
          'break-after': 'column',
        },
        '.break-inside-avoid': {
          'break-inside': 'avoid',
        },
        '.break-after-avoid': {
          'break-after': 'avoid',
        },
        '.break-before-avoid': {
          'break-after': 'avoid',
        },
        '.col-fill-auto': {
          'column-fill': 'auto',
        },
        '.col-fill-balance': {
          'column-fill': 'balance',
        },
      };

      addUtilities(columnUtils, {
        variants: ['responsive'],
      });
    }),
  ],
};
