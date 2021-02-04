import React, { useEffect } from 'react'

import { database } from './initializeDB'

export default function useDatabase (db) {
  const [isDBLoadingComplete, setDBLoadingComplete] = React.useState(false)

  useEffect(() => {
    async function loadDataAsync () {
      try {
        await database.setupDatabaseAsync(db)
        setDBLoadingComplete(true)
      } catch (e) {
        console.warn(e)
      }
    }

    loadDataAsync()
  }, [])

  return isDBLoadingComplete
}
