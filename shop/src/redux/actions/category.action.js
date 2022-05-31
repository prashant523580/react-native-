import { categoryConstants } from "./constants"
import axios from "../../helper/axios";
export const getCategory = () => {
    return async dispatch => {
        try{
            let res = await axios.get("/category/getcategory");
            if(res.status === 200){
                const category = res.data;
                dispatch({
                    type: categoryConstants.GET_CATEGORY_SUCCESS,
                    payload : {category : category}
                })
            }
        }catch(error){
            console.log(error);
        }
    }
}