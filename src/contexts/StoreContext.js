import React from 'react'

const StoreContext = React.createContext({
  products: [],
  cart: [],
  addCartItem: () => {},
  removeCartItem: () => {}
});

export default StoreContext;