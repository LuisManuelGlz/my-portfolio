const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#0099ff',
        secondary: '#141414',
        dark: '#000000',
        light: '#ffffff',
        black: '#000000',
        gray: '#b3b3b3',
      },
      textColor: {
        primary: '#0099ff',
        secondary: '#141414',
        dark: '#000000',
        light: '#ffffff',
        black: '#000000',
        gray: '#b3b3b3',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
