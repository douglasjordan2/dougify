const fs = require('fs')

class WriteFiles {
    constructor(filesToWrite) {
        this.filesToWrite = filesToWrite
    }

    init() {
        this.filesToWrite.forEach(config => {
            fs.createWriteStream(config.file)
                .write(config.content)
        })
    }
}

module.exports = WriteFiles