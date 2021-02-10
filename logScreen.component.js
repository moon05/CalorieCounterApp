import React, { useContext, useState, useEffect, useCallback } from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import { Divider } from 'react-native-paper'
import { CALORIE_DASHBOARD } from './reusable_components/calorie_dashboard'
import { DatabaseContext } from './context/DatabaseContext'
import { useIsFocused } from '@react-navigation/native'
import { FoodPeriodChunk } from './reusable_components/foodPeriodChunk'

export const LogScreen = ({ navigation, propDB }) => {
  const databaseContext = useContext(DatabaseContext)
  const {
    addNewBreakfastItem,
    addNewLunchItem,
    addNewDinnerItem,
    addNewSnacksItem,
    addNewWaterItem,
    getAllAddedBreakfastItems,
    getAllAddedLunchItems,
    getAllAddedDinnerItems,
    getAllAddedSnacksItems
  } = databaseContext
  const [loaded, setLoaded] = useState(false)
  // const [isRefreshing, setIsRefreshing] = useState(false)
  // const [foodObj, setFoodObj] = useState(undefined)
  const [breakfastItemsObj, setBreakfastItemsObj] = useState('NotReady')
  const [lunchItemsObj, setLunchItemsObj] = useState('NotReady')
  const [dinnerItemsObj, setDinnerItemsObj] = useState('NotReady')
  const [snacksItemsObj, setSnacksItemsObj] = useState('NotReady')

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

  const queryDinnerTable = async () => {
    console.log('Result inside ASYNC Dinner LogScreen: ')
    getAllAddedDinnerItems(propDB, setDinnerItemsObj)
    console.log('@@@ Ending Dinner LogScreen @@@')
  }

  const querySnacksTable = async () => {
    console.log('Result inside ASYNC Snacks LogScreen: ')
    getAllAddedSnacksItems(propDB, setSnacksItemsObj)
    console.log('@@@ Ending Snacks LogScreen @@@')
  }

  useEffect(() => {
    setLoaded(true)
  }, [])

  const isFocused = useIsFocused()

  useEffect(() => {
    if (isFocused) {
      queryBreakfastTable()
      queryLunchTable()
      queryDinnerTable()
      querySnacksTable()
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
                          regFunc={addNewDinnerItem}
                          listToLoad={dinnerItemsObj}
                          getter={queryDinnerTable}
                      />
                    : <FoodPeriodChunk
                          navi={navigation}
                          periodName={'Dinner'}
                          regFunc={addNewDinnerItem}
                          listToLoad={dinnerItemsObj}
                          getter={queryDinnerTable}
                      />}

                  { isFocused
                    ? <FoodPeriodChunk
                          navi={navigation}
                          periodName={'Snacks'}
                          regFunc={addNewSnacksItem}
                          listToLoad={snacksItemsObj}
                          getter={querySnacksTable}
                      />
                    : <FoodPeriodChunk
                          navi={navigation}
                          periodName={'Snacks'}
                          regFunc={addNewSnacksItem}
                          listToLoad={snacksItemsObj}
                          getter={querySnacksTable}
                      />}

                </ScrollView>

            </View>
        </SafeAreaView>
  )
}
