import React, { useEffect } from 'react'

import { database } from './initializeDB'

export default function useDatabase (db) {
  const [isDBLoadingComplete, setDBLoadingComplete] = React.useState(false)

  useEffect(() => {
    async function loadDataAsync () {
      try {
        // await database.dropDatabaseTablesAsync()
        await database.setupDatabaseAsync(db)
        // await database.setupForeignKeyDatabaseAsync()
        // await database.setupUsersAsync()

        setDBLoadingComplete(true)
      } catch (e) {
        console.warn(e)
      }
    }

    loadDataAsync()
  }, [])

  return isDBLoadingComplete
}