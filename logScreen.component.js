import React, { useContext, useState, useEffect, useCallback } from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import { Divider, Text, Button } from 'react-native-paper'
import { CALORIE_DASHBOARD } from './reusable_components/calorie_dashboard'
import { DatabaseContext } from './context/DatabaseContext'
import { useIsFocused } from '@react-navigation/native'
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
    getAllAddedBreakfastItems,
    getAllAddedLunchItems
  } = databaseContext
  const [loaded, setLoaded] = useState(false)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [foodObj, setFoodObj] = useState(undefined)
  const [breakfastItemsObj, setBreakfastItemsObj] = useState('NotReady')
  const [lunchItemsObj, setLunchItemsObj] = useState('NotReady')
  const todayDate = new Date()

  const queryBreakfastTable = async () => {
    console.log('Result inside ASYNC Breakfast LogScreen: ')
    getAllAddedBreakfastItems(propDB, setBreakfastItemsObj)
    console.log('@@@ Ending Breakfast LogScreen @@@')
  }

  const queryLunchTable = async () => {
    console.log('Result inside ASYNC Lunch LogScreen: ')
    getAllAddedLunchItems(propDB, setLunchItemsObj)
    console.log('@@@ Ending Lunch LogScreen @@@')
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
                <ScrollView showsVerticalScrollIndicator={false}>
                  { isFocused
                    ? <FoodPeriodChunk
                          navi={navigation}
                          periodName={'Breakfast'}
                          regFunc={addNewBreakfastItem}
                          listToLoad={breakfastItemsObj}
                          getter={queryBreakfastTable}
                      />
                    : <FoodPeriodChunk
                          navi={navigation}
                          periodName={'Breakfast'}
                          regFunc={addNewBreakfastItem}
                          listToLoad={breakfastItemsObj}
                          getter={queryBreakfastTable}
                      />}

                  { isFocused
                    ? <FoodPeriodChunk
                          navi={navigation}
                          periodName={'Lunch'}
                          regFunc={addNewLunchItem}
                          listToLoad={lunchItemsObj}
                          getter={queryLunchTable}
                      />
                    : <FoodPeriodChunk
                          navi={navigation}
                          periodName={'Lunch'}
                          regFunc={addNewLunchItem}
                          listToLoad={lunchItemsObj}
                          getter={queryLunchTable}
                      />}

                  { isFocused
                    ? <FoodPeriodChunk
                          navi={navigation}
                          periodName={'Dinner'}
                          regFunc={addNewBreakfastItem}
                          listToLoad={lunchItemsObj}
                          getter={queryLunchTable}
                      />
                    : null}

                  { isFocused
                    ? <FoodPeriodChunk
                          navi={navigation}
                          periodName={'Snacks'}
                          regFunc={addNewBreakfastItem}
                          listToLoad={lunchItemsObj}
                          getter={queryLunchTable}
                      />
                    : null}

                </ScrollView>

            </View>
        </SafeAreaView>
  )
}
