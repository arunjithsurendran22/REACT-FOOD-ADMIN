/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundBlack: "#181818",
        backgroundLayout:'#080808',
        borderColor:'#686868'
      },
    },
  },
  plugins: [],
};
