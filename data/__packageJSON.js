module.exports = {
file: './package.json',
content: `{
    "name": "themekit-boilerplate",
    "version": "1.0.0",
    "description": "Boilerplate to help build Shopify themes from scratch.",
    "main": "webpack.config.js",
    "scripts": {
        "init": "npm run build; npm run dev;",
        "dev": "NODE_ENV=development run-p -sr webpack:watch shopify:serve",
        "build": "NODE_ENV=development webpack",
        "webpack:watch": "webpack --watch",
        "shopify:serve": "cd dist; shopify theme serve"
    },
    "keywords": [],
    "author": "@krjo",
    "license": "MIT",
    "devDependencies": {},
    "dependencies": {}
}`}
