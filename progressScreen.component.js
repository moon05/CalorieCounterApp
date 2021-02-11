import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView, View, Dimensions } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { DatabaseContext } from './context/DatabaseContext'
import { useIsFocused } from '@react-navigation/native'
import { CustomPieChart } from './reusable_components/customPieChart'

import { VictoryBar, VictoryPie, VictoryLegend, VictoryChart, VictoryTheme } from 'victory-native'

export const ProgressScreen = ({ navigation, propDB }) => {
  const databaseContext = useContext(DatabaseContext)

  const isFocused = useIsFocused()

  const {
    getFoodGatherRowFromDate
  } = databaseContext

  const [foodGatherObj, setFoodGatherObj] = useState('NotReady')

  const [calorieData, setCalorieData] = useState({
    Breakfast: 0,
    Lunch: 0,
    Dinner: 0,
    Snacks: 0
  })

  const todayDate = new Date().toJSON().slice(0, 10)

  const queryFoodGatherTable = async (selectedDate) => {
    console.log('Result inside ASYNC FoodGather Progress Screen: ')
    getFoodGatherRowFromDate(propDB, selectedDate, setFoodGatherObj)
    console.log('@@@ Ending FoodGather Progress Screen @@@')
  }

  useEffect(() => {
    if (isFocused) {
      queryFoodGatherTable(todayDate)
    }
  }, [isFocused])

  useEffect(() => {
    console.log('Printing in Progress Screen')
    console.log(foodGatherObj)
  }, [foodGatherObj])

  useEffect(() => {
    if (foodGatherObj !== 'NotReady') {
      if (!Array.isArray(foodGatherObj._array) || !foodGatherObj._array.length) {
      } else {
        const t = {
          Breakfast: foodGatherObj._array[0].breakfastNetCalorie,
          Lunch: foodGatherObj._array[0].lunchNetCalorie,
          Dinner: foodGatherObj._array[0].dinnerNetCalorie,
          Snacks: foodGatherObj._array[0].snacksNetCalorie
        }
        setCalorieData(t)
        console.log('Printing Calorie Data')
        console.log(calorieData)
      }
    }
  }, [foodGatherObj])

  const [calorieProcessedData, setCalorieProcessedData] = useState([
    { period: 'Breakfast', calories: 0 },
    { period: 'Lunch', calories: 0 },
    { period: 'Dinner', calories: 0 },
    { period: 'Snacks', calories: 0 }])

  useEffect(() => {
    const data = [
      { period: 'Breakfast', calories: calorieData.Breakfast },
      { period: 'Lunch', calories: calorieData.Lunch },
      { period: 'Dinner', calories: calorieData.Dinner },
      { period: 'Snacks', calories: calorieData.Snacks }]
    setCalorieProcessedData(data)
  }, [calorieData])

  return (
        <SafeAreaView style={{ flex: 1 }}>
          <View flexDirection = "column" justifyContent= 'flex-start'>
            <Divider/>

            <View>
              <Text> Calorie Consumption </Text>
            </View>

            <CustomPieChart
                data={calorieProcessedData}
                xAccessor={'period'}
                yAccessor={'calories'}
                colorArray={['tomato', 'orange', 'gold', 'turquoise']}
                heightPie={250}
                gutterLegend={40}
                heightLegend={80}
            />

            <Divider style={{ height: 40, backgroundColor: 'red', marginTop: 100, marginBottom: 20 }}/>
          </View>

        </SafeAreaView>
  )
}
