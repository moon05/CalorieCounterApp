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

export const FirstLaunchScreen = ({ navigation, database, propSetter }) => {
  const [profileHasBeenSubmitted, setProfileHasBeenSubmitted] = useState(false)

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
                 <ProfileForm navi={navigation} database={database} profileSubmitted={setProfileHasBeenSubmitted}/>
        </KeyboardAvoidingView>

  )
}
