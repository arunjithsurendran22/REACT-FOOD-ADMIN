/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundBlack: "#09090b",
        sidebar: "#18181b",
      },
    },
  },
  plugins: [],
};
