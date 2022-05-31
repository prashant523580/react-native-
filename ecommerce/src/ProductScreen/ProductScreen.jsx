import { Button, Text, View } from "react-native"

export default function ProductScreen({route,navigation}) {
    const {itemId,otherParams} = route.params;
    return(
        <View>
            <Text>Item Id: {JSON.stringify(itemId)}</Text>
            <Text>other Param {JSON.stringify(otherParams)}</Text>
            <Button onPress={() => {
                navigation.push("Product",{
                    itemId: Math.floor(Math.random() * 100)
                })
            }
            } title={"go to Product again"} />
            <Button onPress={() => navigation.goBack()} title={"go back"}/>
            <Button onPress={() => navigation.popToTop()} title={"pop"} />
            <Button onPress={() => navigation.setOptions({title:"Products Details"})} title={"change title"}/>
        </View>
    )
}