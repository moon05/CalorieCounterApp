import React, { Component, useContext, useState, useEffect } from 'react'
import { View } from 'react-native'
import { Divider, Text, Button } from 'react-native-paper'
import { DatabaseContext } from '../context/DatabaseContext'
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('SAMPLEDB.db')

export const Profiles = ({ database }) => {
  const databaseContext = useContext(DatabaseContext)
  const { getStoredProfile } = databaseContext
  const [loaded, setLoaded] = useState(false)
  const [currentProfile, setCurrentProfile] = useState(undefined)

  const onSuccess = (successMessage) => {
    console.log('Success: ' + successMessage)
  }

  const onError = (error) => {
    console.log('Error', { error })
    // throw Error("Statement failed.");
  }

  const foo = () => {
    console.log('Result inside ASYNC temp: ')
    getStoredProfile(database, setCurrentProfile)
      .then(result => { setCurrentProfile(result) })
      .catch(err => err)
    console.log('Ending')
  }

  // const processProfileData = (data) => {
  //   console.log(data._array[0].currentWeight)
  // }

  useEffect(() => {
    setLoaded(true)
  }, [])
  useEffect(() => {
    foo()
  }, [loaded])

  useEffect(() => {
    console.log(currentProfile)
  }, [loaded, currentProfile])

  return (
            <View flexDirection='column'>
                <View flexDirection='row' justifyContent="flex-start">
                    {(typeof currentProfile === 'undefined' || currentProfile === null)
                      ? <Text>Nothing to Show yet</Text>
                      : (<View>
                            <Text>{currentProfile._array[0].username}</Text>
                            <Text>{currentProfile._array[0].height}</Text>
                            <Text>{currentProfile._array[0].sex}</Text>
                            <Text>{currentProfile._array[0].startingWeight}</Text>
                            <Text>{currentProfile._array[0].goalWeight}</Text>
                            <Text>{currentProfile._array[0].currentWeight}</Text>
                        </View>)
                    }
                </View>

                <Divider style={{ marginTop: 20 }}/>

            </View>
  )
}
