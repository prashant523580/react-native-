import React, { useEffect } from 'react'
import { FlatList, Image, Text, View ,StyleSheet, Dimensions,TouchableOpacity, SafeAreaView, Platform} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../redux/actions/product.action';
import { generateImgUrl } from '../../urlConfig';
import {Ionicons} from "@expo/vector-icons"; 
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const width = Dimensions.get("window").width;
export default function HomeScreen() {
  const products = useSelector(state => state.product);
  const dispatch = useDispatch();
  const navigation =  useNavigation();
  const {product} = products;
  useEffect( () => {
    dispatch(getAllProduct());
    
    // alert(JSON.stringify(product))
  },[])
  const renderProductItem = ({item}) =>{
    // alert(JSON.stringify(item))
    return(
      <TouchableOpacity activeOpacity={false} style={styles.product} onPress={() => navigation.navigate({name:"ProductDetails",
          params: {
            slug : item.slug,
            productId : item._id
          }
          })}>
            <View style={styles.pictureContainer}>

      <Image style={styles.picture} resizeMode="contain"
      source={{uri:generateImgUrl(item.productPicture[0].img)}}
      />
      </View>
      <View>
        <Text style={styles.name}  numberOfLines={1}>{item.name}</Text>
        <Text style={styles.price}>Rs.{item.price}</Text>
      </View>
      <View style={styles.footer}>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <AntDesign name="hearto" size={24} color="black" />
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
      )
  }
  return (
    
      <SafeAreaView style={styles.mainContainer}>
          <FlatList
          style={styles.productContainer}
          // numColumns={width}
        
          // showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexDirection:"row",flexWrap :"wrap",marginLeft:"5px"}}          
          keyExtractor={(item) => item._id}
            data={product}
            renderItem={renderProductItem}
          />
      </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  mainContainer:{
    paddingVertical:10,
    backgroundColor: "rgba(0,0,0,0.2)",
    flex:1,
  },
productContainer: {
    // backgroundColor: "red",
    // display:'flex',
    // flexDirection:"row",
    // flexWrap:"wrap",
    // marginHorizontal:2
},
  product:{
     width:Platform.OS === "ios" ? width : (width/2) -5,
    // width: Platform.OS === "ios" ? width : 170,
    height: 310,
    // marginVertical:,
    // marginHorizontal:2,
    margin:.5,
    paddingHorizontal:10,
    paddingVertical:10,
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#fff",
    borderRadius:2,
    overflow:"hidden"
  },

  name:{
    color: "black",
    overflow:"hidden",
    width:140,
  },

  pictureContainer:{
    // width: 168,
  },

  picture:{
    width:170,
    height:undefined,
    aspectRatio:1
  },
footer:{
  display: 'flex',
  flexDirection: 'row',
  alignItems:"center",
  width:"100%",
  marginTop: "auto",
  justifyContent:"space-around"
},
  button:{
    backgroundColor:"rgb(45, 65, 84)",
    // shadowColor:"#991100",
    shadowOffset:{
      width:0,
      height:1
    },
    shadowRadius: 2,
    shadowOpacity:1,
    width: 110,
    elevation:.1,
    borderRadius:4

  },

  buttonText:{
    textAlign:'center',
    paddingVertical:10,
    // color:"#991100",
    color:"#fff"
  }
})