const fs = require('fs')
const { spawn } = require('child_process')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

class Prompt {
    init() {
        readline.question('Enter Store URL: ', $STORE => {
            readline.question('Enter ThemeKit password: ', $PASSWORD => {
                spawn(`clear && echo "creating theme...\n\n" && mkdir temp && cd temp && theme new --password=${$PASSWORD} --store=${$STORE} --name="Custom Theme - Dev" && cd .. && mv temp/config.yml . && rm -rf temp && echo '  directory: dist\n  ignore:\n    config/settings_data.json' >> config.yml && clear && echo "installing packages...\n\n" && npm install -D  @shopify/theme-cart@3.1.0 @shopify/theme-product@3.1.0 @shopify/theme-product-form@3.1.0 autoprefixer@9.8.6 copy-webpack-plugin@5.1.2 css-loader@3.6.0 eslint-plugin-compat@4.0.0 glob@7.1.6 mini-css-extract-plugin@1.5.0 node-sass@5.0.0 postcss-loader@5.2.0 pre-commit@1.2.2 sass-loader@11.0.1 webpack@5.35.1 webpack-cli@4.6.0 webpack-shell-plugin-next@2.2.2 && echo "Initializing repo..." && clear &&` + "echo '----------------------------------\n|                                |\n|  Thank you for using \\033[0;31md\\033[0;32mo\\033[0;33mu\\033[0;34mg\\033[0;36mi\\033[0;35mf\\033[1;34my\\033[0m!  |\n|                                |\n----------------------------------\n\n\\033[1;37mNow run the \\033[0;31mINIT\\033[1;37m command to get started.\n\n'", { stdio: 'inherit', shell: true})
                readline.close()
            })
        })
    }
}

module.exports = Prompt