import React, { useState, useContext, useRef } from 'react'
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { Divider, Text, Button, TextInput } from 'react-native-paper'
import { Controller, useForm } from 'react-hook-form'
import { DatabaseContext } from '../context/DatabaseContext'
import ViewPager from '@react-native-community/viewpager'

export const ProfileForm = ({ database, profileSubmitted }) => {
  const databaseContext = useContext(DatabaseContext)
  const { addNewProfile } = databaseContext

  const { control, handleSubmit, errors } = useForm()

  const { register } = useForm({
    defaultValues: {
      username: 'Bob',
      height: '170',
      sex: 'male@hotmail.com',
      startingWeight: 110,
      goalWeight: 140
    }
  })
  const usernameInputRef = useRef()
  const heightInputRef = useRef()
  const sexInputRef = useRef()
  const startingWeightInputRef = useRef()
  const goalWeightInputRef = useRef()
  const onSubmit = data => {
    console.log('SubmitPressed')
    console.log(database)
    console.log(data)
    addNewProfile(database, data.username, parseFloat(data.height), data.sex, parseFloat(data.startingWeight), parseFloat(data.startingWeight), parseFloat(data.goalWeight))
    profileSubmitted(true)
  }

  const styles = StyleSheet.create({

    viewPager: {
      width: '90%',
      height: 400,
      marginLeft: 20,
      position: 'absolute'

    },
    label: {
      // color: 'white',
      margin: 20,
      marginLeft: 0
    },
    container: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      padding: 8
    },
    input: {
      // backgroundColor: 'white',
      borderRadius: 4,
      height: 30,
      padding: 10

    }

  })

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <ViewPager
          style={styles.viewPager}
          initialPage={0}
          scrollEnabled={true}
          showPageIndicator={true}
          keyboardDismissMode='on-drag'
          orientation="horizontal">

        <View key="1" style={styles.container}>
          <View>
            <Text style={styles.label}> UserName </Text>
            <Controller
                control={control}
                render={(props) => (
                    <TextInput
                        {...props}
                        style={styles.input}
                        onChangeText={value => props.onChange(value)}
                        ref = {usernameInputRef}
                    />
                )}
                name = "username"
                rules={{ required: true }}
                defaultValue=""
            />
           </View>
           <View>
            <Text style={styles.label}> Height (in inches) </Text>
            <Controller
                control={control}
                render={(props) => (
                    <TextInput
                        {...props}
                        style={styles.input}
                        onChangeText={value => props.onChange(value)}
                        ref = {heightInputRef}
                        keyboardType="numeric"
                    />
                )}
                name = "height"
                rules={{ required: true }}
                defaultValue=""
            />
           </View>
           <View>
            <Text style={styles.label}> Sex </Text>
            <Controller
                control={control}
                render={(props) => (
                    <TextInput
                        {...props}
                        style={styles.input}
                        onChangeText={value => props.onChange(value)}
                        ref = {sexInputRef}
                    />
                )}
                name = "sex"
                rules={{ required: true }}
                defaultValue=""
            />
          </View>
        </View>

        <View key="2" style={styles.container}>
          <View >
            <Text style={styles.label}> Starting Weight (in lbs) </Text>
             <Controller
                control={control}
                render={(props) => (
                    <TextInput
                        {...props}
                        style={styles.input}
                        onChangeText={value => props.onChange(value)}
                        ref = {startingWeightInputRef}
                        keyboardType="numeric"
                    />
                )}
                name = "startingWeight"
                rules={{ required: true }}
                defaultValue=""
             />
          </View>
          <View>
            <Text style={styles.label}> Goal Weight (in lbs) </Text>
             <Controller
                control={control}
                render={(props) => (
                    <TextInput
                        {...props}
                        style={styles.input}
                        onChangeText={value => props.onChange(value)}
                        ref = {goalWeightInputRef}
                        keyboardType="numeric"
                    />
                )}
                name = "goalWeight"
                rules={{ required: true }}
                defaultValue=""
             />
          </View>

          <Divider style={{ marginTop: 20, marginBottom: 20 }}/>
          <View alignItems='center'>
            <Button mode="contained" onPress={handleSubmit(onSubmit)} style={{ width: 200 }}>
              Create Profile!
            </Button>
          </View>

        </View>
      </ViewPager>
        </TouchableWithoutFeedback>

  )
}
