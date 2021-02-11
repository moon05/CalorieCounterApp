import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView, View, Dimensions } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { DatabaseContext } from './context/DatabaseContext'
import { useIsFocused } from '@react-navigation/native'

import { VictoryBar, VictoryPie, VictoryLegend, VictoryChart, VictoryTheme } from 'victory-native'

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'

const chartConfig = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 10
  },
  propsForDots: {
    r: '6',
    strokeWidth: '2',
    stroke: '#ffa726'
  }
}
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

  const data = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15
    }
  ]

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
    console.log(calorieProcessedData)
  }, [calorieData])

  const data1 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 }
  ]

  return (
        <SafeAreaView style={{ flex: 1 }}>
          <View flexDirection = "column" justifyContent= 'flex-start' alignItems = "center">
            <Divider/>

            <View justifyContent = "center" alignItems = "center" backgroundColor={'#f5fcff'}>
              <Text> Victory Pie Chart</Text>
              <VictoryPie
                  animate={{ duration: 500 }}
                  colorScale={['tomato', 'orange', 'gold', 'turquoise']}
                  data={calorieProcessedData} x="period" y="calories"
                  height={250}
                  theme={VictoryTheme.material}
                  labels={() => null}
              />
              <VictoryLegend justifyContent = "center" alignItems = "center" x={20}
                             title="Legend"
                             centerTitle
                             orientation="horizontal"
                             gutter={60}
                             itemsPerRow={2}
                             height={130}
                             style={{ data: { size: 10 }, border: { stroke: 'red' }, title: { fontSize: 20 } }}
                             data={[
                               { name: 'Breakfast', symbol: { fill: 'tomato', type: 'star' } },
                               { name: 'Lunch', symbol: { fill: 'orange' } },
                               { name: 'Dinner', symbol: { fill: 'gold' } },
                               { name: 'Snacks', symbol: { fill: 'turquoise' } }
                             ]}
              />
            </View>

            <Divider style={{ height: 20, backgroundColor: 'red' }}/>
          </View>

        </SafeAreaView>
  )
}
