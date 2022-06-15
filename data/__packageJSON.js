module.exports = {
file: './package.json',
content: `{
  "name": "dougify",
  "version": "0.2.0",
  "description": "Webpack system for Shopify theme development",
  "main": "webpack.config.js",
  "scripts": {
    "init": "npm run build; npm run dev;",
    "dev": "NODE_ENV=development run-p -sr webpack:watch shopify:serve",
    "build": "NODE_ENV=development webpack",
    "webpack:watch": "webpack --watch",
    "shopify:serve": "cd dist; shopify theme serve"
  },
  "keywords": [],
  "author": "DJ",
  "license": "MIT",
  "devDependencies": {},
  "dependencies": {}
}`}
