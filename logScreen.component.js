import React, { useContext, useState, useEffect, useCallback } from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import { Divider, Text, Button } from 'react-native-paper'
import { CALORIE_DASHBOARD } from './reusable_components/calorie_dashboard'
import { DatabaseContext } from './context/DatabaseContext'
import { LogScreenFoodRow } from './reusable_components/logscreen_foodrow'
import { useFocusEffect, useIsFocused } from '@react-navigation/native'
import { FoodPeriodChunk } from './reusable_components/foodPeriodChunk'

export const LogScreen = ({ navigation, propDB }) => {
  const databaseContext = useContext(DatabaseContext)
  const {
    getStoredFood,
    addNewBreakfastItem,
    addNewLunchItem,
    addNewDinnerItem,
    addNewSnacksItem,
    addNewWaterItem,
    getAllAddedBreakfastItems
  } = databaseContext
  const [loaded, setLoaded] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [foodObj, setFoodObj] = useState(undefined)
  const [breakfastItemsObj, setBreakfastItemsObj] = useState('NotReady')
  const todayDate = new Date()

  const [breakfastFoodList, setBreakfastFoodList] = useState('NotReady')
  console.log('Printing in LogScreen')
  console.log(navigation)

  const queryFoodTable = async () => {
    console.log('Result inside ASYNC Food LogScreen: ')
    getStoredFood(propDB, setFoodObj)
    console.log('@@@ Ending Food LogScreen @@@')
  }

  const queryBreakfastTable = async () => {
    console.log('Result inside ASYNC Breakfast LogScreen: ')
    getAllAddedBreakfastItems(propDB, setBreakfastItemsObj)
    console.log('@@@ Ending Breakfast LogScreen @@@')
  }

  useEffect(() => {
    setLoaded(true)
  }, [])

  useEffect(() => {
    console.log('Calling BreakfastFoodTable')
    console.log(breakfastItemsObj)
  })

  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      queryBreakfastTable()
    }
  }, [isFocused])

  return (
        <SafeAreaView style={{ flex: 1 }}>

            <Divider/>
            <View style={{ flex: 1, justifyContent: 'flex-start', paddingLeft: 10, paddingRight: 10, paddingTop: 15 }}>
                <CALORIE_DASHBOARD/>
                {/* top label for calorie consumption */}
                <ScrollView>
                  { isFocused
                    ? <FoodPeriodChunk navi={navigation} periodName={'Breakfast'} regFunc={addNewBreakfastItem}
                                    listToLoad={breakfastItemsObj} getter={queryBreakfastTable}/>
                    : null}

                {/* <View flexDirection='column'> */}

                {/*    <View flexDirection='column'> */}
                {/*        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Breakfast </Text> */}
                {/*        <Divider style={{ marginTop: 10, marginBottom: 10 }}/> */}

                {/*        <View>{isFocused */}
                {/*          ? <LogScreenFoodRow FoodObj={breakfastItemsObj._array} refresh={setIsRefreshing} getter={queryBreakfastTable}/> */}
                {/*          : null}</View> */}
                {/*        /!* <LogScreen foodObj={(breakfastItemsObj === 'NotReady') ? null : breakfastItemsObj}/> *!/ */}

                {/*        <Button onPress={() => */}
                {/*          navigation.navigate('FoodSelection', { name: 'Breakfast', itemRegisterFunc: addNewBreakfastItem }) */}
                {/*        }> */}
                {/*            ADD FOOD */}
                {/*        </Button> */}
                {/*    </View> */}

                {/*    <Divider style={{ height: 10, marginTop: 20 }}/> */}

                {/*    <View flexDirection='column'> */}
                {/*        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Lunch </Text> */}
                {/*        <Divider style={{ marginTop: 10 }}/> */}

                {/*        <Button onPress={() => */}
                {/*          navigation.navigate('FoodSelection', { name: 'Lunch' }) */}
                {/*        }> */}
                {/*            ADD FOOD */}
                {/*        </Button> */}
                {/*    </View> */}

                {/*    <Divider style={{ height: 10, marginTop: 20 }}/> */}

                {/*    <View flexDirection='column'> */}
                {/*        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Dinner </Text> */}
                {/*        <Divider style={{ marginTop: 10 }}/> */}

                {/*        <Button onPress={() => */}
                {/*          navigation.navigate('FoodSelection', { name: 'Dinner' }) */}
                {/*        }> */}
                {/*            ADD FOOD */}
                {/*        </Button> */}
                {/*    </View> */}

                {/*    <Divider style={{ height: 10, marginTop: 20 }}/> */}

                {/*    <View flexDirection='column'> */}
                {/*        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Snacks </Text> */}
                {/*        <Divider style={{ marginTop: 10 }}/> */}

                {/*        <Button onPress={() => */}
                {/*          navigation.navigate('FoodSelection', { name: 'Snacks' }) */}
                {/*        }> */}
                {/*            ADD FOOD */}
                {/*        </Button> */}
                {/*    </View> */}

                {/*    <Divider style={{ height: 10, marginTop: 20 }}/> */}

                {/*    <View flexDirection='column'> */}
                {/*        <Text style={{ marginTop: 10, fontWeight: 'bold' }}> Water </Text> */}
                {/*        <Divider style={{ marginTop: 10 }}/> */}
                {/*        <Text style={{ marginTop: 15 }}> ADD Water </Text> */}
                {/*    </View> */}
                {/* </View> */}
                </ScrollView>

            </View>
        </SafeAreaView>
  )
}
