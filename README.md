# dougify
Boilerplate maker for custom Shopify theme development

## Version 0.3.0
- TailwindCSS now included by default. Feel free to use any Tailwind components or utility classes. If none are used, Tailwind serves as a basic CSS reset.
- Pre-build `theme check` included.
- Automatically signs you into the store when the dev server starts.

## Before You Begin
- This project requires node v16+. If you run into errors, check your version of node.

## Getting Started
```
npm install --global dougify
```

### Usage
This project is set up to use NPM. You can change this by changing the commands in `data/__packageJSON.js` and `lib/InstallPackages.js`. to use your package manager.

1. This project uses the Shopify CLI: (https://shopify.dev/themes/tools/cli) 
2. `cd` into your project root
3. Run the `dougify` command, enter shop url ('.myshopify.com' is optional). Boilerplate will be built and dependancies will be installed. 
4. When setup is complete, open the project in your IDE and run `init`.

***Note:*** *If you start a new projact and you're prompted with a message regarding local files that don't exist in the remote version of the development theme, choose the option to keep the local version and restore it remotely.* 
