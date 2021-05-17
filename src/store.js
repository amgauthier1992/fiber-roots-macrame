import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { productReducers } from './reducers/productReducers';
import { cartReducers } from './reducers/cartReducers';
// import { userReducers } from './reducers/userReducers';

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productReducers,
    cart: cartReducers,
    // currentUser: userReducers
  }),
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;