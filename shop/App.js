import {Provider} from "react-redux"
import MainNavigation from "./src/containers/mainNavigation"
import store from "./src/redux/store/store"
export default function App(){
  window.store = store
  return(
    <Provider store={store}>
        <MainNavigation/>
    </Provider>
  )
}