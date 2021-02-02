import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { CALORIE_DASHBOARD } from './reusable_components/calorie_dashboard'

export const LogScreen = ({ navigation }) => {
  return (
        <SafeAreaView style={{ flex: 1 }}>

            <Divider/>
            <View style={{ flex: 1, justifyContent: 'flex-start', paddingLeft: 10, paddingRight: 10, paddingTop: 15 }}>
                <CALORIE_DASHBOARD/>
                {/* top label for calorie consumption */}
                <View flexDirection='column'>
                    <View flexDirection='column'>
                        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Breakfast | Time of Day </Text>
                        <Divider style={{ marginTop: 10 }}/>
                        <Text style={{ marginTop: 15 }}> ADD FOOD </Text>
                    </View>

                    <Divider style={{ height: 10, marginTop: 20 }}/>

                    <View flexDirection='column'>
                        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Lunch </Text>
                        <Divider style={{ marginTop: 10 }}/>
                        <Text style={{ marginTop: 15 }}> ADD FOOD </Text>
                    </View>

                    <Divider style={{ height: 10, marginTop: 20 }}/>

                    <View flexDirection='column'>
                        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Dinner </Text>
                        <Divider style={{ marginTop: 10 }}/>
                        <Text style={{ marginTop: 15 }}> ADD FOOD </Text>
                    </View>

                    <Divider style={{ height: 10, marginTop: 20 }}/>

                    <View flexDirection='column'>
                        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Snacks </Text>
                        <Divider style={{ marginTop: 10 }}/>
                        <Text style={{ marginTop: 15 }}> ADD FOOD </Text>
                    </View>

                    <Divider style={{ height: 10, marginTop: 20 }}/>

                    <View flexDirection='column'>
                        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Water </Text>
                        <Divider style={{ marginTop: 10 }}/>
                        <Text style={{ marginTop: 15 }}> ADD FOOD </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
  )
}
