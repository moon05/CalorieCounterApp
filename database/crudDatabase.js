
// const onSuccess = (successMessage) => {
//   console.log('Success: ' + successMessage)
// }
//
// const onError = (error) => {
//   console.log('Error', { error })
//   // throw Error("Statement failed.");
// }

import { INSERTQUERYPROMISE, SELECTQUERYPROMISE, UPDATEQUERYPROMISE } from './helpers'

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

const getAllBreakfastItemsObj = {
  sqlStatement: 'SELECT Food.foodID, Food.name, Food.calories, Food.fat, Food.sodium, Food.carbohydrates, Food.sugar, Food.protein, Food.imageSRC, Food.typeOfFood, Food.weight FROM Food INNER JOIN BreakfastItems ON BreakfastItems.fID = Food.foodID',
  parentFunctionName: 'getAllBreakfastItems',
  args: []
}

const getAllBreakfastItems = async (db, setter) => {
  return SELECTQUERYPROMISE(getAllBreakfastItemsObj.parentFunctionName, db, getAllBreakfastItemsObj.sqlStatement, getAllBreakfastItemsObj.args, setter)
}

const getAllLunchItemsObj = {
  sqlStatement: 'SELECT Food.foodID, Food.name, Food.calories, Food.fat, Food.sodium, Food.carbohydrates, Food.sugar, Food.protein, Food.imageSRC, Food.typeOfFood, Food.weight FROM Food INNER JOIN LunchItems ON LunchItems.fID = Food.foodID',
  parentFunctionName: 'getAllLunchItems',
  args: []
}

const getAllLunchItems = async (db, setter) => {
  return SELECTQUERYPROMISE(getAllLunchItemsObj.parentFunctionName, db, getAllLunchItemsObj.sqlStatement, getAllLunchItemsObj.args, setter)
}

const getAllDinnerItemsObj = {
  sqlStatement: 'SELECT Food.foodID, Food.name, Food.calories, Food.fat, Food.sodium, Food.carbohydrates, Food.sugar, Food.protein, Food.imageSRC, Food.typeOfFood, Food.weight FROM Food INNER JOIN DinnerItems ON DinnerItems.fID = Food.foodID',
  parentFunctionName: 'getAllDinnerItems',
  args: []
}

const getAllDinnerItems = async (db, setter) => {
  return SELECTQUERYPROMISE(getAllDinnerItemsObj.parentFunctionName, db, getAllDinnerItemsObj.sqlStatement, getAllDinnerItemsObj.args, setter)
}

const getAllSnacksItemsObj = {
  sqlStatement: 'SELECT Food.foodID, Food.name, Food.calories, Food.fat, Food.sodium, Food.carbohydrates, Food.sugar, Food.protein, Food.imageSRC, Food.typeOfFood, Food.weight FROM Food INNER JOIN SnacksItems ON SnacksItems.fID = Food.foodID',
  parentFunctionName: 'getAllSnacksItems',
  args: []
}

const getAllSnacksItems = async (db, setter) => {
  return SELECTQUERYPROMISE(getAllSnacksItemsObj.parentFunctionName, db, getAllSnacksItemsObj.sqlStatement, getAllSnacksItemsObj.args, setter)
}

const getDatedFoodGatherObj = {
  sqlStatement: 'SELECT * FROM FoodGather where FoodGather.date = ?',
  parentFunctionName: 'getDatedFoodGather'
}

const getDatedFoodGather = async (db, args, setter) => {
  return SELECTQUERYPROMISE(getDatedFoodGatherObj.parentFunctionName, db, getDatedFoodGatherObj.sqlStatement, args, setter)
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
  sqlStatement: 'insert into BreakfastItems (date, fID) values (?,?)',
  parentFunctionName: 'insertBreakfastItem'
}

const insertBreakfastItem = (db, args) => {
  return INSERTQUERYPROMISE(insertBreakfastItemObj.parentFunctionName, db, insertBreakfastItemObj.sqlStatement, args)
}

const insertLunchItemObj = {
  sqlStatement: 'insert into LunchItems (date, fID) values (?,?)',
  parentFunctionName: 'insertLunchItem'
}

const insertLunchItem = (db, args) => {
  return INSERTQUERYPROMISE(insertLunchItemObj.parentFunctionName, db, insertLunchItemObj.sqlStatement, args)
}

const insertDinnerItemObj = {
  sqlStatement: 'insert into DinnerItems (date, fID) values (?,?)',
  parentFunctionName: 'insertDinnerItem'
}
const insertDinnerItem = (db, args) => {
  return INSERTQUERYPROMISE(insertDinnerItemObj.parentFunctionName, db, insertDinnerItemObj.sqlStatement, args)
}

const insertSnacksItemObj = {
  sqlStatement: 'insert into SnacksItems (date, fID) values (?,?)',
  parentFunctionName: 'insertSnacksItem'
}

const insertSnacksItem = (db, args) => {
  return INSERTQUERYPROMISE(insertSnacksItemObj.parentFunctionName, db, insertSnacksItemObj.sqlStatement, args)
}

const insertWaterItemObj = {
  sqlStatement: 'insert into WaterItems (date, waterCount) values (?,?)',
  parentFunctionName: 'insertWaterItem'
}

const insertWaterItem = (db, args) => {
  return INSERTQUERYPROMISE(insertWaterItemObj.parentFunctionName, db, insertWaterItemObj.sqlStatement, args)
}

const insertFoodGatherObj = {
  sqlStatement: 'insert into FoodGather (date, breakfastNetCalorie, lunchNetCalorie,  dinnerNetCalorie, snacksNetCalorie, dayNetCalorie, totalCarb, totalProtein, totalFat, totalSodium, totalSugar) values (?,?,?,?,?,?,?,?,?,?,?)',
  parentFunctionName: 'insertFoodGather'
}

const insertFoodGather = (db, args) => {
  return INSERTQUERYPROMISE(insertFoodGatherObj.parentFunctionName, db, insertFoodGatherObj.sqlStatement, args)
}

const updateFoodGatherObj = {
  sqlStatement: 'update FoodGather set breakfastNetCalorie = ?, lunchNetCalorie = ?,  dinnerNetCalorie = ?, snacksNetCalorie = ?, dayNetCalorie = ?, totalCarb = ?, totalProtein = ?, totalFat = ?, totalSodium = ?, totalSugar = ? where FoodGather.date = ?',
  parentFunctionName: 'updateFoodGather'
}

const updateDatedFoodGatherWith = (db, args) => {
  return UPDATEQUERYPROMISE(updateFoodGatherObj.parentFunctionName, db, updateFoodGatherObj.sqlStatement, args)
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
  getAllBreakfastItems,
  getAllLunchItems,
  getAllDinnerItems,
  getAllSnacksItems,
  getDatedFoodGather,
  insertBreakfastItem,
  insertLunchItem,
  insertDinnerItem,
  insertSnacksItem,
  insertWaterItem,
  insertFoodGather,
  updateDatedFoodGatherWith,
  insertRecentlyEatenFood
}
