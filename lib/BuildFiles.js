const fs = require('fs')

class BuildFiles {
  constructor(layout, customers, templates, indexJSAppend) {
    this.templates = [ templates ]
    this.structures = [
      layout,
      customers,
      templates
    ]
    this.indexJSAppend = indexJSAppend
  }

  init() { 
    this.structures.forEach(structure => {
      structure.files.forEach(file => {
        this.buildFile(structure, file)
      })
    })

    this.templates.forEach(template => {
      template.files.forEach(file => {
        this.buildDistTemplate(template, file)
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

  buildDistTemplate(template, file) {
    if(file != 'gift_card' && file != 'apps') {
      fs.createWriteStream('./dist' + template.path + file + '.json')
        .write(`{\n\t"sections": {\n\t\t"example": {\n\t\t\t"type": "example-section"\n\t\t}\n\t},\n\t"order": [\n\t\t"example"\n\t]\n}`)
    }
  }
}

module.exports = BuildFiles
