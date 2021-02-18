import React, { useEffect, useState } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './navigation.component'
import FirstTimeAppNavigator from './firstTimeNavigation.component'
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

  // for development only
  const clearAsyncStorage = async () => {
    AsyncStorage.clear()
  }
  // uncomment when you have to clear asyncstorage to check first user screen
  // useEffect(() => {
  //   clearAsyncStorage()
  // }, [])

  SplashScreen.preventAutoHideAsync()

  const [isDBLoadingComplete, t, isFirstTime] = useDatabase(db)

  if (isDBLoadingComplete) {
    SplashScreen.hideAsync()

    return (
        <PaperProvider>
            <DatabaseContextProvider>
              {isFirstTime ? <FirstTimeAppNavigator propDB={db}/> : <AppNavigator propDB={db}/>}
            </DatabaseContextProvider>

        </PaperProvider>
    )
  } else {
    return null
  }
}
