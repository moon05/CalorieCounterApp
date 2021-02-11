import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView, ScrollView, View, Dimensions } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { DatabaseContext } from './context/DatabaseContext'
import { useIsFocused } from '@react-navigation/native'
import { CustomPieChart } from './reusable_components/customPieChart'
import { differenceWith, isEqual, isEmpty } from 'lodash'

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
    if (!Array.isArray(foodGatherObj._array) || !foodGatherObj._array.length) {
      console.log("it's an empty array")
    } else {
      console.log("there's stuff")
    }
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
    console.log('Before Process')
    console.log(calorieProcessedData)
    console.log(emptyStateCalorieData)
    console.log(isEqual(calorieProcessedData, emptyStateCalorieData))
  }, [macroData])

  const emptyStateCalorieData = [
    { period: 'Breakfast', calories: 0 },
    { period: 'Lunch', calories: 0 },
    { period: 'Dinner', calories: 0 },
    { period: 'Snacks', calories: 0 }]

  const emptyStateCalorieDataProcessed = [
    { period: 'Breakfast', calories: 0 },
    { period: 'Lunch', calories: 0 },
    { period: 'Dinner', calories: 0 },
    { period: 'Snacks', calories: 0 },
    { period: 'None', calories: 1 }]

  const emptyStateMacroData = [
    { nutrient: 'Carbohydrates', total: 0 },
    { nutrient: 'Fat', total: 0 },
    { nutrient: 'Sodium', total: 0 },
    { nutrient: 'Sugar', total: 0 },
    { nutrient: 'Protein', total: 0 }]

  const emptyStateMacroDataProcessed = [
    { nutrient: 'Carbohydrates', total: 0 },
    { nutrient: 'Fat', total: 0 },
    { nutrient: 'Sodium', total: 0 },
    { nutrient: 'Sugar', total: 0 },
    { nutrient: 'Protein', total: 0 },
    { nutrient: 'None', total: 1 }]

  const [caloriePie, setCaloriePie] = useState()
  const [macroPie, setMacroPie] = useState()

  const checkDeepEqual = (x, y) => {
    return (x).differenceWith(y, isEqual).isEmpty()
  }

  const EmptyStateCaloriePieChart = (
      <CustomPieChart
          data={emptyStateCalorieDataProcessed}
          xAccessor={'period'}
          yAccessor={'calories'}
          colorArrayPie={['tomato', 'orange', 'gold', 'turquoise', 'grey']}
          colorArrayLegend={['tomato', 'orange', 'gold', 'turquoise']}
          heightPie={250}
          gutterLegend={40}
          heightLegend={80}
      />
  )

  const EmptyStateMacroPieChart = (
    <CustomPieChart
        data={emptyStateMacroDataProcessed}
        xAccessor={'nutrient'}
        yAccessor={'total'}
        colorArrayPie={['tomato', 'orange', 'gold', 'turquoise', 'navy', 'grey']}
        colorArrayLegend={['tomato', 'orange', 'gold', 'turquoise', 'navy']}
        heightPie={250}
        gutterLegend={40}
        heightLegend={130}
    />
  )

  useEffect(() => {
    console.log('Setting States')
    console.log(foodGatherObj)
    if (foodGatherObj !== 'NotReady') {
      if (isEmpty(foodGatherObj._array)) {
        setCaloriePie(EmptyStateCaloriePieChart)
        setMacroPie(EmptyStateMacroPieChart)
      } else {
        if (isEqual(calorieProcessedData, emptyStateCalorieData) || isEqual(macroProcessedData, emptyStateMacroData)) {
          setCaloriePie(EmptyStateCaloriePieChart)
          setMacroPie(EmptyStateMacroPieChart)
        } else {
          setCaloriePie(
              <CustomPieChart
                  data={calorieProcessedData}
                  xAccessor={'period'}
                  yAccessor={'calories'}
                  colorArrayPie={['tomato', 'orange', 'gold', 'turquoise']}
                  colorArrayLegend={['tomato', 'orange', 'gold', 'turquoise']}
                  heightPie={250}
                  gutterLegend={40}
                  heightLegend={80}
              />
          )
          setMacroPie(
              <CustomPieChart
                  data={macroProcessedData}
                  xAccessor={'nutrient'}
                  yAccessor={'total'}
                  colorArrayPie={['tomato', 'orange', 'gold', 'turquoise', 'navy']}
                  colorArrayLegend={['tomato', 'orange', 'gold', 'turquoise', 'navy']}
                  heightPie={250}
                  gutterLegend={40}
                  heightLegend={130}
              />
          )
        }
      }
    }
  }, [calorieProcessedData, foodGatherObj])

  return (
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
          <View flexDirection = "column" justifyContent= 'flex-start'>
            <Divider/>

            <View>
              <Text> Calorie Consumption </Text>
            </View>

            {caloriePie}

            <Divider style={{ height: 40, backgroundColor: 'red', marginTop: 10, marginBottom: 10 }}/>

            <View>
              <Text> Macros </Text>
            </View>

            {macroPie}

          </View>
          </ScrollView>

        </SafeAreaView>
  )
}
