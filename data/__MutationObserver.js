module.exports = {
file: './src/js/helpers/MutationObserver.js',
content: `// Mutation Observer
class MutationObserver {
  constructor(observeElem, cb, disconnect, options) {
    this.observeElem = observeElem
    this.cb = cb
    this.disconnect = disconnect || false
    this.options = options || {
      subtree: true,
      childList: true
    }

    this.MutationObserver = window.MutationObserver || window.WebKitMutationObserver
    this.init()
  }

  init() {
    this.observer = new this.MutationObserver(() => {
      this.cb()

      if(this.disconnect) {
        this.stop()
      }
    })

    this.observe()
  }

  observe() {
    this.observer.observe(this.observeElem, this.options)
  }

  stop() {
    this.observer.disconnect()
  }

  reload() {
    this.stop()
    this.observe()
  }
}

export default MutationObserver

/*!
!!! This component creates quick mutation observers. First,
!!! it checks if we need webkit, just in case. It requires 
!!! parameters for the element to be observed, and the call-
!!! back function. The 'options' and 'disconnect' parameters
!!! are optional.

!!! The callback needs to be an arrow function included in 
!!! the new component call. It can't be a component method
!!! or named function (not sure why, hasn't mattered so far)

!!! This includes methods to observe, stop, and reload the 
!!! mutation observer. These are included so code won't be
!!! firing repeatedly, make sure to console log some value
!!! in your callback function. if it logs to the console
!!! repeatedly (for example), then use these methods to make 
!!! it so the request or function only runs when it needs to.

  // Example:
    - item is added to cart, but this item is already in the
      cart. because of this, the item's quantity increments.
    - the component responsible for changing the quantity of 
      cart items now needs to know the new quantity
    - the mutation observer watches for changes to the element
      and updates the state value when it changes

  new MutationObserver(this.elem, () => {
    this.value = parseInt(this.updateElem.innerHTML)
  })
!!! */`}
