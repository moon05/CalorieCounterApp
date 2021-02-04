// import * as SQLite from 'expo-sqlite'
//
// const db = SQLite.openDatabase('SAMPLEDB.db')

const onSuccess = (successMessage) => {
  console.log('Success: ' + successMessage)
}

const onError = (error) => {
  console.log('Error', { error })
  // throw Error("Statement failed.");
}

// const getUser = (db, setUserFunc) => {
//   db.transaction(
//     tx => {
//       tx.executeSql(
//         'select * from Profile',
//         [],
//         (_, { rows: { _array } }) => {
//           setUserFunc(_array)
//         }
//       )
//     },
//     onError(error),
//     // (t, error) => { console.log("db error load users"); console.log(error) },
//     onSuccess('loaded users')
//   )
// }

const insertProfile = (db, profileID, userName, height, sex, startingWeight, currentWeight, goalWeight) => {
  db.transaction(tx => {
    tx.executeSql('insert into Profile (profileID, username, height, sex, startingWeight, currentWeight, goalWeight) values (?,?,?,?,? ,?,?)',
      [profileID, userName, height, sex, startingWeight, currentWeight, goalWeight], null, (tx, error) => console.log(error))
  },
  (t, error) => { console.log('db error insertUser'); console.log(error) },
  (t, success) => { console.log(t); onSuccess('Success creating Profile') }
  )
}

// const getProfile = async () => {
//   let db
//   SQLite.openDatabase('SAMPLEDB.db', '', '', '',
//     (db) => {
//       db.transaction(tx => {
//         tx.executeSql(`
//         SELECT * FROM Profile`,
//         [],
//         (_, res) => { console.log(res); return res },
//         (_, err) => { console.log('Error: ' + err) }
//         )
//       },
//       (t, error) => { console.log('Outer Error: ' + error) },
//       (t, success) => { console.log('Outer Success: ' + success) }
//         // console.log('Printing in new getProfile')
//       )
//     })
// }

const getProfile = (db, setter) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(`
        select * from Profile`, [],

      (_, { rows }) => {
        setter(rows)
      },
      (_, error) => console.log(error))
    },
    (t, error) => { console.log('db error getProfile'); console.log(error) },
    (t, success) => {
      onSuccess('Successfully Loaded Profile')
    }
    )
  })
}

const insertWeightLog = (db, date, weight) => {
  db.transaction(tx => {
    tx.executeSql('insert into WeightLog (date, weight) values (?,?)', [date, weight])
  },
  (t, error) => { console.log('db error insertWeightLog'); console.log(error) },
  (t, success) => { onSuccess('Success creating WeightLog') })
}

const insertFood = (db, name, calories, fat, sodium, carbohydrates, sugar, protein, imageSRC, typeOfFood, weight) => {
  db.transaction(tx => {
    tx.executeSql(
      'insert into Food (name, calories, fat, sodium, carbohydrates, sugar, protein, imageSRC, typeOfFood, weight) values (?,?,?,?,?,?,?,?,?,?)',
      [name, calories, fat, sodium, carbohydrates, sugar, protein, imageSRC, typeOfFood, weight])
  },
  (t, error) => { console.log('db error insertFood'); console.log(error) },
  (t, success) => { onSuccess('Success creating Food') })
}

const insertBreakfastItem = (db, date, foodID) => {
  db.transaction(tx => {
    tx.executeSql(
      'insert into BreatfastFood (date, foodID) values (?,?)',
      [date, foodID])
  },
  (t, error) => { console.log('db error insertBreakfastItems'); console.log(error) },
  (t, success) => { onSuccess('Success creating BreakfastItems') })
}

const insertLunchItem = (db, date, foodID) => {
  db.transaction(tx => {
    tx.executeSql(
      'insert into LunchFood (date, foodID) values (?,?)',
      [date, foodID])
  },
  (t, error) => { console.log('db error insertLunchItems'); console.log(error) },
  (t, success) => { onSuccess('Success creating LunchItems') })
}

const insertDinnerItem = (db, date, foodID) => {
  db.transaction(tx => {
    tx.executeSql(
      'insert into DinnerFood (date, foodID) values (?,?)',
      [date, foodID])
  },
  (t, error) => { console.log('db error insertDinnerItems'); console.log(error) },
  (t, success) => { onSuccess('Success creating DinnerItems') })
}

const insertSnacksItem = (db, date, foodID) => {
  db.transaction(tx => {
    tx.executeSql(
      'insert into DinnerFood (date, foodID) values (?,?)',
      [date, foodID])
  },
  (t, error) => { console.log('db error insertSnacksItems'); console.log(error) },
  (t, success) => { onSuccess('Success creating SnacksItems') })
}

const insertWaterItem = (db, date, waterCount) => {
  db.transaction(tx => {
    tx.executeSql(
      'insert into DinnerFood (date, waterCount) values (?,?)',
      [date, waterCount])
  },
  (t, error) => { console.log('db error insertWaterItems'); console.log(error) },
  (t, success) => { onSuccess('Success creating WaterItems') })
}

const insertFoodGather = (db, date, breakfastNetCalorie, lunchNetCalorie, dinnerNetCalorie, snacksNetCalorie, totalCarb, totalProtein, totalFat) => {
  db.transaction(tx => {
    tx.executeSql(
      'insert into FoodGather (date, breakfastNetCalorie, lunchNetCalorie,  dinnerNetCalorie, snacksNetCalorie, totalCarb, totalProtein, totalFat) values (?,?,?,?,?,?,?,?)',
      [date, breakfastNetCalorie, lunchNetCalorie, dinnerNetCalorie, snacksNetCalorie, totalCarb, totalProtein, totalFat])
  },
  (t, error) => { console.log('db error insertWaterItems'); console.log(error) },
  (t, success) => { onSuccess('Success creating WaterItems') })
}

const insertRecentlyEatenFood = (db, createdAt, updatedAt, numberOfTimesAdded, foodID) => {
  db.transaction(tx => {
    tx.executeSql(
      'insert into FoodGather (createdAt, updatedAt, numberOfTimesAdded, foodID) values (?,?,?,?)',
      [createdAt, updatedAt, numberOfTimesAdded, foodID])
  },
  (t, error) => { console.log('db error insertWaterItems'); console.log(error) },
  (t, success) => { onSuccess('Success creating WaterItems') })
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
