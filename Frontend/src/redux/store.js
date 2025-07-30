// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { productReducer } from './products/productSlice';

const rootReducer = combineReducers({
  products: productReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
