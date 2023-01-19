/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "app-bg": "#121212",
      "app-surface": "#2C2C2E",
      "app-white": "#ffffffde",
    },
    extend: {},
  },
  plugins: [],
};
