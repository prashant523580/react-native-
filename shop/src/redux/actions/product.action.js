import axios from "../../helper/axios"
import { productConstant } from "./constants";

export const getAllProduct = () =>{
    return async dispatch => {
    let res = await axios.post("/product/getproduct");
    if(res.status === 200){
        const {products,page} = res.data;
        // alert(page)
        dispatch({
            type: productConstant.GET_ALL_PRODUCT_SUCCESS,
            payload : {product : products}
        })
    }
    }
}
export const getProductDetailsById =(payload) => {
    return async dispatch => {
        const {productId} = payload.params
        const res = await axios.get(`/product/${productId}`);
        if(res.status === 200){

            // alert(JSON.stringify(res.data.product))
            dispatch({
                type:productConstant.GET_PRODUCT_DETAILS_SUCCESS,
                payload : {productDetails : res.data.product}
            })
        }
    }
}