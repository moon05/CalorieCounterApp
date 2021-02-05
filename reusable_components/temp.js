import React, { useContext, useState, useEffect } from 'react'
import { View } from 'react-native'
import { Divider, Text, Button } from 'react-native-paper'
import { DatabaseContext } from '../context/DatabaseContext'

export const Profiles = ({ database, safeToLoad }) => {
  const databaseContext = useContext(DatabaseContext)
  const { getStoredProfile, addSampleProfile } = databaseContext
  const [loaded, setLoaded] = useState(false)
  const [currentProfile, setCurrentProfile] = useState(undefined)

  const foo = async () => {
    console.log('Result inside ASYNC temp: ')
    await getStoredProfile(database, setCurrentProfile)
    console.log('Ending')
  }

  const goo = async () => {
    console.log('Trying to create an additional sample profile: ')
    await addSampleProfile(database)
    console.log('Ending Sample profile Async')
  }

  useEffect(() => {
    console.log('Calling FOO')
    if (safeToLoad) {
      foo()
    }
    // goo()
  }, [safeToLoad])

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
                      : (!Array.isArray(currentProfile._array) || !currentProfile._array.length)
                          ? <Text>Still Null!</Text>
                          : <View>
                            <Text key={1}>Username: {currentProfile._array[0].username}</Text>
                              <Text key={2}>Height: {currentProfile._array[0].height}</Text>
                              <Text key={3}>Sex: {currentProfile._array[0].sex}</Text>
                              <Text key={4}>Starting Weight: {currentProfile._array[0].startingWeight}</Text>
                              <Text key={5}>Goal Weight: {currentProfile._array[0].goalWeight}</Text>
                            </View>

                    }
                </View>

                <Divider style={{ marginTop: 20 }}/>

            </View>
  )
}
