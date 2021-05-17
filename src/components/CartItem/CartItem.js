import React from 'react';
import './CartItem.css';

export default function CartItem(props){
  return (
    <div className='cart-item'>
      <span className='cart-item-property'>{props.name}</span>
      <span className='cart-item-property'>${props.price}.00</span>
      <label htmlFor='quantity'></label>
      {/* <input type='number' id='quantity' name='quantity' min='0'/>  */}
      {/* value={itemQuantity} */}
    </div>
  );
}