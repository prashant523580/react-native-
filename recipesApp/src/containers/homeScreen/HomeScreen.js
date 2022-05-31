import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, View,TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory, getRecipes } from '../../reduxStore/actions/recipe.action';

export const HomeScreen = () => {
  // const recipes = useSelector(state => state.recipes);
  const category = useSelector(state => state.category);
  const [meal ,setMeal] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getRecipes("chicken"));
    dispatch(getCategory())
  },[])
// alert(JSON.stringify(category))
const navigation = useNavigation();
const selectMeal = (meal) => {
navigation.navigate("Meals",{
  meal
});
}
const inputEvent =(e) => {
  setMeal(e.target.value)
}
const submitMeal = () => {
  // alert(meal)
  dispatch(getRecipes(meal))
  navigation.navigate("Meals",{
    meal
  })
  setMeal('')
}
  const renderCategory = ({item}) => {
    // const item = meal.item;
    // alert(JSON.stringify(meal.item))
    return(
      <TouchableOpacity style={styles.recipe} onPress={() => selectMeal(item.strCategory)}>
           <Image style={styles.image} resizeMode="contain" source={{
             uri: item.strCategoryThumb
            }}/>
            <View>

            <Text style={styles.itemName}> {item.strCategory}</Text>
            <Text style={styles.description} numberOfLines={1} ellipsizeMode="end">{item.strCategoryDescription}</Text>
            </View>
      </TouchableOpacity>
    )
  }
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>

        <TextInput onChange={inputEvent} value={meal} placeholder="search recipes"/>
        <Text onPress={submitMeal}>search</Text>
      </View>
        <FlatList
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        keyExtractor={(item) => item.idCategory}
          data={category.category}
          renderItem={renderCategory}
        />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 5,
  },
  recipe:{
      width : 270,
      height: 300,
      margin: 4,
      backgroundColor:"#fff",
      display:"flex",
      // alignItems:'center',
      // justifyContent:'center', 
      flexDirection:"column"
    },
    itemName:{
      fontSize:20,
    },
    image:{
      width:150,
      // height: undefined,
      aspectRatio:1
    },
    description:{
      height:100,
      overflowY:"auto",
  }

})