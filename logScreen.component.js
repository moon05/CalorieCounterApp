import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView, View } from 'react-native'
import { Divider, Text, Button } from 'react-native-paper'
import { CALORIE_DASHBOARD } from './reusable_components/calorie_dashboard'
import { DatabaseContext } from './context/DatabaseContext'

export const LogScreen = ({ navigation, propDB }) => {
  const databaseContext = useContext(DatabaseContext)
  const { getStoredFood } = databaseContext
  const [loaded, setLoaded] = useState(false)
  const [foodObj, setFoodObj] = useState(undefined)

  console.log('Printing in LogScreen')
  console.log(propDB)
  console.log(navigation)
  //
  // const NavigateToFoodSelectionScreen = (headerName) => {
  //   navigation.navigate('AddFood', { name: headerName })
  // }

  const queryFoodTable = async () => {
    console.log('Result inside ASYNC LogScreen: ')
    getStoredFood(propDB, setFoodObj)
    console.log('Ending LogScreen')
  }

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    console.log('Calling QueryFoodTable')
    queryFoodTable()
  }, [loaded])

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

                        <Button onPress={() =>
                          navigation.navigate('AddFood', { name: 'Breakfast' })
                        }>
                            ADD FOOD
                        </Button>
                    </View>

                    <Divider style={{ height: 10, marginTop: 20 }}/>

                    <View flexDirection='column'>
                        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Lunch </Text>
                        <Divider style={{ marginTop: 10 }}/>

                        <Button onPress={() =>
                          navigation.navigate('AddFood', { name: 'Lunch' })
                        }>
                            ADD FOOD
                        </Button>
                    </View>

                    <Divider style={{ height: 10, marginTop: 20 }}/>

                    <View flexDirection='column'>
                        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Dinner </Text>
                        <Divider style={{ marginTop: 10 }}/>

                        <Button onPress={() =>
                          navigation.navigate('AddFood', { name: 'Dinner' })
                        }>
                            ADD FOOD
                        </Button>
                    </View>

                    <Divider style={{ height: 10, marginTop: 20 }}/>

                    <View flexDirection='column'>
                        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Snacks </Text>
                        <Divider style={{ marginTop: 10 }}/>

                        <Button onPress={() =>
                          navigation.navigate('AddFood', { name: 'Snacks' })
                        }>
                            ADD FOOD
                        </Button>
                    </View>

                    <Divider style={{ height: 10, marginTop: 20 }}/>

                    <View flexDirection='column'>
                        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Water </Text>
                        <Divider style={{ marginTop: 10 }}/>
                        <Text style={{ marginTop: 15 }}> ADD Water </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
  )
}
