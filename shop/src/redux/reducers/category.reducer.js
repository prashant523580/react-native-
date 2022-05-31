import { categoryConstants } from "../actions/constants"

const initState = {
    category:[],
    loading:false,
    error: null
}


const categoryReducer = (state= initState,action) => {
    switch(action){
        case categoryConstants.GET_CATEGORY_SUCCESS:
           return state ={
                ...state,
                category:action.payload.category,
                loading:false
            }
    }
    return state
}

export default  categoryReducer;