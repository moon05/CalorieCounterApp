
import React, { useEffect, createContext, useState } from 'react'
import { crud } from '../database/crudDatabase'

export const DatabaseContext = createContext({})

export const DatabaseContextProvider = props => {
  const {
    // eslint-disable-next-line react/prop-types
    children
  } = props

  /**
   * @param db: database instance passed down
   * @param [arg1, arg2, ...]: As many arguments necessary for select or insert
   * @returns {Promise<void>}
   */

  const addNewProfile = async (db, userName, height, sex, startingWeight, currentWeight, goalWeight) => {
    await crud.insertProfile(db, [userName, height, sex, startingWeight, currentWeight, goalWeight])
  }

  const addSampleProfile = async (db) => {
    await crud.insertProfile(db, ['john', 169, 'male', 110, 110, 150])
  }

  const getStoredProfile = async (db, setter) => {
    return crud.getProfile(db, setter)
  }

  const addNewWeightLog = async (db, date, weight) => {
    await crud.insertWeightLog(db, [date, weight])
  }

  const addNewFood = async (db, name, calories, fat, sodium, carbohydrates, sugar, protein, imageSRC, typeOfFood, weight) => {
    await crud.insertFood(db, [name, calories, fat, sodium, carbohydrates, sugar, protein, imageSRC, typeOfFood, weight])
  }

  const getStoredFood = async (db, setter) => {
    await crud.getAllFood(db, setter)
  }

  const addNewBreakfastItem = async (db, date, foodID) => {
    await crud.insertBreakfastItem(db, [date, foodID])
  }

  const getAllAddedBreakfastItems = async (db, setter) => {
    await crud.getInsertedBreakfastItems(db, setter)
  }

  const addNewLunchItem = async (db, date, foodID) => {
    await crud.insertLunchItem(db, [date, foodID])
  }

  const addNewDinnerItem = async (db, date, foodID) => {
    await crud.insertDinnerItem(db, [date, foodID])
  }

  const addNewSnacksItem = async (db, date, foodID) => {
    await crud.insertDinnerItem(db, [date, foodID])
  }

  const addNewWaterItem = async (db, date, waterCount) => {
    await crud.insertWaterItem(db, [date, waterCount])
  }

  const addNewFoodGather = async (db, date, breakfastNetCalorie, lunchNetCalorie, dinnerNetCalorie, snacksNetCalorie, totalCarb, totalProtein, totalFat) => {
    await crud.insertFoodGather(db, [date, breakfastNetCalorie, lunchNetCalorie, dinnerNetCalorie, snacksNetCalorie, totalCarb, totalProtein, totalFat])
  }

  const addNewRecentlyEatenFood = async (db, createdAt, updatedAt, numberOfTimesAdded, foodID) => {
    await crud.insertRecentlyEatenFood(db, [createdAt, updatedAt, numberOfTimesAdded, foodID])
  }

  // Make the context object:
  const databaseContext = {
    addNewProfile,
    addSampleProfile,
    getStoredProfile,
    addNewWeightLog,
    addNewFood,
    getStoredFood,
    addNewBreakfastItem,
    getAllAddedBreakfastItems,
    addNewLunchItem,
    addNewDinnerItem,
    addNewSnacksItem,
    addNewWaterItem,
    addNewFoodGather,
    addNewRecentlyEatenFood
  }

  // pass the value in provider and return
  return <DatabaseContext.Provider value={databaseContext}>{children}</DatabaseContext.Provider>
}
