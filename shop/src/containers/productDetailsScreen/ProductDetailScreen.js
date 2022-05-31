import React, { useEffect, useState } from 'react'
import { StyleSheet,Dimensions, Text, View, Image, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailsById } from '../../redux/actions/product.action';
// import Carousel,{Pagination} from "react-native-snap-carousel"

import CarouselItem, { ITEM_WIDTH, SLIDER_WIDTH } from '../../components/Carousel/CarouselItem';
import {SwiperFlatList} from "react-native-swiper-flatlist";
export const ProductDetailScreen = ({navigation,route}) => {
  let {productId} = route.params;
  const product = useSelector(state => state.product);
  const {productDetails} = product;
  const isCarousel = React.useRef(null);
  const [index,setIndex] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    let payload = {
      params:{ productId}
    }
    dispatch(getProductDetailsById(payload))
  },[])
  if (Object.keys(productDetails).length === 0) {
    return null;
  }
  // alert(JSON.stringify(productDetails.productPicture))
  

  return (
    
    <ScrollView>
          <View style={styles.imageContainer} >
<SwiperFlatList autoplay autoplayDelay={3} paginationActiveColor={"green"}  autoplayLoop index={2} showPagination={true} renderItem={CarouselItem} data={productDetails.productPicture}/>
          </View>
          <View style={styles.productDetails}>
              <Text style={styles.name}>{productDetails.name}</Text>
              <Text>Rs.{productDetails.price}</Text>
              <Text style={{fontSize:22}}> Description </Text>
              <View style={styles.details}> 
                    <Text style={styles.description}>{productDetails.description}</Text>
              </View>

          </View>
      </ScrollView>
  )
}
const width = Dimensions.get("window");
const styles = StyleSheet.create({
  // container: { flex: 1, backgroundColor: 'white' },
  // child: { width, justifyContent: 'center' },
  // text: { fontSize: width * 0.5, textAlign: 'center' },
  imageContainer:{
    width:"100%",
    height: 400
  },
  
  productDetails:{
      marginVertical: 5,
      paddingHorizontal: 5
    },
    name:{
      fontWeight:"bold",
      fontSize:18,
    },
    price:{
      
    },
    details:{
      
    },
    description:{
      fontSize: 16
  }
})