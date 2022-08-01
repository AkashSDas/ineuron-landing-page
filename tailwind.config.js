/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      grey: "hsla(0, 0%, 46%, 1)",
      black: "hsla(0, 0%, 10%, 1)",
      white: "hsla(0, 0%, 100%, 1)",
      violet: "hsla(259, 100%, 53%, 1)",
      "dark-violet": "hsla(259, 100%, 22%, 1)",
      "light-violet": "hsla(241, 68%, 95%, 1)",
      "light-purple": "hsla(256, 73%, 97%, 1)",
    },
    boxShadow: {
      default: "0px 4px 8px 0px hsla(0, 0%, 0%, 0.2)",
    },
    // fontSize: {},
    fontFamily: {
      poppins: "Poppins, sans-serif",
    },
    extend: {},
  },
  plugins: [],
};
