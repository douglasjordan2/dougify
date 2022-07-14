module.exports = {
file: './tailwind.config.js',
content: `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,liquid}",
    "./src/**/*"
  ],
  theme: {
    extend: {}
  },
  plugins: [],
}`}
