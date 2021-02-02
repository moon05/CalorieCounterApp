import React, { useEffect } from 'react'
import { SafeAreaView, View, StyleSheet } from 'react-native'
import { Divider, Text } from 'react-native-paper'

import { CALORIE_DASHBOARD } from './reusable_components/calorie_dashboard'

export const HomeScreen = ({ navigation, database }) => {
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
  const navigateDetails = () => {
    navigation.navigate('Log')
  }

  useEffect(() => {
    console.log('printing props in homeScreen')
    console.log(database)
    console.log('Done printing')
  })

  return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text style={styles.appHeaderName}>Lightweight Calorie Counter</Text>
            <View style={{ flex: 1, justifyContent: 'flex-start', paddingLeft: 10, paddingRight: 10, paddingTop: 15 }}>
                <CALORIE_DASHBOARD/>
            </View>
            <Divider/>
        </SafeAreaView>
  )
}
