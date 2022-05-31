import axios from "axios"
import {api, categoryApi} from "../../api/api"
import { categoryConstant, recipeConstant } from "./constants";
export const getCategory = () => {
    return async dispatch => {
        let res = await axios.get(categoryApi);
        if(res.status === 200){
            let {categories} = res.data;
            // alert(JSON.stringify(categories))
            dispatch({
                type:categoryConstant.GET_CATEGORY_SUCCESS,
                payload : {
                    category: categories
                }
            })
        }
    }
} 
export const getRecipes = (meal) => {
    return async dispatch => {

        let res = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`);
        if(res.status ===200){
            const {meals} = res.data;
            // alert(JSON.stringify(meals));
            dispatch({
                type:recipeConstant.GET_RECIPES_SUCCESS,
                payload :{
                    recipes: meals
                }
            })
        }
     
    }
}