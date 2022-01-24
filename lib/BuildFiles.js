const fs = require('fs')

class BuildFiles {
    constructor(layout, customers, templates) {
        this.structures = [
            layout,
            customers,
            templates
        ]
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
                write = type.write + '\n\n' + indexJSAppend
            }

            fs.createWriteStream(type.rootPath + structure.path + file + type.ext)
                .write(write)
        })
    }
}

const indexJSAppend = `/*! 
!!! How to build template/.js files:

import SideCart from '../../components/SideCart'
import AddToCart from '../../components/AddToCart'

import ComponentConstructor from '../ComponentConstructor'

const components = {
    'side-cart': SideCart,
    'add-to-cart': AddToCart
}

ComponentConstructor(components)

!!!
!!! Then, on your associated HTML elements, attach 'data-'
!!! attributes that match your component selectors, such as
!!! 'data-side-cart' or 'data-add-to-cart'
!!!

!!! */`

module.exports = BuildFiles