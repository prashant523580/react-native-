import "react-native-gesture-handler";
import MainNavigation from './src/containers/MainNavigation';
import { Provider} from 'react-redux';
import store from './src/reduxStore/store/store';
export default function App() {

  return (
    <Provider store={store}>

       <MainNavigation/>
    </Provider>
  );
}

