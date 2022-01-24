const fs = require('fs')

class BuildJSFiles {
    constructor(componentConstructor, mutationObserver, idleTimer) {
        this.configFiles = [
            {
                file: './src/js/bundles/ComponentConstructor.js',
                content: componentConstructor
            },
            {
                file: './src/js/helpers/MutationObserver.js',
                content: mutationObserver
            },
            {
                file: './src/js/helpers/IdleTimer.js',
                content: idleTimer
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

module.exports = BuildJSFiles