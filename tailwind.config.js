/** @type {import('tailwindcss').Config} */
const nativewind = require("nativewind/tailwind/native")

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./App.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [nativewind()],
}