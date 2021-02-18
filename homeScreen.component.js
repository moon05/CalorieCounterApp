import React, { useContext, useEffect, useState } from 'react'
import {
  SafeAreaView, View, StyleSheet, Picker, ScrollView, KeyboardAvoidingView,
  Platform, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import { DatabaseContext } from './context/DatabaseContext'

import { Divider, Text, TextInput, Button } from 'react-native-paper'
import { MealPlanScreen } from './reusable_components/mealPlan'
import { MealPlanCard } from './reusable_components/mealPlanCard'
import { FOOD_OBJECTS } from './reusable_components/food_detailed_data'

export const HomeScreen = ({ navigation, route, propDB }) => {
  const databaseContext = useContext(DatabaseContext)
  const [profileObj, setProfileObj] = useState('NotReady')

  const {
    getStoredProfile
  } = databaseContext

  const queryProfileTable = async () => {
    console.log('@@@@@@@')
    getStoredProfile(propDB, setProfileObj)
    console.log('@@@@@@@')
  }
  useEffect(() => {
    queryProfileTable()
  }, [])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      padding: 20,
      margin: 10
    },
    mainContainer: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      marginLeft: 10,
      marginRight: 10,
      marginTop: 16
    },
    appHeaderName: {
      backgroundColor: 'pink',
      borderWidth: 5,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginTop: 5,
      marginBottom: 10

    },
    welcome_Header: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 30
    },
    welcome_text: {
      fontSize: 24,
      fontWeight: '300',
      color: 'grey'
    }
  })

  const [profileHasBeenSubmitted, setProfileHasBeenSubmitted] = useState(false)

  console.log('Printing in HOMESCREEN:')

  const planObject1 = {
    breakfast: [FOOD_OBJECTS.shrimp, FOOD_OBJECTS.rainbowTrout],
    lunch: [FOOD_OBJECTS.ribEye, FOOD_OBJECTS.salmon],
    dinner: [FOOD_OBJECTS.duck, FOOD_OBJECTS.lobster],
    snacks: [FOOD_OBJECTS.ribEye]
  }
  const planObject2 = { breakfast: [], lunch: [], dinner: [], snacks: [] }
  const planObject3 = { breakfast: [], lunch: [], dinner: [], snacks: [] }
  const planObject4 = { breakfast: [], lunch: [], dinner: [], snacks: [] }
  const planObject5 = { breakfast: [], lunch: [], dinner: [], snacks: [] }

  useEffect(() => {
    console.log(profileObj)
  }, [profileObj])
  useEffect(() => {
    console.log('Printing routes')
    console.log(route.params)
  })

  return (
        <SafeAreaView style={{ flex: 1 }}>

          <View style={styles.mainContainer}>
            <View style={styles.welcome_Header}>
              {profileObj === 'NotReady'
                ? (<Text style={styles.welcome_text}>Welcome {''}!!!</Text>)
                : (<Text style={styles.welcome_text}>
                    Welcome <Text style={{ color: 'grey', fontWeight: '500' }}>{profileObj._array[0].username} </Text>!!!
                  </Text>)
              }
            </View>

            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontSize: 16, color: 'grey', fontWeight: '500' }}>
                Sample Meal Plans
              </Text>
            </View>

            {/* // will make it a flatlist later */}

            <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Meal Plan',
                    { planName: 'Duck&Lobster', totalCal: 1000, foodItemsObject: planObject1 }
                  )
                }
                }
            >
              <View>
                <MealPlanCard planName={'Duck&Lobster'} foodItemsObject={planObject1}/>
              </View>

            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Meal Plan',
                    { planName: 'RibEye&Trout', totalCal: 1000, foodItemsObject: planObject1 }
                  )
                }
                }
            >
              <View style={{ marginTop: 20 }}>
                <MealPlanCard planName={'RibEye&Trout'} foodItemsObject={planObject1}/>
              </View>

            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Meal Plan',
                    { planName: 'Salmon&Shrimp', totalCal: 1000, foodItemsObject: planObject1 }
                  )
                }
                }
            >
              <View style={{ marginTop: 20 }}>
                <MealPlanCard planName={'Salmon&Shrimp'} foodItemsObject={planObject1}/>
              </View>

            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
                onPress={() => {
                  navigation.navigate('Meal Plan',
                    { planName: 'Salmon&Trout', totalCal: 1000, foodItemsObject: planObject1 }
                  )
                }
                }
            >
              <View style={{ marginTop: 20 }}>
                <MealPlanCard planName={'Salmon&Trout'} foodItemsObject={planObject1}/>
              </View>

            </TouchableWithoutFeedback>
          </View>

        </SafeAreaView>
  )
}
