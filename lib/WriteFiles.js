const fs = require('fs')

class WriteFiles {
  constructor(filesToWrite, store) {
    this.filesToWrite = filesToWrite
    this.store = store
  }

  init() {
    this.filesToWrite.forEach(config => {
      let write = config.content
      if(config.content.includes('{store}')) {
        write = config.content.replaceAll('{store}', this.store) 
      }

      fs.createWriteStream(config.file).write(write)
    })
  }
}

module.exports = WriteFiles
