/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container : {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#19c8fa",
        secondary: "rgb(15 116 143 / 70%)",
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

