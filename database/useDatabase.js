import React, { useEffect, useState } from 'react'

import { database } from './initializeDB'
import { AsyncStorage } from 'react-native'

export default function useDatabase (db) {
  const [isDBLoadingComplete, setDBLoadingComplete] = useState(false)
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(null)

  useEffect(() => {
    async function loadDataAsync () {
      try {
        await database.setupDatabaseAsync(db)
        setDBLoadingComplete(true)
      } catch (e) {
        console.warn(e)
      }
    }

    async function checkFirstTimeUser () {
      try {
        const val = await AsyncStorage.getItem('FirstTime')
        console.log('In useDatabase')
        console.log(val)
        if (val === null) {
          setIsFirstTimeUser(true)
        } else {
          setIsFirstTimeUser(false)
        }
      } catch (e) {
        console.warn(e)
      }
    }

    loadDataAsync()
    checkFirstTimeUser()
  }, [])

  return [isDBLoadingComplete, 0, isFirstTimeUser]
}
