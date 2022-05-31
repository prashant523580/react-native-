import React from 'react'
import { Dimensions, Image, StyleSheet, View } from 'react-native'
import { generateImgUrl } from '../../urlConfig';

export const SLIDER_WIDTH = Dimensions.get("window").width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

export const CarouselItem = ({item,index}) => {
  return (
    <View style={styles.container} key={index}>
        <Image
            source={{
                uri: generateImgUrl(item.img)
            }}
            style={styles.image}
            resizeMode={"contain"}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      borderRadius: 8,
      width: SLIDER_WIDTH,
      // width:"100%",
      paddingBottom: 40,
      elevation: 7,
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    },
    image: {
      width: ITEM_WIDTH,
      // width:"100%",
      height: "100%",
      aspectRatio:1,
      resizeMode:"contain"
    },
    header: {
      color: "#222",
      fontSize: 28,
      fontWeight: "bold",
      paddingLeft: 20,
      paddingTop: 20
    },
    body: {
      color: "#222",
      fontSize: 18,
      paddingLeft: 20,
      paddingLeft: 20,
      paddingRight: 20
    }
  })
  
  export default CarouselItem;