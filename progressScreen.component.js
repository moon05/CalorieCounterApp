import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, View, Dimensions } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { DatabaseContext } from './context/DatabaseContext'
import { useIsFocused } from '@react-navigation/native'
import { CustomPieChart } from './reusable_components/customPieChart'

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

  const [macroData, setMacroData] = useState({
    Carbohydrates: 0,
    Fat: 0,
    Sodium: 0,
    Sugar: 0,
    Protein: 0
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
        const tCal = {
          Breakfast: foodGatherObj._array[0].breakfastNetCalorie,
          Lunch: foodGatherObj._array[0].lunchNetCalorie,
          Dinner: foodGatherObj._array[0].dinnerNetCalorie,
          Snacks: foodGatherObj._array[0].snacksNetCalorie
        }
        const tMac = {
          Carbohydrates: foodGatherObj._array[0].totalCarb,
          Fat: foodGatherObj._array[0].totalFat,
          Sodium: foodGatherObj._array[0].totalSodium,
          Sugar: foodGatherObj._array[0].totalSugar,
          Protein: foodGatherObj._array[0].totalProtein
        }
        setCalorieData(tCal)
        setMacroData(tMac)
        console.log('Printing Calorie Data')
        console.log(calorieData)
        console.log('Printing Calorie Data')
        console.log(macroData)
      }
    }
  }, [foodGatherObj])

  const [calorieProcessedData, setCalorieProcessedData] = useState([
    { period: 'Breakfast', calories: 0 },
    { period: 'Lunch', calories: 0 },
    { period: 'Dinner', calories: 0 },
    { period: 'Snacks', calories: 0 }])

  const [macroProcessedData, setMacroProcessedData] = useState([
    { nutrient: 'Carbohydrates', total: 0 },
    { nutrient: 'Fat', total: 0 },
    { nutrient: 'Sodium', total: 0 },
    { nutrient: 'Sugar', total: 0 },
    { nutrient: 'Protein', total: 0 }])

  useEffect(() => {
    const data = [
      { period: 'Breakfast', calories: calorieData.Breakfast },
      { period: 'Lunch', calories: calorieData.Lunch },
      { period: 'Dinner', calories: calorieData.Dinner },
      { period: 'Snacks', calories: calorieData.Snacks }]
    setCalorieProcessedData(data)
  }, [calorieData])

  useEffect(() => {
    const data = [
      { nutrient: 'Protein', total: macroData.Protein },
      { nutrient: 'Carbohydrates', total: macroData.Carbohydrates },
      { nutrient: 'Fat', total: macroData.Fat },
      { nutrient: 'Sodium', total: macroData.Sodium / 1000 },
      { nutrient: 'Sugar', total: macroData.Sugar }
    ]
    setMacroProcessedData(data)
    console.log(macroProcessedData)
  }, [macroData])

  return (
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
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

            <Divider style={{ height: 40, backgroundColor: 'red', marginTop: 10, marginBottom: 10 }}/>

            <View>
              <Text> Macros </Text>
            </View>

            <CustomPieChart
                data={macroProcessedData}
                xAccessor={'nutrient'}
                yAccessor={'total'}
                colorArray={['tomato', 'orange', 'gold', 'turquoise', 'navy']}
                heightPie={250}
                gutterLegend={40}
                heightLegend={130}
            />

          </View>
          </ScrollView>

        </SafeAreaView>
  )
}
