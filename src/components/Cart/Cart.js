import React from 'react';
import StoreContext from '../../contexts/StoreContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

// export default function Cart(props){
//   return (
//     <StoreContext.Consumer>
//     {(context) => {

//       <div className='cart'>
//         {context.cart.map((item, i) => (
//           <CartItem
//             key={i}
//             id={item.id}
//             name={item.product_name}
//             description={item.description}
//             image={item.description}
//             price={item.price}
//           />
//         ))}
//       </div>
//     }}
//     </StoreContext.Consumer>
//   )
// }

class Cart extends React.Component {
  static contextType = StoreContext;

  render(){
    const { cart, addCartItem, removeCartItem, total } = this.context;

    let itemHash = {};

    cart.forEach((item, i) => {
      //if hash doesnt have a key already corresponding to a specific item id
      if (!itemHash.hasOwnProperty(item.id)) {
        itemHash[item.id] = 1; //init value/count as 1
      } 
      else {
        itemHash[item.id] += 1; //for every duplicate item in cart, increment value by 1 at specific key
      }
    })
    // console.log(itemHash);

    return (
      <div className='cart-items'>
        <div className='cart-line-item'>
          <span>Product</span>
          <span>Quantity</span>
          <span>Remove</span>
          <span>Total</span>
        </div>
        {cart.map((item, j) => (
          <CartItem
            key={j}
            id={item.id}
            name={item.product_name}
            description={item.description}
            image={item.description}
            price={item.price}
            // quantity={itemCount}
            addCartItem={addCartItem}
            removeCartItem={removeCartItem}
          />
        ))}
      </div>
    )
  }
}

export default Cart;