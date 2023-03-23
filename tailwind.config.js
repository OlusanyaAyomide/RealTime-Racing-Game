/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors:{
        main:"white",
        sec:"#343942",
        lightsec:"#555555",
        runnerred:"#ff0508"
      }
    },
  },
  plugins: [],
};
