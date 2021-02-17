import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Picker,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard, KeyboardAvoidingView, AsyncStorage
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
  const SaveFirstUsage = async () => {
    await AsyncStorage.setItem('FirstTime', 'false')
  }

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
                 <ProfileForm database={database} profileSubmitted={setProfileHasBeenSubmitted}/>
        </KeyboardAvoidingView>

  )
}
