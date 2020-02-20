/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    screens: {
      sm: '576px',
      md: '639px',
      lg: '767px',
      xl: '1280px',
      '2xl': '1440',
      '3xl': '2160',
      paper: '8.5in',
      print: {
        raw: 'print',
      },
    },
    extend: {
      colors: {
        ivory: '#fffffd',
      },
      fontFamily: {
        serif: [
          'Bitter',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
      },
      fontSize: {
        '7xl': '5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
