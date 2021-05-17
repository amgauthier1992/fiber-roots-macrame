import { FETCH_PRODUCTS } from "../types";
  
export const productReducers = (state = [], action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};