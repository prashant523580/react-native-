import "react-native-gesture-handler"
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {createStackNavigator} from "@react-navigation/stack"
import { HomeScreen } from "./homeScreen/HomeScreen";
import { CartScreen } from "./cartScreen/CartScreen";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategory } from "../reduxStore/actions/recipe.action";
import { MealScreen } from "./MealsScreen/MealScreen";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function StackScreens(){
    <Stack.Navigator>
        <Stack.Screen name="Meals" component={MealScreen}/>
    </Stack.Navigator>
}
export default function MainNavigation(){
    const dispatch = useDispatch();
    
    // useEffect(()=>{
    //   dispatch(getCategory());
    // });
    return(

        <NavigationContainer children={StackScreens} >
        {/* <Drawer.Navigator initialRouteName="Home" >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Cart" component={CartScreen}/>
        </Drawer.Navigator> */}
          <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen name="Home" component={HomeScreen}/>
                 <Stack.Screen name="Meals" component={MealScreen}/>
         </Stack.Navigator>
    </NavigationContainer>
        )
}