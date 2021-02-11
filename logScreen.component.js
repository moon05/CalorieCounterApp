import React, { useContext, useState, useEffect, useCallback } from 'react'
import { SafeAreaView, View, ScrollView } from 'react-native'
import { Divider } from 'react-native-paper'
import { CALORIE_DASHBOARD } from './reusable_components/calorie_dashboard'
import { DatabaseContext } from './context/DatabaseContext'
import { useIsFocused } from '@react-navigation/native'
import { FoodPeriodChunk } from './reusable_components/foodPeriodChunk'

export const LogScreen = ({ navigation, propDB, route }) => {
  const databaseContext = useContext(DatabaseContext)
  const {
    addNewBreakfastItem,
    addNewLunchItem,
    addNewDinnerItem,
    addNewSnacksItem,
    addNewWaterItem,
    addNewFoodGather,
    getAllAddedBreakfastItems,
    getAllAddedLunchItems,
    getAllAddedDinnerItems,
    getAllAddedSnacksItems,
    getFoodGatherRowFromDate,
    updateFoodGatherRowWithDate
  } = databaseContext
  const [loaded, setLoaded] = useState(false)

  const [breakfastItemsObj, setBreakfastItemsObj] = useState('NotReady')
  const [lunchItemsObj, setLunchItemsObj] = useState('NotReady')
  const [dinnerItemsObj, setDinnerItemsObj] = useState('NotReady')
  const [snacksItemsObj, setSnacksItemsObj] = useState('NotReady')
  const [foodGatherObj, setFoodGatherObj] = useState('NotReady')

  const [breakfastAggregate, setBreakfastAggregate] = useState({
    NetCal: 0,
    NetCar: 0,
    NetFat: 0,
    NetPro: 0,
    NetSo: 0,
    NetSug: 0
  })
  const [lunchAggregate, setLunchAggregate] = useState({
    NetCal: 0,
    NetCar: 0,
    NetFat: 0,
    NetPro: 0,
    NetSo: 0,
    NetSug: 0
  })
  const [dinnerAggregate, setDinnerAggregate] = useState({
    NetCal: 0,
    NetCar: 0,
    NetFat: 0,
    NetPro: 0,
    NetSo: 0,
    NetSug: 0
  })
  const [snacksAggregate, setSnacksAggregate] = useState({
    NetCal: 0,
    NetCar: 0,
    NetFat: 0,
    NetPro: 0,
    NetSo: 0,
    NetSug: 0
  })

  const [dailyAggregate, setDailyAggregate] = useState({
    netCalorie: 0,
    netCarb: 0,
    netFat: 0,
    netProtein: 0,
    netSodium: 0,
    netSugar: 0
  })

  const todayDate = new Date().toJSON().slice(0, 10)

  const queryBreakfastTable = async () => {
    console.log('@@@@@@@')
    getAllAddedBreakfastItems(propDB, setBreakfastItemsObj)
    console.log('@@@@@@@')
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

  const queryFoodGatherTable = async (selectedDate) => {
    console.log('Result inside ASYNC FoodGather LogScreen: ')
    getFoodGatherRowFromDate(propDB, selectedDate, setFoodGatherObj)
    console.log('@@@ Ending FoodGather LogScreen @@@')
  }

  const aggregateFoodValues = (foodArray) => {
    let [NetCal, NetCar, NetFat, NetPro, NetSo, NetSug] = [0, 0, 0, 0, 0, 0]

    for (const item of foodArray) {
      NetCal += item.calories
      NetCar += item.carbohydrates
      NetFat += item.fat
      NetPro += item.protein
      NetSo += item.sodium
      NetSug += item.sugar
    }
    return { NetCal: NetCal, NetCar: NetCar, NetFat: NetFat, NetPro: NetPro, NetSo: NetSo, NetSug: NetSug }
  }

  useEffect(() => {
    setLoaded(true)
    addNewFoodGather(propDB, todayDate, 0, 0, 0, 0, 0, 0, 0, 0)
  }, [])

  const isFocused = useIsFocused()

  useEffect(() => {
    if (route.params.lastScreen === 'FoodAddScreen') {
      console.log('########################')
      queryBreakfastTable()
      queryLunchTable()
      queryDinnerTable()
      querySnacksTable()
      console.log(foodGatherObj)
      console.log('########################')
      console.log('Printing navigation Param')
      console.log(route.params)
    }
  }, [route])

  useEffect(() => {
    console.log('@@@ Printing FoodGather Obj in UseEffect @@@')
    console.log(foodGatherObj)
  }, [foodGatherObj])

  // SETTING AGGREGATE VALUES
  // breakfast
  useEffect(() => {
    if (breakfastItemsObj !== 'NotReady') {
      if (!Array.isArray(breakfastItemsObj._array) || !breakfastItemsObj._array.length) {

      } else {
        setBreakfastAggregate(aggregateFoodValues(breakfastItemsObj._array))
      }
    }
  }, [breakfastItemsObj])

  // lunch
  useEffect(() => {
    if (lunchItemsObj !== 'NotReady') {
      if (!Array.isArray(lunchItemsObj._array) || !lunchItemsObj._array.length) {

      } else {
        setLunchAggregate(aggregateFoodValues(lunchItemsObj._array))
      }
    }
  }, [lunchItemsObj])

  // dinner

  useEffect(() => {
    if (dinnerItemsObj !== 'NotReady') {
      if (!Array.isArray(dinnerItemsObj._array) || !dinnerItemsObj._array.length) {

      } else {
        setDinnerAggregate(aggregateFoodValues(dinnerItemsObj._array))
      }
    }
  }, [dinnerItemsObj])

  // snacks
  useEffect(() => {
    if (snacksItemsObj !== 'NotReady') {
      if (!Array.isArray(snacksItemsObj._array) || !snacksItemsObj._array.length) {

      } else {
        setSnacksAggregate(aggregateFoodValues(snacksItemsObj._array))
      }
    }
  }, [snacksItemsObj])

  // daily
  useEffect(() => {
    console.log('Inside Daily Aggregate')
    const a = breakfastAggregate.NetCal + lunchAggregate.NetCal + dinnerAggregate.NetCal + snacksAggregate.NetCal
    const b = breakfastAggregate.NetCar + lunchAggregate.NetCar + dinnerAggregate.NetCar + snacksAggregate.NetCar
    const c = breakfastAggregate.NetFat + lunchAggregate.NetFat + dinnerAggregate.NetFat + snacksAggregate.NetFat
    const d = breakfastAggregate.NetPro + lunchAggregate.NetPro + dinnerAggregate.NetPro + snacksAggregate.NetPro
    const e = breakfastAggregate.NetSo + lunchAggregate.NetSo + dinnerAggregate.NetSo + snacksAggregate.NetSo
    const f = breakfastAggregate.NetSug + lunchAggregate.NetSug + dinnerAggregate.NetSug + snacksAggregate.NetSug

    const t = {
      netCalorie: a,
      netCarb: b,
      netFat: c,
      netPro: d,
      netSodium: e,
      netSugar: f
    }
    setDailyAggregate(t)
    console.log(dailyAggregate)
    updateFoodGatherRowWithDate(propDB, todayDate, breakfastAggregate.NetCal, lunchAggregate.NetCal, dinnerAggregate.NetCal, snacksAggregate.NetCal, dailyAggregate.netCalorie, dailyAggregate.netCarb, dailyAggregate.netProtein, dailyAggregate.netFat)
  }, [breakfastAggregate, lunchAggregate, dinnerAggregate, snacksAggregate])

  return (
        <SafeAreaView style={{ flex: 1 }}>

            <Divider/>
            <View style={{ flex: 1, justifyContent: 'flex-start', paddingLeft: 10, paddingRight: 10, paddingTop: 15 }}>
                <CALORIE_DASHBOARD goalCalorie={2800} consumedCalorie={dailyAggregate.netCalorie}/>
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
