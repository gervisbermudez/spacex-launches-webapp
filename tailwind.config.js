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
    extend: {
      backgroundImage: {
        "app-gradient": "linear-gradient(180deg, #121212 64.11%, #1E1E1E 100%)",
        "detail-gradient": "linear-gradient(0deg, #00000075, #ffffff26)",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "1440px",
        },
      },
    },
    screens: {
      sm: "360px",
      md: "768px",
      lg: "1440px",
    },
    plugins: [],
  },
};
