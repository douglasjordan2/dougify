const fs = require('fs')

class BuildHelpers {
    init() {
        fs.createWriteStream('./src/styles/helpers/_helpers.scss')
            .write('//@import \'./mixins.scss\'\n//@import \'./variables.scss\'')
    }
}

module.exports = BuildHelpers