import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView, Image, View, FlatList, StyleSheet } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { DatabaseContext } from '../context/DatabaseContext'
import { FOOD_DATA } from '../food_data'

export const FOOD_ADD_SCREEN = ({ propDB }) => {
  const databaseContext = useContext(DatabaseContext)
  const { getStoredFood } = databaseContext
  const [loaded, setLoaded] = useState(false)
  const [foodObj, setFoodObj] = useState(undefined)

  const styles = StyleSheet.create({
    food_image: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'grey',
      borderRadius: 3,
      marginLeft: 10

    },
    large_container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    food_row: {
      flex: 1,
      marginBottom: 10
    },
    name_column: {
      width: 190,
      paddingLeft: 10
    },
    protein_column: {
      width: 50
    },
    calorie_column: {
      width: 50,
      paddingRight: 5,
      marginRight: 8
    }
  })

  const queryFoodTable = async () => {
    console.log('Result inside ASYNC FoodAddScreen: ')
    getStoredFood(propDB, setFoodObj)
    console.log('Ending FoodAddScreen')
  }

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    console.log('Calling QueryFoodTable')
    queryFoodTable()
  }, [loaded])

  useEffect(() => {
    console.log('Starting to Print Food Obj')
    console.log(foodObj)
    console.log('Ending print Food Obj in USE Effect in Food Add Screen')
  }, [foodObj])

  const Item = ({ fields }) => (
        <View flexDirection="row" justifyContent="space-between" alignItems="center" style={styles.food_row}>
            <View justifyContent="flex-start" alignItems="flex-start">
                <Image source={fields.imageSRC} style={styles.food_image}/>
            </View>
            <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-start" style={styles.name_column}>
                <Text style={{ fontWeight: '500' }}>{fields.name}</Text>
                <Text>{fields.weight}</Text>
            </View>

            <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-center" style={styles.protein_column}>
                <Text>{fields.protein}</Text>
            </View>
            <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-end" style={styles.calorie_column}>
                <Text>{fields.calories}</Text>
            </View>
        </View>
  )

  const renderItem = ({ item }) => (
        <Item fields={item}/>
  )

  return (
      <SafeAreaView>
          <View style={styles.large_container}>
              <FlatList
                  data={FOOD_DATA}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
              />
          </View>
      </SafeAreaView>

  )
}
