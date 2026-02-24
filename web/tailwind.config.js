/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#01F7CB',
        navy: '#1A3258',
        accent: '#76FE2A',
      },
    },
  },
  plugins: [],
}