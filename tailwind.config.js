/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    screens: {
      xs: '576px',
      sm: '639px',
      md: '767px',
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
    },
  },
  variants: {},
  plugins: [],
};
