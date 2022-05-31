import React from 'react'
import { Text, TouchableOpacity,StyleSheet } from 'react-native'
import {Ionicons} from "@expo/vector-icons";
export const ShoppingCartIcon = () => {
  return (
      <TouchableOpacity style={{marginRight:10,position:"relative"}} activeOpacity={false}>
        <Text style={styles.length}>1</Text>
<Ionicons name='ios-cart' size={24} color={"white"}/>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    length:{
      position:"absolute",
      left:-18,
      top:-16,
      width:25,
      height:25,
      backgroundColor:"white",
      textAlign:"center",
      lineHeight:25,
      borderRadius:"50%"
    }
})