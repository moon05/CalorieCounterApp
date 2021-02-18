import React, { useState, useEffect } from 'react'
import { SafeAreaView, Image, View, FlatList, StyleSheet } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { DatabaseContext } from '../context/DatabaseContext'
import { FOOD_OBJECTS } from './food_detailed_data'

export const MealPlan = ({ route, navigation }) => {
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
      flexDirection: 'column',
      marginTop: 20
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
    },

    total_row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      marginTop: 15,
      marginBottom: 15
    },
    food_weight_view: {
      backgroundColor: 'grey'
    },

    food_title_text: {
      fontSize: 15
    },

    list_item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 10,
      paddingBottom: 5
    },

    period_title: {
      fontWeight: '500',
      fontSize: 18
    }

  })

  console.log(FOOD_OBJECTS.ribEye, FOOD_OBJECTS.shrimp)

  const Item = ({ fields, index }) => (

        <View style={styles.list_item}>
            <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-start" style={styles.name_column}>
                <View style={styles.food_title_view}>
                    <Text style={styles.food_title_text}>{fields.name}</Text>
                </View>
            </View>
            <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-start" style={styles.name_column}>
                <View style={styles.food_title_view}>
                    <Text style={styles.food_title_text}>{fields.calories}</Text>
                </View>
            </View>
        </View>

  )
  const renderItem = ({ item, index }) => (
        <Item fields={item} index = {index + 1}/>
  )

  return (
                <View style={styles.large_container}>
                    <View>
                        <View >
                            <Text style={styles.period_title}> Breakfast </Text>
                        </View>

                        <FlatList
                            data={[FOOD_OBJECTS.ribEye, FOOD_OBJECTS.shrimp]}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index}
                        />

                    </View>

                    <View>
                        <View >
                            <Text style={styles.period_title}> Lunch </Text>
                        </View>

                        <FlatList
                            data={[FOOD_OBJECTS.duck, FOOD_OBJECTS.lobster]}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index}
                        />

                    </View>

                    <View>
                        <View >
                            <Text style={styles.period_title}> Dinner </Text>
                        </View>

                        <FlatList
                            data={[FOOD_OBJECTS.shrimp, FOOD_OBJECTS.salmon]}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index}
                        />

                    </View>

                    <View>
                        <View >
                            <Text style={styles.period_title}> Snacks </Text>
                        </View>

                        <FlatList
                            data={[FOOD_OBJECTS.rainbowTrout, FOOD_OBJECTS.shrimp]}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index}
                        />

                    </View>

                    <Divider style={{ marginTop: 20, marginBottom: 15 }}/>

                    <View style={styles.total_row}>
                        <View>
                            <Text style={styles.period_title}> Total Calories </Text>
                        </View>
                        <View>
                            <Text style={styles.period_title}> Put total Calories </Text>
                        </View>
                    </View>

                    <View style={styles.total_row}>
                        <View>
                            <Text style={styles.period_title}> Total Protein </Text>
                        </View>
                        <View>
                            <Text style={styles.period_title}> Put total Protein </Text>
                        </View>
                    </View>

                </View>
  )
}
