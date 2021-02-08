import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView, Image, View, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'

export const LogScreenFoodRow = ({ foodObj, refresh, getter, queryGetter }) => {
  const styles = StyleSheet.create({

    large_container: {
      flexDirection: 'column'
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

            <View flexDirection="row" justifyContent="space-between" alignItems="center" style={styles.food_row}>

                <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-start" style={styles.name_column}>
                    <Text style={{ fontWeight: '500' }}>{fields.name}</Text>
                    <Text>{fields.weight}g</Text>
                </View>

                <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-end" style={styles.calorie_column}>
                    <Text>{fields.calories}</Text>
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
