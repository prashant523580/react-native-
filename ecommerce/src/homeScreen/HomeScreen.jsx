import { Button, Text, View } from "react-native"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FeedScreen from "./feedScreen/Feed";
import MessageScreen from "./messageScreen/message";
function ProfileScreen() {
    return <View />;
  }
  
  function AccountScreen() {
    return <View />;
  }
  
export default function HomeScreen({navigation,route}) {
    const Tab = createBottomTabNavigator();
    return(
        <View>
            {/* <Tab.Navigator screenOptions={{
                headerShown:false
            }}>
                <Tab.Screen name="Feed" component={FeedScreen}/>
                <Tab.Screen name="Message" component={MessageScreen} />
                <Tab.Screen name="Account" component={AccountScreen} />
            </Tab.Navigator> */}
            {/* <Button onPress={() => {
                navigation.navigate("Product",{
                    // itemId: 37,
                    otherParams : "product names"
                })
             
             } } title={"go to Product"}/> */}
             <Button
             mode={"contained"}
             onPress={() => navigation.push("EditText")}
             > Push EditText </Button>
             
           
        </View>
    )
}
