module.exports = {
file: './package.json',
content: `{
  "name": "dougify",
  "version": "0.2.0",
  "description": "Webpack system for Shopify theme development",
  "main": "webpack.config.js",
  "scripts": {
    "init": "npm run build; npm run dev;",
    "dev": "NODE_ENV=development run-p -s webpack:watch shopify:check shopify:serve",
    "build": "NODE_ENV=development webpack",
    "webpack:watch": "webpack --watch",
    "shopify:serve": "cd dist; shopify theme serve",
    "shopify:pull": "cd dist; shopify theme pull",
    "shopify:check": "cd dist; shopify theme check --auto-correct"
  },
  "keywords": [],
  "author": "DJ",
  "license": "MIT",
  "devDependencies": {},
  "dependencies": {}
}`}
