module.exports = {
file: './package.json',
content: `{
  "name": "{store}",
  "version": "0.0.1",
  "description": "Theme for {store} by Trellis",
  "main": "webpack.config.js",
  "scripts": {
    "init": "npm run build; npm run dev;",
    "dev": "npm run shopify:login; NODE_ENV=development run-p -s webpack:watch shopify:check shopify:serve",
    "build": "NODE_ENV=development webpack",
    "webpack:watch": "webpack --watch",
    "shopify:serve": "cd dist; shopify theme serve --theme-editor-sync",
    "shopify:login": "shopify login --store {store}.myshopify.com",
    "shopify:pull": "cd dist; shopify theme pull",
    "shopify:check": "cd dist; shopify theme check --auto-correct"
  },
  "keywords": [],
  "author": "Trellis",
  "license": "MIT",
  "devDependencies": {},
  "dependencies": {}
}`}
