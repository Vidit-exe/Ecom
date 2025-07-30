// src/redux/products/productActions.js
import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
} from './productConstants';

import { axiosGet } from '../../API/handler'; // ✅ import your custom axios handler

export const getProducts = ({ page = 1, category = '' }) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCTS_REQUEST });

    let query = `/products?page=${page}`;
    if (category) query += `&category=${encodeURIComponent(category)}`;

    const { data } = await axiosGet(query); // ✅ use custom axiosGet

    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: {
        products: data.products,
        totalPages: data.totalPages,
      },
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};
