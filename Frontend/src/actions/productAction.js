import axios from "axios";

import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCESS,
    ALL_PRODUCT_REQUEST,
    CLEAR_ERRORS
} from "../constants/productConstants";

export const getProducts = async (dispatch) => {
    try {
        dispatch({
            type: ALL_PRODUCT_REQUEST
        })
        const {data} = await axios.get("/api/v1/products");
        dispatch({
            type: ALL_PRODUCT_SUCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors = async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}