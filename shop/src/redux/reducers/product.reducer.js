import { productConstant } from "../actions/constants"

const initState = {
    product : [],
    error: null,
    loading:false,
    productDetails: {}
}


const productReducer = (state= initState, action) => {
    switch(action.type){
        case productConstant.GET_ALL_PRODUCT_SUCCESS:
            state =  {
                ...state,
                product : action.payload.product
            };
            break;
        case productConstant.GET_PRODUCT_DETAILS_SUCCESS:
            state = {
                ...state,
                productDetails: action.payload.productDetails
            };
            break;
    }
    return state;
}

export default productReducer;