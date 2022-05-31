import { Button, Text, View } from "react-native";

export default function HomeScreen({route,navigation}){
    const {name} = route.params;
   
    return(
        <View> 
            <Text>Home Page</Text>
            <Text>Welcome {name} :)..</Text>
            <Button onPress={() => navigation.navigate("Profile")} title="go to profile"/>
        </View>
    )
}