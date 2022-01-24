const fs = require('fs')

class BuildConfigFiles {
    constructor(webpackConfig, postCSSConfig, gitIgnore, configYML, packageJSON) {
        this.configFiles = [
            {
                file: './webpack.config.js',
                content: webpackConfig
            },
            {
                file: './postcss.config.js',
                content: postCSSConfig
            },
            {
                file: './gitignore',
                content: gitIgnore
            },
            {
                file: './config.yml',
                content: configYML
            },
            {
                file: './package.json',
                content: packageJSON
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

module.exports = BuildConfigFiles