import React from 'react'

const StoreContext = React.createContext({
  products: [],
  cart: [],
  total: Number,
  addCartItem: () => {},
  removeCartItem: () => {}
});

export default StoreContext;