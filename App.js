import React, { useEffect, useState } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './navigation.component'
import * as SQLite from 'expo-sqlite'
import * as SplashScreen from 'expo-splash-screen'
import useDatabase from './database/useDatabase'
import { DatabaseContextProvider } from './context/DatabaseContext'
import { AsyncStorage } from 'react-native'

const db = SQLite.openDatabase('SAMPLEDB.db')
console.log('Printing first time in APP.js: ')
console.log(db)

export default function App () {
  const [firstTimeUsage, setFirstTimeUsage] = useState(null)
  const clearAsyncStorage = async () => {
    AsyncStorage.clear()
  }
  useEffect(() => {
    clearAsyncStorage()
  }, [])

  useEffect(() => {
    AsyncStorage.getItem('FirstTime', (err, result) => {
      console.log(result)
      setFirstTimeUsage(result)
    })
  })

  useEffect(() => {
    console.log('Inside App.js')
    console.log('FirstUsage: ' + firstTimeUsage)
  }, firstTimeUsage)

  SplashScreen.preventAutoHideAsync()

  const isDBLoadingComplete = useDatabase(db)

  if (isDBLoadingComplete) {
    SplashScreen.hideAsync()

    return (
        <PaperProvider>
            <DatabaseContextProvider>
                <AppNavigator propDB={db}/>
            </DatabaseContextProvider>

        </PaperProvider>
    )
  } else {
    return null
  }
}
