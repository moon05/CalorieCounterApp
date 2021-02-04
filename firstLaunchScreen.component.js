import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Picker,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard, KeyboardAvoidingView
} from 'react-native'
import { Divider, Text, TextInput, Button } from 'react-native-paper'

// import { Profiles } from './reusable_components/temp'
import { ProfileForm } from './reusable_components/createProfileForm'

export const FirstLaunchScreen = ({ database, propSetter }) => {
  useEffect(() => {
    console.log('printing props in FirstLaunchScreen')
    // console.log(database)
    console.log('Done printing')
  })

  const [profileHasBeenSubmitted, setProfileHasBeenSubmitted] = useState(false)

  useEffect(() => {
    if (profileHasBeenSubmitted) {
      propSetter(profileHasBeenSubmitted)
    }
  }, [profileHasBeenSubmitted])

  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    inner: {
      padding: 24,
      flex: 1,
      justifyContent: 'space-around'
    },
    header: {
      fontSize: 36,
      marginBottom: 48
    },
    textInput: {
      height: 40,
      borderColor: '#000000',
      borderBottomWidth: 1,
      marginBottom: 36
    },
    btnContainer: {
      backgroundColor: 'white',
      marginTop: 12
    }
  })

  return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                 <ProfileForm database={database} profileSubmitted={setProfileHasBeenSubmitted}/>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>

  )
}
