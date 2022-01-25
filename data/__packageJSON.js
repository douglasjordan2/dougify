module.exports = {
file: './package.json',
content: `{
    "name": "themekit-boilerplate",
    "version": "1.0.0",
    "description": "Boilerplate to help build Shopify themes from scratch.",
    "main": "webpack.config.js",
    "scripts": {
        "init": "npm run build; theme deploy; code .; npm run dev;",
        "dev": "NODE_ENV=development webpack --watch",
        "build": "webpack"
    },
    "keywords": [],
    "author": "@krjo",
    "license": "MIT",
    "devDependencies": {},
    "dependencies": {}
}`}