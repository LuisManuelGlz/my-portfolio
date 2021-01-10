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
        dark: '#181818',
        light: '#EEEEEE',
        gray: '#CCCCCC',
      },
      textColor: {
        dark: '#181818',
        light: '#EEEEEE',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
