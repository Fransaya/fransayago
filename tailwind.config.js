/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // todas tus rutas de componentes
  ],
  darkMode: "class", // importante: permite cambiar modo oscuro con la clase "dark"
  theme: {
    extend: {
      colors: {
        primary: "#2E5A8A",
        primaryDark: "#173251",
        secondary: "#2e8b57",
        accent: "#FF6F61",
        neutralLight: "#F4F5F7",
        containerBg: "#D9D9D9",
        text: "#2A2D34",
        error: "#e74c3c",
        success: "#27ae60",
        warning: "#f1c40f",
      },
    },
  },
  plugins: [],
};
