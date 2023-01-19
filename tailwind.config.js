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
      "app-gray": {
        100: "rgba(255, 255, 255, 0.77)",
        200: "rgba(255, 255, 255, 0.67)",
        300: "rgba(255, 255, 255, 0.57)",
        400: "rgba(255, 255, 255, 0.47)",
        500: "rgba(255, 255, 255, 0.37)",
        600: "rgba(255, 255, 255, 0.27)",
        700: "rgba(255, 255, 255, 0.17)",
      },
      "app-dp": {
        100: "rgba(30, 30, 30, 1)",
        200: "rgba(35, 35, 35, 1)",
        600: "rgba(63, 63, 63, 1)",
        280: "rgba(70, 70, 70, 1)",
        300: "rgba(75, 75, 75, 1)",
      },
    },
    extend: {},
  },
  plugins: [],
};
