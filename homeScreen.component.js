import React, { useEffect, useState } from 'react'
import {
  SafeAreaView, View, StyleSheet, Picker, ScrollView, KeyboardAvoidingView,
  Platform, TouchableWithoutFeedback, Keyboard, AsyncStorage
} from 'react-native'
import { Divider, Text, TextInput, Button } from 'react-native-paper'

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

  useEffect(() => {
    AsyncStorage.getItem('FirstTime', (err, result) => {
      console.log('Inside Home Screen Async')
      console.log('Result:' + result)
      console.log('Err:' + err)
    })
  })

  return (
        <SafeAreaView style={{ flex: 1 }}>
              {/* <FirstLaunchScreen database={propDB} propSetter={setProfileHasBeenSubmitted}/> */}
          {/* <Profiles database={propDB} safeToLoad={profileHasBeenSubmitted}/> */}
          <View>
            <Text>
              You are in HomeScreen!!
            </Text>
          </View>

          <Divider/>
        </SafeAreaView>
  )
}
