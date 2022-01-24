const fs = require('fs')

class BuildLiquidFiles {
    constructor(themeLiquid, scriptBundle, styleBundle) {
        this.configFiles = [
            {
                file: './src/liquid/layout/theme.liquid',
                content: themeLiquid
            },
            {
                file: './src/liquid/snippets/script-bundle.liquid',
                content: scriptBundle
            },
            {
                file: './src/liquid/snippets/style-bundle.liquid',
                content: styleBundle
            }
        ]
    }

    init() {
        this.configFiles.forEach(config => {
            fs.createWriteStream(config.file)
                .write(config.content)
        })
    }
}

module.exports = BuildLiquidFiles