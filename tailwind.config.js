/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xxs: "400px",
        regLap: "1440px",
        xxl: "1900px",
      }
    },
  },
  plugins: [],
}

