
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver' : '#F5F7FA',
        'neutralDGrey'  : '#4D4D4D',
        'brandPrimary' : '#22c55e',
        'neutralGrey': '#717171',
        'gray900': '#18191F',
        'bgcolor': '#112437'
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

