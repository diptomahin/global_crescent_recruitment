/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'crescent-red': '#D60000',
        'crescent-dark': '#0A0A0A',
        'crescent-gray': '#C0C0C0',
      },
    },
  },
  plugins: [],
}
