// src/API/productService.js
import { axiosGet } from './handler';

export const fetchAllProducts = () => axiosGet('/products');
export const fetchProductDetails = (id) => axiosGet(`/product/${id}`);