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
          DEFAULT: 'rgba(15,108,150,1)',
          light: 'rgba(15,108,150,0.8)',
          dark: ''
        },
        dark:{
          DEFAULT: 'rgba(15,23,42)',
          light: 'rgb(148,163,184)'
        }
      }
    },
  },
  plugins: [],
}

