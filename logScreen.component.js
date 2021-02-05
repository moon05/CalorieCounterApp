import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Divider, Text, Button } from 'react-native-paper'
import { CALORIE_DASHBOARD } from './reusable_components/calorie_dashboard'
import { FOOD_ADD_SCREEN } from './reusable_components/food_add_screen'

export const LogScreen = ({ navigation, propDB }) => {
  console.log('Printing in LogScreen')
  console.log(propDB)
  console.log(navigation)
  const NavigateToAddFoodScreen = () => {
    navigation.navigate('Add Food')
  }
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
                        <FOOD_ADD_SCREEN propDB={ propDB }/>
                        <Button onPress={NavigateToAddFoodScreen}> ADD FOOD </Button>
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
