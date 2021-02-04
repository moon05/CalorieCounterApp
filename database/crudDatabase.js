
// const onSuccess = (successMessage) => {
//   console.log('Success: ' + successMessage)
// }
//
// const onError = (error) => {
//   console.log('Error', { error })
//   // throw Error("Statement failed.");
// }

/**
 *
 * @param parentFunctionName: function calling this function
 * @param db: database instance
 * @param sqlStatement
 * @param args: array of args passed
 * @returns {Promise<unknown>}
 */
const INSERTQUERYPROMISE = (parentFunctionName, db, sqlStatement, args) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(sqlStatement, [...args], null,
        (tx, error) => {
          console.log('@ ' + parentFunctionName)
          console.log(error)
        })
    },
    (t, error) => { console.log('Insert error @ ' + parentFunctionName); console.log(error) },
    (t, success) => { console.log('Insert Success @ ' + parentFunctionName) })
  })
}

/**
 *
 * @param parentFunctionName: function calling this function
 * @param db: database instance
 * @param sqlStatement
 * @param args: array of args passed (could be empty)
 * @returns {Promise<unknown>}
 */
const SELECTQUERYPROMISE = (parentFunctionName, db, sqlStatement, args, setterFunc) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(sqlStatement, [...args],
        (_, { rows }) => {
          setterFunc(rows)
        },
        (tx, error) => {
          console.log('@ ' + parentFunctionName)
          console.log(error)
        })
    },
    (t, error) => { console.log('Select error @ ' + parentFunctionName); console.log(error) },
    (t, success) => { console.log('Select Success @ ' + parentFunctionName) })
  })
}

const insertProfileObj = {
  sqlStatement: 'insert into Profile (username, height, sex, startingWeight, currentWeight, goalWeight) values (?,?,?,?,?,?)',
  parentFunctionName: 'insertProfile'
}
const insertProfile = (db, args) => {
  return INSERTQUERYPROMISE(insertProfileObj.parentFunctionName, db, insertProfileObj.sqlStatement, args)
}

const getProfileObj = {
  sqlStatement: 'select * from Profile',
  parentFunctionName: 'getProfile',
  args: []
}

const getProfile = (db, setter) => {
  return SELECTQUERYPROMISE(getProfileObj.parentFunctionName, db, getProfileObj.sqlStatement, getProfileObj.args, setter)
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
  sqlStatement: 'insert into BreatfastFood (date, foodID) values (?,?)',
  parentFunctionName: 'insertBreakfastItem'
}

const insertBreakfastItem = (db, args) => {
  return INSERTQUERYPROMISE(insertBreakfastItemObj.parentFunctionName, db, insertBreakfastItemObj.sqlStatement, args)
}

const insertLunchItemObj = {
  sqlStatement: 'insert into LunchFood (date, foodID) values (?,?)',
  parentFunctionName: 'insertLunchItem'
}

const insertLunchItem = (db, args) => {
  return INSERTQUERYPROMISE(insertLunchItemObj.parentFunctionName, db, insertLunchItemObj.sqlStatement, args)
}

const insertDinnerItemObj = {
  sqlStatement: 'insert into DinnerFood (date, foodID) values (?,?)',
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
  insertBreakfastItem,
  insertLunchItem,
  insertDinnerItem,
  insertSnacksItem,
  insertWaterItem,
  insertFoodGather,
  insertRecentlyEatenFood
}
