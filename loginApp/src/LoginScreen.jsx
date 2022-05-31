import { useState } from "react";
import { StyleSheet, CheckBox,Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginScreen({navigation}) {
    const [name,setName] = useState();
    const [password,setPassword] = useState();
    const [isAgree,setIsAgree] =useState(false);
    const submitLogin = () => {
        if(name !== "" && password !== ""){

            navigation.navigate("Home", {
                name : name
            })
        }else{
            alert("some thing went wrong");
        }
    }
    return(
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.mainHeader}>Login Form</Text>
            </View>
            <TextInput style={styles.inputControl} onChangeText={setName} placeholder={"email/username"}/>
            <TextInput style={styles.inputControl} secureTextEntry={true} onChangeText={setPassword} placeholder={"password"}/>
            <View style={styles.checkBoxContainer}>

            <CheckBox style={styles.checkBoxStyle} value={isAgree} onValueChange={setIsAgree} />
            <Text style={{
                marginHorizontal:3
            }}>I have read and agreed with Terms and Conditions ?</Text>
            </View>
            <TouchableOpacity disabled={!isAgree} style={[styles.buttonStyle,{
                backgroundColor: !isAgree ? "gray" : "#356588"
            }]} onPress={submitLogin}>
                <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer:{
        // boxShadow: '0 0 5px 0 gray',
        // minWidth: 400,
        margin: "auto",
        padding: 6,
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignContent:"center",
        borderRadius: 6
    },
    mainHeader:{
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 5,
        color:"#356588",
    },
    inputControl:{
        padding: 6,
        width:"100%",
        marginVertical:3,
        borderBottomWidth: 2,
        borderBottomColor: "black",
    },
    loginText:{
        padding: 8,
        textAlign: "center",
        color:'white',  
    },
    buttonStyle:{
        backgroundColor:"#356588",
        width:"150px",
        margin:"auto",
        marginVertical:3,
    },
    checkBoxContainer:{
        display: "flex",
        flexDirection:"row",
        alignItems:"center",
        marginVertical:3,
    },
    checkBoxStyle:{
        backgroundColor: "#356588"
    }
})