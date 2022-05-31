import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import recipeReducer from "./recipe.reducer";

const rootReducers = combineReducers( {
    recipes : recipeReducer,
    category : categoryReducer
})
export default rootReducers;