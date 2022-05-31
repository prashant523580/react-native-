import { recipeConstant } from "../actions/constants"

const initState = {
    loading:false,
    recipes :[],
}


export default (state =initState,action) => {
    switch(action.type){
        case recipeConstant.GET_RECIPES_SUCCESS:
            state={
                ...state,
                recipes : action.payload.recipes
            }
            break;
    }
    return state
}