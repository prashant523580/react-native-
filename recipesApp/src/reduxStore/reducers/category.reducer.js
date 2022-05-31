import { categoryConstant } from "../actions/constants"

const initState = {
    category :[]
}

export default (state=initState,action) =>{
    switch(action.type){
        case categoryConstant.GET_CATEGORY_SUCCESS:
            state={
                ...state,
                category : action.payload.category
            }
    }
    return state
}