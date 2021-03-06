import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'

export const MealPlanCard = ({ route, navigation, planName, foodItemsObject }) => {
  const [bCal, setBCal] = useState(0)

  const [lCal, setLCal] = useState(0)

  const [dCal, setDCal] = useState(0)

  const [sCal, setSCal] = useState(0)

  useEffect(() => {
    let breakfastTotaCal = 0
    for (const keyIndex in foodItemsObject.breakfast) {
      breakfastTotaCal += foodItemsObject.breakfast[keyIndex].calories
    }
    setBCal(breakfastTotaCal)
    let lunchTotaCal = 0
    for (const keyIndex in foodItemsObject.lunch) {
      lunchTotaCal += foodItemsObject.lunch[keyIndex].calories
    }
    setLCal(lunchTotaCal)
    let dinnerTotaCal = 0
    for (const keyIndex in foodItemsObject.dinner) {
      dinnerTotaCal += foodItemsObject.dinner[keyIndex].calories
    }
    setDCal(dinnerTotaCal)
    let snacksTotaCal = 0
    for (const keyIndex in foodItemsObject.dinner) {
      snacksTotaCal += foodItemsObject.dinner[keyIndex].calories
    }
    setSCal(snacksTotaCal)
  }, [foodItemsObject])

  return (
        <View >
            <Card>
                <Card.Title title={planName}/>

                <Card.Content>
                {/* <Title>Card title</Title> */}
                <Paragraph>Total Calorie: {bCal + lCal + dCal + sCal}</Paragraph>
                </Card.Content>
            </Card>

        </View>
  )
}
