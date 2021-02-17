import React, { Component, useState } from 'react'
import { Button, Platform, View } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import DateTimePicker from '@react-native-community/datetimepicker'
import { DateTime } from 'luxon'

export const DatePicker = () => {
  const todayDate = new Date().toJSON().slice(0, 10)
  const todayDateLuxon = DateTime.now()
  const todayJSDate = new Date()
  const [currDate, setDate] = useState(todayJSDate)
  const [prevDate, setPrevDate] = useState(todayDateLuxon)
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)

  const onChange = (event, selectedDate) => {
    setPrevDate(DateTime.fromJSDate(currDate))
    const currentDate = selectedDate || currDate
    setShow(Platform.OS === 'ios')
    setDate(currentDate)
    console.log('Prev Date: ' + prevDate.day)
    console.log('Curr Date: ' + DateTime.fromJSDate(currentDate).day)
    const l = DateTime.fromJSDate(currentDate).diff(prevDate, ['years', 'months', 'days', 'hours']).toObject()
    console.log(l)
    console.log('Difference: ' + l.days)
    const k = DateTime.now()
    console.log('Current Luxon Date: ' + k.toString())
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  return (
      <View>
          <View>
              <Button onPress={showDatepicker} title="Show date picker!" />
          </View>
          <View>

            {show && (
                      <DateTimePicker
                          testID="dateTimePicker"
                          value={currDate}
                          mode={mode}
                          display="default"
                          onChange={onChange}
                      />
            )}

          </View>
      </View>
  )
}
