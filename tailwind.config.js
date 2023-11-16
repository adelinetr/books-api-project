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
        bgColor: '#F7EDE4',
      }
    },
  },
  plugins: [],
}

