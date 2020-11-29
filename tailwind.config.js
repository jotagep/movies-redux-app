const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      lead: ['Bebas Neue', 'Arial', 'sans-serif'],
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        darkgray: '#181818',
        netflix: '#e50914',
      },
      fontSize: {
        title: '4.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
