/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#e0f2f1",
          DEFAULT: "#0d9488",
          dark: "#0f766e"
        }
      }
    }
  },
  plugins: []
};
