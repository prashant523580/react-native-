import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer,getFocusedRouteNameFromRoute} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from './src/homeScreen/HomeScreen';
import ProductScreen from './src/ProductScreen/ProductScreen';
import SettingScreen from './src/Setting/SettingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const EditTextScreen = ({ navigation }) => {
  const [text, setText] = React.useState('');

  const hasUnsavedChanges = Boolean(text);

  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', (e) => {
        const action = e.data.action;
        if (!hasUnsavedChanges) {
          return;
        }

        e.preventDefault();

        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            { text: "Don't leave", style: 'cancel', onPress: () => {} },
            {
              text: 'Discard',
              style: 'destructive',
              onPress: () => navigation.dispatch(action),
            },
          ]
        );
      }),
    [hasUnsavedChanges, navigation]
  );

  return (
    <View style={styles.content}>
      <TextInput
        autoFocus
        style={styles.input}
        value={text}
        placeholder="Type something…"
        onChangeText={setText}
      />
    </View>
  );
  }
export default function App() {
  const Tab = createBottomTabNavigator();
  const SettingStacks  = createNativeStackNavigator();
  const Stack = createNativeStackNavigator();
  function homeStack(){
    return(
      <Stack.Navigator>
        <Stack.Screen name='A' component={HomeScreen}/>
      </Stack.Navigator>
    )
  }
  function settingStack(){
    return(
      <SettingStacks.Navigator>
        <SettingStacks.Screen name="A" component={SettingScreen}/>
      </SettingStacks.Navigator>
    )
  }
  function getHeaderName(route) {
      const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

      switch(routeName){
        case "Feed":
          return "News feeds";
          case "Profile":
            return "my profile";
          case "Account":
            return "My Account"
      }
  }
  return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='Home'
          
            screenOptions={{
              headerStyle:{
                backgroundColor:"black"
              },
              headerTintColor: "#fff",
            }}
          >
              <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                  title: "Home",
                  tabBarLabel:"Home!",
                  headerRight: () => (
                    <Button onPress={() => alert("header button")} title="nav btn"/>
                  )
                }}
              />
              {/* <Stack.Screen name='Home' component={HomeScreen}
                options={({route}) => ({
                  headerTitle: getHeaderName(route)
                })}
              /> */}
              <Stack.Screen
              name='Product'
              component={ProductScreen}
              initialParams={{
                itemId: 35
              }}
              options={{
                tabBarLabel:"Product!"
              }}
              />
              <Stack.Screen
              name="Settings"
              component={SettingScreen}
              />
              <Stack.Screen name="EditText" component={EditTextScreen} />
          </Stack.Navigator>
          {/* <Tab.Navigator screenOptions={{
            headerShown: false
          }}>
              <Tab.Screen name='Home' component={homeStack} options={{
                tabBarLabel:"home!"
              }}/>
              <Tab.Screen name="Settings" component={settingStack}/>
          </Tab.Navigator> */}
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  input: {
    margin: 8,
    padding: 10,
    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.08)',
    backgroundColor: 'white',
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  button: {
    margin: 8,
  },
});