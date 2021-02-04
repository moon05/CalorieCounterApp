import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, StyleSheet, Picker, ScrollView } from 'react-native'
import { Divider, Text, TextInput, Button } from 'react-native-paper'

import { CALORIE_DASHBOARD } from './reusable_components/calorie_dashboard'

import { Profiles } from './reusable_components/temp'
import { ProfileForm } from './reusable_components/createProfileForm'

export const HomeScreen = ({ database }) => {
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

  // const [profileInfo, setProfileInfo] = {}
  //
  // const handleSubmit = e => {
  //
  // }
  console.log('Printing again in HOMESCREEN:')
  console.log(database)

  return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.appHeaderName}>Lightweight Calorie Counter</Text>
            <View style={{ flex: 1, justifyContent: 'flex-start', paddingLeft: 10, paddingRight: 10, paddingTop: 15 }}>
                 <CALORIE_DASHBOARD/>
                 <ScrollView>
                 <ProfileForm database={database}/>

                 <Profiles database={database}/>
                 </ScrollView>
            </View>

          <Divider/>
        </SafeAreaView>
  )
}
