
// const onSuccess = (successMessage) => {
//   console.log('Success: ' + successMessage)
// }
//
// const onError = (error) => {
//   console.log('Error', { error })
//   // throw Error("Statement failed.");
// }

import { INSERTQUERYPROMISE, SELECTQUERYPROMISE } from './helpers'

const getProfileObj = {
  sqlStatement: 'select * from Profile',
  parentFunctionName: 'getProfile',
  args: []
}

const getProfile = (db, setter) => {
  return SELECTQUERYPROMISE(getProfileObj.parentFunctionName, db, getProfileObj.sqlStatement, getProfileObj.args, setter)
}

const getFoodObj = {
  sqlStatement: 'select * from Food',
  parentFunctionName: 'getAllFood',
  args: []
}

const getAllFood = async (db, setter) => {
  return SELECTQUERYPROMISE(getFoodObj.parentFunctionName, db, getFoodObj.sqlStatement, getFoodObj.args, setter)
}

const getInsertedBreakfastItemsObj = {
  sqlStatement: 'SELECT foodID, name, calories, fat, sodium, carbohydrates, sugar, protein, imageSRC, typeOfFood, weight FROM Food INNER JOIN BreakfastItems ON BreakfastItems.fID = Food.foodID',
  parentFunctionName: 'getInsertedBreakfastItems',
  args: []
}

const getInsertedBreakfastItems = async (db, setter) => {
  return SELECTQUERYPROMISE(getInsertedBreakfastItemsObj.parentFunctionName, db, getInsertedBreakfastItemsObj.sqlStatement, getInsertedBreakfastItemsObj.args, setter)
}

const insertProfileObj = {
  sqlStatement: 'insert into Profile (username, height, sex, startingWeight, currentWeight, goalWeight) values (?,?,?,?,?,?)',
  parentFunctionName: 'insertProfile'
}
const insertProfile = (db, args) => {
  return INSERTQUERYPROMISE(insertProfileObj.parentFunctionName, db, insertProfileObj.sqlStatement, args)
}

const insertWeightLogObj = {
  sqlStatement: 'insert into WeightLog (date, weight) values (?,?)',
  parentFunctionName: 'insertWeightLog'
}
const insertWeightLog = (db, args) => {
  return INSERTQUERYPROMISE(insertWeightLogObj.parentFunctionName, db, insertWeightLogObj.sqlStatement, args)
}

const insertFoodObj = {
  sqlStatement: 'insert into Food (name, calories, fat, sodium, carbohydrates, sugar, protein, imageSRC, typeOfFood, weight) values (?,?,?,?,?,?,?,?,?,?)',
  parentFunctionName: 'insertFood'
}

const insertFood = (db, args) => {
  return INSERTQUERYPROMISE(insertFoodObj.parentFunctionName, db, insertFoodObj.sqlStatement, args)
}

const insertBreakfastItemObj = {
  sqlStatement: 'insert into BreakfastItems (date, foodID) values (?,?)',
  parentFunctionName: 'insertBreakfastItem'
}

const insertBreakfastItem = (db, args) => {
  return INSERTQUERYPROMISE(insertBreakfastItemObj.parentFunctionName, db, insertBreakfastItemObj.sqlStatement, args)
}

const insertLunchItemObj = {
  sqlStatement: 'insert into LunchItems (date, foodID) values (?,?)',
  parentFunctionName: 'insertLunchItem'
}

const insertLunchItem = (db, args) => {
  return INSERTQUERYPROMISE(insertLunchItemObj.parentFunctionName, db, insertLunchItemObj.sqlStatement, args)
}

const insertDinnerItemObj = {
  sqlStatement: 'insert into DinnerItems (date, foodID) values (?,?)',
  parentFunctionName: 'insertDinnerItem'
}
const insertDinnerItem = (db, args) => {
  return INSERTQUERYPROMISE(insertDinnerItemObj.parentFunctionName, db, insertDinnerItemObj.sqlStatement, args)
}

const insertSnacksItemObj = {
  sqlStatement: 'insert into SnacksItems (date, foodID) values (?,?)',
  parentFunctionName: 'insertSnacksItem'
}

const insertSnacksItem = (db, args) => {
  return INSERTQUERYPROMISE(insertSnacksItemObj.parentFunctionName, db, insertSnacksItemObj.sqlStatement, args)
}

const insertWaterItemObj = {
  sqlStatement: 'insert into WaterItems (date, foodID) values (?,?)',
  parentFunctionName: 'insertWaterItem'
}

const insertWaterItem = (db, args) => {
  return INSERTQUERYPROMISE(insertWaterItemObj.parentFunctionName, db, insertWaterItemObj.sqlStatement, args)
}

const insertFoodGatherObj = {
  sqlStatement: 'insert into FoodGather (date, breakfastNetCalorie, lunchNetCalorie,  dinnerNetCalorie, snacksNetCalorie, totalCarb, totalProtein, totalFat) values (?,?,?,?,?,?,?,?)',
  parentFunctionName: 'insertFoodGather'
}

const insertFoodGather = (db, args) => {
  return INSERTQUERYPROMISE(insertFoodGatherObj.parentFunctionName, db, insertFoodGatherObj.sqlStatement, args)
}

const insertRecentlyEatenFoodObj = {
  sqlStatement: 'insert into RecentlyEatenFood (date, breakfastNetCalorie, lunchNetCalorie,  dinnerNetCalorie, snacksNetCalorie, totalCarb, totalProtein, totalFat) values (?,?,?,?,?,?,?,?)',
  parentFunctionName: 'insertRecentlyEatenFood'
}

const insertRecentlyEatenFood = (db, args) => {
  return INSERTQUERYPROMISE(insertRecentlyEatenFoodObj.parentFunctionName, db, insertRecentlyEatenFoodObj.sqlStatement, args)
}

export const crud = {
  insertProfile,
  getProfile,
  insertWeightLog,
  insertFood,
  getAllFood,
  getInsertedBreakfastItems,
  insertBreakfastItem,
  insertLunchItem,
  insertDinnerItem,
  insertSnacksItem,
  insertWaterItem,
  insertFoodGather,
  insertRecentlyEatenFood
}
