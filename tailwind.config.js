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
        xxs: "350px",
        xxl: "1900px",
      },
      colors: {
        primary: {
          // default: '#5C2684',
          // light: 'rgba(92,38,132,0.8)',
          // dark: ''
          default: '#0F6C96',
          light: 'rgba(15,108,150,0.8)',
          dark: ''
        }
      }
    },
  },
  plugins: [],
}

