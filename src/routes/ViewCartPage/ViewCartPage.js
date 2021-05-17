import React from 'react';
import Cart from '../../components/Cart/Cart';
import './ViewCartPage.css'

export default function ViewCartPage(props) {
  return (
    <div className='cart-container'>
      <header className='cart-header'>
        <h1>Your Shopping Bag</h1>
      </header>
      <div className='row'>
        <div className='column'>
          <Cart />
          <div className='totals'></div>
        </div>
      </div>
    </div> 
  )
}


/* <div className='cart-row'>
<div className='cart-column'>
</div>
</div>
<span className='cart-header'></span>
<span className='cart-header'></span>
<span className='cart-header'></span> */