import React, { useContext, useState, useEffect } from 'react'
import { ActivityIndicator, SafeAreaView, Image, View, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { DatabaseContext } from '../context/DatabaseContext'
import SkeletonContent from 'react-native-skeleton-content'

export const FOOD_SELECTION_SCREEN = ({ propDB, route, navigation }) => {
  const databaseContext = useContext(DatabaseContext)
  const { getStoredFood } = databaseContext
  const [loaded, setLoaded] = useState(false)
  const [foodObj, setFoodObj] = useState('NotReady')

  const styles = StyleSheet.create({

    large_container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginTop: 5
    },
    header_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 15,
      marginBottom: 10
    },
    header_item_view: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    header_gap_view: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    header_protein_view: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    },
    header_calories_view: {
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },

    flatList_food_row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    },

    flatList_food_image: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'grey',
      borderRadius: 3,
      marginTop: 10,
      marginLeft: 10

    },

    flatList_name_column: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: 190,
      paddingLeft: 5,
      marginLeft: -25
    },

    flatList_protein_column: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      width: 50,
      marginLeft: -35

    },

    flatList_calorie_column: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      width: 50,
      paddingRight: 5,
      marginRight: 8
    }
  })

  const todayDate = new Date().toJSON().slice(0, 10)

  useEffect(() => {
    setLoaded(true)
  }, [])

  const queryFoodTable = async () => {
    getStoredFood(propDB, setFoodObj)
  }

  useEffect(() => {
    console.log('Calling QueryFoodTable')
    queryFoodTable()
  }, [loaded])

  useEffect(() => {
    if (foodObj !== 'NotReady') {
      if (!Array.isArray(foodObj._array) || !foodObj._array.length) {

      } else {
        setFoodList(
                <FlatList
                    data={foodObj._array}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                />
        )
      }
    }
  }, [foodObj])

  const Item = ({ fields, index }) => (
      <TouchableWithoutFeedback
          onPress={() => {
            const itemId = index
            navigation.navigate('Add Food', {
              rightHeaderInsert: () => {
                route.params.itemRegisterFunc(propDB, todayDate, itemId)
              },
              foodInfo: fields,
              foodRowId: itemId,
              lastScreen: 'LogScreen'
            })
          }
          }
      >

      <View style={styles.flatList_food_row}>
          <View justifyContent="flex-start" alignItems="flex-start">
              <Image source={fields.imageSRC} style={styles.flatList_food_image}/>
          </View>
          <View style={styles.flatList_name_column}>
              <Text style={{ fontSize: 15, fontWeight: '500' }}>{fields.name}</Text>
              <Text style={{ fontSize: 13 }}>Serving Size: {fields.weight}g</Text>
          </View>

          <View style={styles.flatList_protein_column}>
              <Text>{fields.protein}</Text>
          </View>
          <View style={styles.flatList_calorie_column}>
              <Text>{fields.calories}</Text>
          </View>
      </View>
      </TouchableWithoutFeedback>

  )

  const renderItem = ({ item, index }) => (
        <Item fields={item} index = {index + 1}/>
  )

  const [foodList, setFoodList] = useState(
      <SkeletonContent
          containerStyle={{ flex: 1, width: 400 }}
          animationDirection="horizontalLeft"
          layout={[
            // long line
            { width: 355, height: 70, marginTop: 5, marginLeft: 10, marginBottom: 10 },
            { width: 355, height: 70, marginLeft: 10, marginBottom: 10 },
            { width: 355, height: 70, marginLeft: 10, marginBottom: 10 },
            { width: 355, height: 70, marginLeft: 10, marginBottom: 10 },
            { width: 355, height: 70, marginLeft: 10, marginBottom: 10 }
          ]}
          isLoading={true}
      />
  )

  return (
      <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.large_container}>
              <View style={styles.header_container}>
                  <View style={styles.header_item_view}>
                      <Text category="h6" style={{ marginLeft: 60, fontWeight: 'bold' }}>Item</Text>
                  </View>
                  <View style={styles.header_gap_view}>
                      <Text style={{ marginRight: 140 }}></Text>
                  </View>

                  <View style={styles.header_protein_view}>
                      <Text style={{ fontWeight: 'bold', width: 70, marginRight: 10 }}>Protein</Text>
                  </View>
                  <View style={styles.header_calories_view}>
                      <Text style={{ fontWeight: 'bold', width: 80, marginRight: 8 }}>Calories</Text>
                  </View>
              </View>

              <Divider style={{ marginTop: 5, marginBottom: 5 }}/>

              {foodList}

          </View>
      </SafeAreaView>

  )
}
