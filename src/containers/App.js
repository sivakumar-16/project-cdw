import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'

const App = () => (
  <div>
    <h2>Shopping Cart</h2>
    <hr />
    <h3>Clothing List</h3>
    <ProductsContainer />
    <hr />
    <CartContainer />
  </div>
)

export default App
