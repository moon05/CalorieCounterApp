import React, { useEffect, useState } from 'react'
import {
  SafeAreaView, View, StyleSheet, Picker, ScrollView, KeyboardAvoidingView,
  Platform, TouchableWithoutFeedback, Keyboard, AsyncStorage
} from 'react-native'
import { Divider, Text, TextInput, Button } from 'react-native-paper'
import { MealPlan } from './reusable_components/mealPlan'
import { MealPlanCard } from './reusable_components/mealPlanCard'
import { FOOD_OBJECTS } from './reusable_components/food_detailed_data'

export const HomeScreen = ({ propDB }) => {
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

    }
  })

  const [profileHasBeenSubmitted, setProfileHasBeenSubmitted] = useState(false)

  console.log('Printing in HOMESCREEN:')
  console.log(propDB)

  useEffect(() => {
    AsyncStorage.getItem('FirstTime', (err, result) => {
      console.log('Inside Home Screen Async')
      console.log('Result:' + result)
      console.log('Err:' + err)
    })
  })

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

  return (
        <SafeAreaView style={{ flex: 1 }}>
              {/* <FirstLaunchScreen database={propDB} propSetter={setProfileHasBeenSubmitted}/> */}
          {/* <Profiles database={propDB} safeToLoad={profileHasBeenSubmitted}/> */}
          <View style={styles.mainContainer}>
            <Text>
              You are in HomeScreen!!
            </Text>
            <Text>
              Sample Plans
            </Text>
             <MealPlanCard planName={'DuckLobster'} foodItemsObject={planObject1}/>
            <MealPlan foodObjectArr={planObject1} totalCal={1100}/>
          </View>

        </SafeAreaView>
  )
}
