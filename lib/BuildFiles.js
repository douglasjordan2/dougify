const fs = require('fs')

class BuildFiles {
  constructor(layout, templates, customers, indexJSAppend) {
    this.templates = templates
    this.customers = customers
    this.structures = [
      layout,
      customers,
      templates
    ]
    this.indexJSAppend = indexJSAppend
  }

  init() { 
    this.templates.files.forEach(file => {
      if(file != 'gift_card' && file != 'apps') {
        fs.createWriteStream('./dist' + this.templates.path + file + '.json')
          .write(`{\n\t"sections": {\n\t\t"example": {\n\t\t\t"type": "example-section"\n\t\t}\n\t},\n\t"order": [\n\t\t"example"\n\t]\n}`)
      }
    })

    this.customers.files.forEach(file => {
      fs.createWriteStream('./dist' + this.customers.path + file + '.json') 
        .write(`{\n\t"sections": {\n\t\t"example": {\n\t\t\t"type": "example-section"\n\t\t}\n\t},\n\t"order": [\n\t\t"example"\n\t]\n}`)
    })
    
    this.structures.forEach(structure => {
      structure.files.forEach(file => {
        this.buildFile(structure, file)
      })
    })
  }

  buildFile(structure, file) {
    [
      {
        rootPath: './src/js/bundles',
        ext: '.js',
        write: `import "Styles${structure.path + file}.scss";\n// import ComponentConstructor from '../ComponentConstructor'\n\n// const components = {}\n\n// ComponentConstructor(components)`
      },
      {
        rootPath: './src/styles',
        ext: '.scss',
        write: `@import 'Helpers/_helpers';`
      },
      {
        rootPath: './src/liquid',
        ext: structure.path.includes('templates') && (file != 'gift_card' && file != 'apps') ? '.json' : '.liquid',
        write: structure.path.includes('templates') && (file != 'gift_card' && file != 'apps') ? `{\n\t"sections": {},\n\t"order": []\n}` : `{% comment %}${structure.path + file}.liquid{% endcomment %}`
      }
    ].forEach(type => {
      if(file === 'theme' && type.ext === '.scss') {
        type.write = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n` + type.write 
      }

      if(file === 'index' && type.ext === '.js') {
        const _write = type.write + '\n\n' + this.indexJSAppend
        fs.createWriteStream(type.rootPath + structure.path + file + type.ext)
          .write(_write)
      } else {
        fs.createWriteStream(type.rootPath + structure.path + file + type.ext)
          .write(type.write)
      }
    })
  }
}

module.exports = BuildFiles
