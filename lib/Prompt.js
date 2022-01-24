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
                readline.question('Enter development Theme ID: ', $DEV => {
                    readline.question('Enter production Theme ID: ', async $PROD => {
                        fs.createWriteStream('./variables')
                            .write(Object.entries({
                                    'STORE': $STORE,
                                    'PASSWORD': $PASSWORD,
                                    'DEV': $DEV,
                                    'PROD': $PROD
                                }).map(([key, value]) => `${[key]}=${value}\n`).join('')
                            )

                        console.log('installing packages...')
                        spawn('npm install -D  @shopify/theme-cart@3.1.0 @shopify/theme-product@3.1.0 @shopify/theme-product-form@3.1.0 autoprefixer@9.8.6 copy-webpack-plugin@5.1.2 css-loader@3.6.0 eslint-plugin-compat@4.0.0 glob@7.1.6 mini-css-extract-plugin@1.5.0 node-sass@5.0.0 postcss-loader@5.2.0 pre-commit@1.2.2 sass-loader@11.0.1 webpack@5.35.1 webpack-cli@4.6.0 webpack-shell-plugin-next@2.2.2 && echo "Initializing repo..." && npm run init', { stdio: 'inherit', shell: true})
                        readline.close()
                    })
                })
            })
        })
    }
}

module.exports = Prompt