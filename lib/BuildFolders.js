const fs = require('fs')
const flatten = require('flat')

class BuildFolders {
  constructor(directories) {
    this.directories = directories
  }

  init() {
    this.buildFolders()
  }

  buildFolders() {
    const directories = flatten(this.directories, { delimiter: '/' })

    Object.entries(directories). forEach(([subdirectory, _null]) => {
      if(!fs.existsSync(subdirectory)) {
        fs.mkdirSync(subdirectory, { recursive: true })
      }
    })
  }
}

module.exports = BuildFolders
