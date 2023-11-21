/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      colors: {
        primary: '#DCA16A',
        primaryDark: '#B17A47',
        buttonColor: '#D4924F',
      }
    },
  },
  plugins: [],
}

