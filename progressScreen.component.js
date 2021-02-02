import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Divider, Text } from 'react-native-paper'

export const ProgressScreen = ({ navigation }) => {
  return (
        <SafeAreaView style={{ flex: 1 }}>
            <Divider/>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1'>Progress Screen</Text>
            </View>
        </SafeAreaView>
  )
}
