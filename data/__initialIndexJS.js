module.exports = `/*! 
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
