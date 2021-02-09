import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView, Image, View, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { DatabaseContext } from '../context/DatabaseContext'

export const FOOD_ADD_SCREEN = ({ propDB, route, navigation }) => {
  const databaseContext = useContext(DatabaseContext)
  const [loaded, setLoaded] = useState(false)
  const [foodObj, setFoodObj] = useState('NotReady')

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
      marginTop: 20

    },
    food_nutrition_container_1: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginLeft: 10,
      marginRight: 10
    },

    divider_food_nutrition_containers: {
      marginTop: 12,
      marginBottom: 20
    },

    food_nutrition_container_2: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },

    food_nutrition_container_3: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 40,
      marginLeft: 10,
      marginRight: 10,
      marginBottom: 20
    },

    food_nutrition_container_4: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 40,
      marginLeft: 10,
      marginRight: 10
    },

    food_nutrition_views: {
      justifyContent: 'flex-start',
      alignItems: 'center'
    },

    food_title_view: {

    },

    food_title_text: {
      fontSize: 20,
      fontWeight: '500'
    },

    food_weight_view: {
      marginTop: 5

    },

    food_weight_text: {
      fontSize: 17,
      color: 'grey'
    },

    food_calorie_text: {
      fontSize: 20,
      fontWeight: '800'
    },

    food_other_nutrition_text: {
      fontSize: 16,
      fontWeight: 'bold'
    }

  })

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.large_container}>
                <View style={styles.food_nutrition_container_1}>
                    <View style={styles.food_title_view}>
                        <Text style={styles.food_title_text}> {route.params.foodInfo.name}</Text>
                    </View>
                    <View style={styles.food_weight_view}>
                        <Text style={styles.food_weight_text}> {route.params.foodInfo.weight}g</Text>
                    </View>
                </View>

                <Divider style={styles.divider_food_nutrition_containers}/>

                <View style={styles.food_nutrition_container_2}>
                    <View style={styles.food_nutrition_views}>
                        <Text style={styles.food_calorie_text}> {route.params.foodInfo.calories} </Text>
                        <Text category="h6"> Cal </Text>
                    </View>
                    <View style={styles.food_nutrition_views}>

                        <Text style={styles.food_other_nutrition_text}> {route.params.foodInfo.carbohydrates} g </Text>
                        <Text category="h6"> Carbs</Text>
                    </View>
                    <View style={styles.food_nutrition_views}>

                        <Text style={styles.food_other_nutrition_text}> {route.params.foodInfo.fat} g </Text>
                        <Text category="h6"> Fat </Text>
                    </View>
                    <View style={styles.food_nutrition_views}>

                        <Text style={styles.food_other_nutrition_text}> {route.params.foodInfo.protein} g </Text>
                        <Text category="h6"> Protein</Text>
                    </View>
                </View>

                <View style={styles.food_nutrition_container_3}>
                    <View>
                        <Text>Number of Servings</Text>
                    </View>
                    <View>
                        <Text style={{ color: 'blue', fontWeight: '300' }}>1</Text>
                    </View>
                </View>

                <Divider style={styles.divider_food_nutrition_containers}/>

                <View style={styles.food_nutrition_container_4}>
                    <Text>Nutrition Fact Table Will Go Here Later</Text>
                </View>
            </View>
        </SafeAreaView>

  )
}
