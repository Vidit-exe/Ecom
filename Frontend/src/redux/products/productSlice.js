// src/redux/products/productSlice.js
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from './productConstants'; // ✅ import from constants

const initialState = {
  loading: false,
  products: [],
  totalPages: 0,
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, loading: true };
    case GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload.products,
        totalPages: action.payload.totalPages,
        error: null,
      };
    case GET_PRODUCTS_FAIL:
      return { loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};
