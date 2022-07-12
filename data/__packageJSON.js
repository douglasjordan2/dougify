module.exports = {
file: './package.json',
content: `{
  "name": "dougify",
  "version": "0.2.0",
  "description": "Webpack system for Shopify theme development",
  "main": "webpack.config.js",
  "scripts": {
    "init": "npm run build; npm run dev;",
    "dev": "NODE_ENV=development run-p -sr webpack:watch tailwind:watch shopify:serve",
    "build": "NODE_ENV=development webpack",
    "tailwind:watch": "npx tailwindcss -i ./src/styles/layout/theme.scss -o ./dist/assets/bundle.theme.css.liquid --watch",
    "webpack:watch": "webpack --watch",
    "shopify:serve": "cd dist; shopify theme serve",
    "shopify:pull": "cd dist; shopify theme pull"
  },
  "keywords": [],
  "author": "DJ",
  "license": "MIT",
  "devDependencies": {},
  "dependencies": {}
}`}
