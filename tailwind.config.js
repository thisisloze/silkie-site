/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'silkie-white': '#fdfbf7',
        'silkie-soft': '#f3e6d5',
        'silkie-accent': '#d4a373',
        'silkie-dark': '#4a403a',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Fredoka', 'sans-serif'], // Friendly rounded font
      }
    },
  },
  plugins: [],
}
