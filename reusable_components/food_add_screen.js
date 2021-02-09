import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView, Image, View, FlatList, StyleSheet, ScrollView } from 'react-native'
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

    nutrition_fact_table_container: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginTop: 40,
      marginLeft: 10,
      marginRight: 10
    },

    nutrition_fact_header_view: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15
    },

    nutrition_fact_header_text: {
      fontSize: 18
    },

    nutrition_fact_row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },

    divider_nutrition_fact_row: {
      marginTop: 20,
      marginBottom: 20
    },

    nutrition_fact_title_view: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    nutrition_fact_title_text: {
      fontSize: 14
    },
    nutrition_fact_value_view: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    nutrition_fact_value_text: {
      fontSize: 14,
      color: 'grey'
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
            <ScrollView showsVerticalScrollIndicator={false}>
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

                    <View style={styles.nutrition_fact_table_container}>

                        <View style={styles.nutrition_fact_header_view}>
                            <Text style={styles.nutrition_fact_header_text}> Nutrition Facts </Text>
                        </View>

                        <View style={styles.nutrition_fact_row}>
                            <View style={styles.nutrition_fact_title_view}>
                                <Text style={styles.nutrition_fact_title_text}> Calories </Text>
                            </View>
                            <View style={styles.nutrition_fact_value_view}>
                                <Text style={styles.nutrition_fact_value_text}> {route.params.foodInfo.calories} </Text>
                            </View>
                        </View>

                        <Divider style={styles.divider_nutrition_fact_row}/>

                        <View style={styles.nutrition_fact_row}>
                            <View style={styles.nutrition_fact_title_view}>
                                <Text style={styles.nutrition_fact_title_text}> Total Fat </Text>
                            </View>
                            <View style={styles.nutrition_fact_value_view}>
                                <Text style={styles.nutrition_fact_value_text}> {route.params.foodInfo.fat} g </Text>
                            </View>
                        </View>

                        <Divider style={styles.divider_nutrition_fact_row}/>

                        <View style={styles.nutrition_fact_row}>
                            <View style={styles.nutrition_fact_title_view}>
                                <Text style={styles.nutrition_fact_title_text}> Sodium </Text>
                            </View>
                            <View style={styles.nutrition_fact_value_view}>
                                <Text style={styles.nutrition_fact_value_text}> {route.params.foodInfo.sodium} g </Text>
                            </View>
                        </View>

                        <Divider style={styles.divider_nutrition_fact_row}/>

                        <View style={styles.nutrition_fact_row}>
                            <View style={styles.nutrition_fact_title_view}>
                                <Text style={styles.nutrition_fact_title_text}> Carbohydrates </Text>
                            </View>
                            <View style={styles.nutrition_fact_value_view}>
                                <Text style={styles.nutrition_fact_value_text}> {route.params.foodInfo.carbohydrates} g </Text>
                            </View>
                        </View>

                        <Divider style={styles.divider_nutrition_fact_row}/>

                        <View style={styles.nutrition_fact_row}>
                            <View style={styles.nutrition_fact_title_view}>
                                <Text style={styles.nutrition_fact_title_text}> Sugar </Text>
                            </View>
                            <View style={styles.nutrition_fact_value_view}>
                                <Text style={styles.nutrition_fact_value_text}> {route.params.foodInfo.sugar} g </Text>
                            </View>
                        </View>

                        <Divider style={styles.divider_nutrition_fact_row}/>

                        <View style={styles.nutrition_fact_row}>
                            <View style={styles.nutrition_fact_title_view}>
                                <Text style={styles.nutrition_fact_title_text}> Protein </Text>
                            </View>
                            <View style={styles.nutrition_fact_value_view}>
                                <Text style={styles.nutrition_fact_value_text}> {route.params.foodInfo.protein} g </Text>
                            </View>
                        </View>

                        <Divider style={styles.divider_nutrition_fact_row}/>

                        <View style={styles.nutrition_fact_row}>
                            <View style={styles.nutrition_fact_title_view}>
                                <Text style={styles.nutrition_fact_title_text}> Protein </Text>
                            </View>
                            <View style={styles.nutrition_fact_value_view}>
                                <Text style={styles.nutrition_fact_value_text}> {route.params.foodInfo.protein} g </Text>
                            </View>
                        </View>

                        <Divider style={styles.divider_nutrition_fact_row}/>

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>

  )
}
