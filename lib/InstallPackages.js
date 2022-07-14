const { spawn } = require('child_process')

class InstallPackages {
  constructor(store) {
    this.store = store
  }

  init() {
    if(!this.store.includes('.myshopify.com')) {
      this.store = this.store + '.myshopify.com'
    }
    
    spawn(`clear; shopify login --store ${this.store}; clear; echo "installing packages...\n\n"; npm install -D @shopify/theme-cart @shopify/theme-product @shopify/theme-product-form autoprefixer copy-webpack-plugin css-loader eslint-plugin-compat glob mini-css-extract-plugin node-sass postcss-loader postcss-import pre-commit sass-loader webpack webpack-cli webpack-shell-plugin-next dart-sass npm-run-all tailwindcss; clear;` + "echo '----------------------------------\n|                                |\n|  Thank you for using \\033[0;31md\\033[0;32mo\\033[0;33mu\\033[0;34mg\\033[0;36mi\\033[0;35mf\\033[1;34my\\033[0m!  |\n|                                |\n----------------------------------\n\n\\033[1;37mNow run the \\033[0;31mINIT\\033[1;37m command to get started.\n\n'", { stdio: 'inherit', shell: true})
  }
}

module.exports = InstallPackages
