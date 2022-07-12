const fs = require('fs')

// included here instead of in constructor 
const content = ``

class WriteFiles {
  constructor(packageJson, store) {
    this.store = store
    this.packageJson = packageJson
  }

  init() {
    this.packageJson.content = this.packageJson.content.replaceAll('{STORE}', this.store) 
    this.writeFiles(this.packageJson)
  }

  writeFiles(config) {
    fs.createWriteStream(config.file)
      .write(config.content)
  }
}

module.exports = WriteFiles
