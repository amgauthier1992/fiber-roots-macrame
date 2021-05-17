import { ADD_TO_CART, REMOVE_FROM_CART } from '../types';

export const cartReducers = (
  state = JSON.parse(localStorage.getItem('cart')) || [],
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [
        ...state, 
        {
          'id': action.payload.id,
          'product_name': action.payload.product_name,
          'description': action.payload.description,
          'image': action.payload.image,
          'price': action.payload.price,
          'status': action.payload.status,
        }
      ]
      //return { cart: action.payload.cart };
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload.id);
      //return { cart: action.payload.cart };
    default:
      return state;
  }
};

// //job of reducer is to return new state based on the action passed as
// //an argument

// //payload of action should contain minimum information we need to update
// //our system

// function cartReducer(state = [], action) {
//   if(action.type === 'itemAdded'){
//     return [
//       //copy current state as we dont
//       ...state,
//       {
        
//       }
//     ]
//   }
//   else if(action.type === 'itemRemoved'){
//     return state.filter()
//   }
//   //if an action does not match one of the actions above, we dont want
//   //everything to blow up, so we just return the current state
//   return state;
// }