import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, Picker, ScrollView } from 'react-native'
import { Divider, Text } from 'react-native-paper'

// import { Profiles } from './reusable_components/temp'
import { ProfileForm } from './reusable_components/createProfileForm'

export const HomeScreen = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: '#fff',
      padding: 20,
      margin: 10
    }
  })

  useEffect(() => {
    console.log('printing props in homeScreen')
    // console.log(database)
    console.log('Done printing')
  })

  // const [profileInfo, setProfileInfo] = {}
  //
  // const handleSubmit = e => {
  //
  // }

  return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.appHeaderName}>Lightweight Calorie Counter</Text>
            <View style={{ flex: 1, justifyContent: 'flex-start', paddingLeft: 10, paddingRight: 10, paddingTop: 15 }}>
                    <ProfileForm/>
            </View>

            {/* <Profiles/> */}

            <Divider/>
        </SafeAreaView>
  )
}
