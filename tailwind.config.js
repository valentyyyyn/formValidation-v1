/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
         sans: ["Poppins", "Helvetica Neue", "Arial", "sans-serif"],
      },
      colors: {
        customred: 'hsl(0, 100%, 74%)',
        customviolet: 'hsl(248, 32%, 49%)',
        customgreen: 'hsl(154, 59%, 51%)',
      },
    },
  },
  plugins: [],
}

