import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
// import {createta}
import HomeScreen from './homeScreen/HomeScreen';
import { ProductDetailScreen } from './productDetailsScreen/ProductDetailScreen';
import { ShoppingCartIcon } from '../components/shoppingCartIcon/ShoppingCartIcon';
import {createDrawerNavigator} from "@react-navigation/drawer";
import { ProductScreen } from './productListsScreen/productScreen/ProductScreen';
import { Navigation } from "react-native-navigation";
import { RNNDrawer } from "react-native-navigation-drawer-extension";

// register our drawer component with RNN
Navigation.registerComponent("CustomDrawer", () => RNNDrawer.create(CustomDrawer));
RNNDrawer.showDrawer({
  component: {
    name: "CustomDrawer",
    passProps: {
      animationOpenTime: 300,
      animationCloseTime: 300,
      direction: "left",
      dismissWhenTouchOutside: true,
      fadeOpacity: 0.6,
      drawerScreenWidth: "75%" || 445, // Use relative to screen '%' or absolute
      drawerScreenHeight: "100%" || 700,
      style: { // Styles the drawer container, supports any react-native style
        backgroundColor: "red",
      },
      parentComponentId: props.componentId, // Custom prop, will be available in your custom drawer component props
    },
  }
});

RNNDrawer.dismissDrawer();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function Root (){
  return(
       <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={HomeScreen} options={{
          }}/>
          <Drawer.Screen name='Product' component={ProductScreen}/>
          <Stack.Screen name='ProductDetails' component={ProductDetailScreen}/>
        </Drawer.Navigator> 
  )
}
export default function MainNavigation() {
  return (
      <NavigationContainer>
    
              <Stack.Navigator 
                screenOptions={{
                  headerStyle:{
                    backgroundColor:"rgb(45, 65, 84)"
                  },
                  headerTintColor:"white",
                  headerBackTitle: 'Back'
                }}
              >
          <Stack.Screen name='Root' component={MainNavigation} options={
            {
              headerShown:false
            }
          } />
          <Stack.Screen  name='ProductDetails' component={ProductDetailScreen} 
          options={{
            headerRight: (props) => <ShoppingCartIcon {...props}/>,
            presentation: "card"
          }}
          />
            </Stack.Navigator>
      </NavigationContainer>
  )
}
