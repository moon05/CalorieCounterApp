import React, { useEffect, useState } from 'react'
import {
  SafeAreaView, View, StyleSheet, Picker, ScrollView, KeyboardAvoidingView,
  Platform, TouchableWithoutFeedback, Keyboard
} from 'react-native'
import { Divider, Text, TextInput, Button } from 'react-native-paper'

import { CALORIE_DASHBOARD } from './reusable_components/calorie_dashboard'

import { Profiles } from './reusable_components/temp'
import { ProfileForm } from './reusable_components/createProfileForm'
import { FirstLaunchScreen } from './firstLaunchScreen.component'

export const HomeScreen = ({ propDB }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      padding: 20,
      margin: 10
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

  return (
        <SafeAreaView style={{ flex: 1 }}>
              <FirstLaunchScreen database={propDB} propSetter={setProfileHasBeenSubmitted}/>
          {/* <Profiles database={propDB} safeToLoad={profileHasBeenSubmitted}/> */}

          <Divider/>
        </SafeAreaView>
  )
}
