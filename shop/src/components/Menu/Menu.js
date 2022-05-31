import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

function Menu(){
    return(
        <View style={styles.menuContainer}>
            <TouchableOpacity>
                <Text>home</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    menuContainer:{
        backgroundColor: "red",
    }
})