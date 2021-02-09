import React, { useState, useEffect } from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { useIsFocused } from '@react-navigation/native'

export const LogScreenFoodRow = ({ foodObj, refresh, getter, queryGetter }) => {
  const styles = StyleSheet.create({

    large_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10

    },

    food_title_view: {
      marginBottom: 5
    },

    food_weight_view: {
      backgroundColor: 'grey'
    },

    food_title_text: {
      fontSize: 15
    },

    food_weight_text: {
      color: 'grey',
      fontSize: 15
    },

    food_calorie_text: {
      fontSize: 15
    }

  })
  const [FoodObj, setFoodObj] = useState('NotReady')
  const [foodList, setFoodList] = useState(
        <Text> Nothing to See here YET!!! </Text>
  )
  const isFocused = useIsFocused()

  useEffect(() => {
    console.log('Inside LogScreenFoodRow')
    console.log(foodObj)
    console.log(foodObj._array)
    console.log('Ending print Food Obj in USE Effect in LogScrennFoodRow')
    if (FoodObj !== 'NotReady') {
      console.log('@@@@@ Printing in LogScrennFoodRow @@@@@')
      console.log(FoodObj.foodObj._array)
      console.log('@@@ FoodObj isnt null anymore @@@')
      setFoodList(
                <FlatList
                    data={FoodObj.foodObj._array}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                />
      )
    }
  }, [foodObj])

  const Item = ({ fields, index }) => (

            <View style={styles.large_container}>

                <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-start" style={styles.name_column}>
                    <View style={styles.food_title_view}>
                        <Text style={styles.food_title_text}>{fields.name}</Text>
                    </View>
                    <View >
                        <Text style={styles.food_weight_text}>{fields.weight}g</Text>
                    </View>
                </View>

                <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-end" style={styles.calorie_column}>
                    <Text style={styles.food_calorie_text}>{fields.calories}</Text>
                </View>
            </View>

  )

  useEffect(() => {
    if (foodObj._array !== [] || foodObj !== 'NotReady' || typeof foodObj._array !== 'undefined') {
      console.log(foodObj)
      setFoodObj({ foodObj })
    }
  }, [foodObj])

  useEffect(() => {
    console.log('Printing in LogScreen FoodRow iSFOCUSED useEffect')

    queryGetter()
    console.log(foodObj)
  }, [isFocused])

  const renderItem = ({ item, index }) => (
        <Item fields={item} index = {index + 1}/>
  )

  return (
            <View style={styles.large_container}>
                {foodList}
            </View>

  )
}
