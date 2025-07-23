import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_SUCESS,
    ALL_PRODUCT_REQUEST,
    CLEAR_ERRORS
} from "../constants/productConstants";

export const productReducer = (state = { products : [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCT_REQUEST:
            return {
                loading: true,
                product: []
            }
        case ALL_PRODUCT_SUCESS:
            return {
                loading: false,
                product: action.payload.products,
                productsCount: action.payload.productCounts
            }
        case ALL_PRODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            break;
    }
};