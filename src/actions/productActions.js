import { FETCH_PRODUCTS } from '../types';
import config from '../config';

export const fetchProducts = () => async (dispatch) => {
  const res = await fetch(`${config.REACT_APP_API_ENDPOINT}/products`)
  const products = await res.json();
  console.log(products);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: products,
  });
};

