
import React, { useEffect, createContext, useState } from 'react'
import { database } from '../database/initializeDB'
import { crud } from '../database/crudDatabase'

export const DatabaseContext = createContext({})

export const UsersContextProvider = props => {
  // Initial values are obtained from the props
  const {
    // eslint-disable-next-line react/prop-types
    children
  } = props

  // Use State to store the values
  // const [users, setUsers] = useState(initialUsers)

  // useEffect(() => {
  //     refreshUsers()
  // }, [] )

  const addNewProfile = (db, userName, height, startingWeight, currentWeight, goalWeight) => {
    return crud.insertProfile(db, userName, height, startingWeight, currentWeight, goalWeight)
  }

  const addNewWeightLog = (db, date, weight) => {
    return crud.insertWeightLog(db, date, weight)
  }

  const addNewFood = (db, name, calories, fat, sodium, carbohydrates, sugar, protein, imageSRC, typeOfFood, weight) => {
    return crud.insertFood(db, name, calories, fat, sodium, carbohydrates, sugar, protein, imageSRC, typeOfFood, weight)
  }

  const addNewBreakfastItem = (db, date, foodID) => {
    return crud.insertBreakfastItem(db, date, foodID)
  }

  const addNewLunchItem = (db, date, foodID) => {
    return crud.insertLunchItem(db, date, foodID)
  }

  const addNewDinnerItem = (db, date, foodID) => {
    return crud.insertDinnerItem(db, date, foodID)
  }

  const addNewSnacksItem = (db, date, foodID) => {
    return crud.insertDinnerItem(db, date, foodID)
  }

  const addNewWaterItem = (db, date, waterCount) => {
    return crud.insertWaterItem(db, date, waterCount)
  }

  const addNewFoodGather = (db, date, breakfastNetCalorie, lunchNetCalorie, dinnerNetCalorie, snacksNetCalorie, totalCarb, totalProtein, totalFat) => {
    return crud.insertFoodGather(db, date, breakfastNetCalorie, lunchNetCalorie, dinnerNetCalorie, snacksNetCalorie, totalCarb, totalProtein, totalFat)
  }

  const addNewRecentlyEatenFood = (db, createdAt, updatedAt, numberOfTimesAdded, foodID) => {
    return crud.insertRecentlyEatenFood(db, createdAt, updatedAt, numberOfTimesAdded, foodID)
  }

  // Make the context object:
  const databaseContext = {
    addNewProfile,
    addNewWeightLog,
    addNewFood,
    addNewBreakfastItem,
    addNewLunchItem,
    addNewDinnerItem,
    addNewSnacksItem,
    addNewFoodGather,
    addNewRecentlyEatenFood
  }

  // pass the value in provider and return
  return <DatabaseContext.Provider value={databaseContext}>{children}</DatabaseContext.Provider>
}
