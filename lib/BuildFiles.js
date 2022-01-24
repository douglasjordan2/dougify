const fs = require('fs')

class BuildFiles {
    constructor(layout, customers, templates, indexJSAppend) {
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
    }

    buildFile(structure, file) {
        [
            {
                rootPath: './src/js/bundles',
                ext: '.js',
                write: `import "Styles/${structure.path}/${file}.scss";\n// import ComponentConstructor from '../ComponentConstructor'\n\n// const components = {}\n\n// ComponentConstructor(components)`
            },
            {
                rootPath: './src/styles',
                ext: '.scss',
                write: `@import 'Helpers/_helpers';`
            },
            {
                rootPath: './src/liquid',
                ext: '.liquid',
                write: `{% comment %}${structure.path}/${file}.liquid{% endcomment %}`
            }
        ].forEach(type => {
            let write = type.write
            if(file === 'index' && type.ext === 'js') {
                write = type.write + '\n\n' + this.indexJSAppend
            }

            fs.createWriteStream(type.rootPath + structure.path + file + type.ext)
                .write(write)
        })
    }
}

module.exports = BuildFiles