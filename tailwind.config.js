/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inconsolata'],
      },
      colors: {
        'brand': '#a6d1c9',
        'brand-dark': '#282b29',
        'cta': '#D6A269',
      },
    },
  },
  plugins: [],
}
