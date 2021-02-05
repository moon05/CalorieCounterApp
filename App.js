import React, { useEffect } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import AppNavigator from './navigation.component'
import * as SQLite from 'expo-sqlite'
import * as SplashScreen from 'expo-splash-screen'
import useDatabase from './database/useDatabase'
import { DatabaseContextProvider } from './context/DatabaseContext'
import { LogBox } from 'react-native'

LogBox.ignoreAllLogs()

const db = SQLite.openDatabase('SAMPLEDB.db')
console.log('Printing first time in APP.js: ')
console.log(db)
export default function App () {
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
