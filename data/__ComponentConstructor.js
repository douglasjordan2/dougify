module.exports = {
file: './src/js/bundles/ComponentConstructor.js',
content: `// Component Constructor
function ComponentConstructor(components) {
    Object.entries(components).forEach(([selector, Component]) => {
        const dataSelect = 'data-' + selector
        const matchedElements = document.querySelectorAll('[' + dataSelect + ']')

        matchedElements.forEach(element => {
            new Component(element, dataSelect).init()
        })
    })
}

export default ComponentConstructor

/*!
!!! This function takes an array of components and initializes
!!! them. Components need to be imported and this function needs
!!! to be called in each template/.js file where they're needed.
!!! So if you have ATC buttons on product and collection pages,
!!! but not on the homepage, then you would import your component
!!! in templates/product.js and templates/collection.js but not
!!! templates/index.js
!!! */`}