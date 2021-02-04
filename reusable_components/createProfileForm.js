import React, { useState, useContext, useRef } from 'react'
import { SafeAreaView, View, StyleSheet, LogBox } from 'react-native'
import { Divider, Text, Button, TextInput } from 'react-native-paper'
import { Controller, useForm } from 'react-hook-form'
import { DatabaseContext } from '../context/DatabaseContext'

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
    console.log(data)
    addNewProfile(database, data.username, parseFloat(data.height), data.sex, parseFloat(data.startingWeight), parseFloat(data.startingWeight), parseFloat(data.goalWeight))
    profileSubmitted(true)
  }

  const styles = StyleSheet.create({
    label: {
      // color: 'white',
      margin: 20,
      marginLeft: 0
    },
    container: {
      flex: 1,
      justifyContent: 'center',
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
            <View flexDirection='column' style={styles.container}>
                <View>
                    <Text style={styles.label}> Username </Text>
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
                    <Text style={styles.label}> Height </Text>
                    <Controller
                        control={control}
                        render={(props) => (
                            <TextInput
                                {...props}
                                style={styles.input}
                                onChangeText={value => props.onChange(value)}
                                ref = {heightInputRef}
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
                <View>
                    <Text style={styles.label}> Starting Weight </Text>
                    <Controller
                        control={control}
                        render={(props) => (
                            <TextInput
                                {...props}
                                style={styles.input}
                                onChangeText={value => props.onChange(value)}
                                ref = {startingWeightInputRef}
                            />
                        )}
                        name = "startingWeight"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                </View>
                <View>
                    <Text style={styles.label}> Goal Weight </Text>
                    <Controller
                        control={control}
                        render={(props) => (
                            <TextInput
                                {...props}
                                style={styles.input}
                                onChangeText={value => props.onChange(value)}
                                ref = {goalWeightInputRef}
                            />
                        )}
                        name = "goalWeight"
                        rules={{ required: true }}
                        defaultValue=""
                    />
                </View>

                <Divider style={{ marginTop: 20 }}/>
                 <Button mode="contained" onPress={handleSubmit(onSubmit)}> Create Profile!</Button>

            </View>
  )
}
