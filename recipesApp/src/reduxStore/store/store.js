import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../reducers/index.reducer";
export default createStore(rootReducers,applyMiddleware(thunk));