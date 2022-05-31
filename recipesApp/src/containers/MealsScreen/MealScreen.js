import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../../reduxStore/actions/recipe.action';

export const MealScreen = ({route,navigation}) => {
    const {meal} = route.params;
    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRecipes(meal));
    },[])
    const renderRecipes = ({item}) => {
        return(
            <TouchableOpacity style={styles.meal}>
                <Image style={styles.image} source={{
                    uri : item.strMealThumb
                }}/>
                <View>
                    <Text>{item.strMeal}</Text>
                </View>
            </TouchableOpacity>
        )
    }
  return (
    <ScrollView>
          <FlatList
          numColumns={2}
          keyExtractor={item => item.idMeal}
            data={recipes.recipes}
            renderItem={renderRecipes}
          />
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container:{
  
    },
        meal:{
                margin : 2
        },  
      itemName:{
        fontSize:20
      },
      image:{
        width:150,
        height: undefined,
        aspectRatio:1
      },
      description:{
        height:100,
        overflowY:"auto",
    }
  
  })