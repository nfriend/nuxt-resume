/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
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
      screens: {
        print: {
          raw: 'print',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
