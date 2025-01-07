// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{vue,js,ts,jsx,tsx}",
    "./components/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  css: [
    '@/assets/first.css', // Ensure this path is correct
  ],
}