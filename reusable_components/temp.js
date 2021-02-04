import React, { Component, useContext, useState, useEffect } from 'react'
import { View } from 'react-native'
import { Divider, Text, Button } from 'react-native-paper'
import { DatabaseContext } from '../context/DatabaseContext'

export const Profiles = ({ database }) => {
  const databaseContext = useContext(DatabaseContext)
  const { getStoredProfile, addSampleProfile } = databaseContext
  const [loaded, setLoaded] = useState(false)
  const [currentProfile, setCurrentProfile] = useState(undefined)

  const onSuccess = (successMessage) => {
    console.log('Success: ' + successMessage)
  }

  const onError = (error) => {
    console.log('Error', { error })
    // throw Error("Statement failed.");
  }

  const foo = async () => {
    console.log('Result inside ASYNC temp: ')
    await getStoredProfile(database, setCurrentProfile)
    console.log('Ending')
  }

  const goo = async () => {
    console.log('Trying to create an additional sample profile: ')
    const k = await addSampleProfile(database)
    // .then(result => { setCurrentProfile(result) })
    // .catch(err => err)
    console.log('Ending Sample profile Async')
  }

  // const processProfileData = (data) => {
  //   console.log(data._array[0].currentWeight)
  // }

  useEffect(() => {
    setLoaded(true)
  }, [])
  useEffect(() => {
    console.log('Calling FOO')
    foo()
    goo()
  }, [loaded])

  useEffect(() => {
    console.log('Starting to Print current Profile')
    console.log(currentProfile)
    console.log('Ending print current profile in USE Effect in temp.js')
  }, [currentProfile])

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
