const colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];

const mainFunction = require('tailwindcss/plugin')(function({}) {}, {
  theme: {
    colors: {
      ...colors,
      light: {
        bg: colors.white,
        primary: {
          bg: colors.black,
          'bg-active': colors.neutral[50],
          text: colors.white,
          'text-active': colors.white,
          border: colors.neutral[300],
          'border-active': colors.black,
          ring: colors.black,
        },
        secondary: {
          bg: colors.white,
          'bg-active': colors.neutral[100],
          text: colors.neutral[600],
          'text-active': colors.neutral[800],
          border: colors.neutral[300],
          'border-active': colors.neutral[400],
          ring: colors.neutral[600],
        },
        error: {
          bg: colors.red[500],
          'bg-active': colors.red[100],
          text: colors.white,
          'text-active': colors.red[500],
          border: colors.red[500],
          'border-active': colors.red[600],
          ring: colors.red[500],
        },
        success: {
          bg: colors.green[500],
          'bg-active': colors.green[100],
          text: colors.white,
          'text-active': colors.green[500],
          border: colors.green[500],
          'border-active': colors.green[600],
          ring: colors.green[500],
        },
        info: {
          bg: colors.blue[600],
          'bg-active': colors.blue[100],
          text: colors.white,
          'text-active': colors.blue[600],
          border: colors.blue[600],
          'border-active': colors.blue[600],
          ring: colors.blue[600],
        },
        warning: {
          bg: colors.amber[500],
          'bg-active': colors.amber[100],
          text: colors.black,
          'text-active': colors.amber[500],
          border: colors.amber[500],
          'border-active': colors.amber[600],
          ring: colors.amber[500],
        },
        purple: {
          bg: '#4B3CFF',
          'bg-active': colors.indigo[100],
          text: colors.white,
          'text-active': '#4B3CFF',
          border: '#4B3CFF',
          'border-active': colors.indigo[600],
          ring: '#4B3CFF',
        },
      },
      dark: {
        bg: colors.black,
        primary: {
          bg: colors.white,
          'bg-active': colors.neutral[900],
          text: colors.black,
          'text-active': colors.black,
          border: colors.neutral[600],
          'border-active': colors.white,
          ring: colors.white,
        },
        secondary: {
          bg: colors.black,
          'bg-active': colors.neutral[800],
          text: colors.neutral[300],
          'text-active': colors.neutral[200],
          border: colors.neutral[600],
          'border-active': colors.neutral[400],
          ring: colors.neutral[400],
        },
        error: {
          bg: colors.red[500],
          'bg-active': colors.red[900],
          text: colors.white,
          'text-active': colors.red[300],
          border: colors.red[500],
          'border-active': colors.red[500],
          ring: colors.red[500],
        },
        success: {
          bg: colors.green[500],
          'bg-active': colors.green[900],
          text: colors.white,
          'text-active': colors.green[300],
          border: colors.green[500],
          'border-active': colors.green[500],
          ring: colors.green[500],
        },
        info: {
          bg: colors.blue[500],
          'bg-active': colors.blue[900],
          text: colors.white,
          'text-active': colors.blue[300],
          border: colors.blue[500],
          'border-active': colors.blue[500],
          ring: colors.blue[500],
        },
        warning: {
          bg: colors.amber[500],
          'bg-active': colors.amber[900],
          text: colors.black,
          'text-active': colors.amber[300],
          border: colors.amber[500],
          'border-active': colors.amber[500],
          ring: colors.amber[500],
        },
        purple: {
          bg: '#4B3CFF',
          'bg-active': colors.indigo[900],
          text: colors.white,
          'text-active': colors.indigo[300],
          border: '#4B3CFF',
          'border-active': '#4B3CFF',
          ring: '#4B3CFF',
        },
      },
    },
  },
});

module.exports = mainFunction;
