import * as React from "react";
import "react-native-gesture-handler";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/homeScreen/Home';
import AboutScreen from "./src/AboutScreen";
import ProfileScreen from "./src/Profile";
export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
      <NavigationContainer>
          <Drawer.Navigator initialRouteName='Login'>
              <Drawer.Screen name="Login" options={{
                headerShown: false
              }} component={LoginScreen}/>
            <Drawer.Screen name='Home' component={HomeScreen}/>
            <Drawer.Screen name="About" component={AboutScreen}/>
          </Drawer.Navigator>
          {/* <Stack.Navigator>
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
            />
          </Stack.Navigator> */}
      </NavigationContainer>
  );
}

