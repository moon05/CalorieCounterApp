// import * as SQLite from 'expo-sqlite'
//
// const db = SQLite.openDatabase('sampleDB.db')

// db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
//   console.log('Foreign keys turned on')
// )
import { FOOD_OBJECTS } from '../reusable_components/food_detailed_data'

const setupDatabaseAsync = async (db) => {
  return new Promise((resolve, reject) => {
    const dropAllTables = true
    if (dropAllTables) {
      db.transaction(tx => {
        tx.executeSql('DROP TABLE IF EXISTS Profile;')
        tx.executeSql('DROP TABLE IF EXISTS WeightLog;')
        tx.executeSql('DROP TABLE IF EXISTS Food;')
        tx.executeSql('DROP TABLE IF EXISTS BreakfastItems;')
        tx.executeSql('DROP TABLE IF EXISTS LunchItems;')
        tx.executeSql('DROP TABLE IF EXISTS DinnerItems;')
        tx.executeSql('DROP TABLE IF EXISTS SnacksItems;')
        tx.executeSql('DROP TABLE IF EXISTS WaterItems;')
        tx.executeSql('DROP TABLE IF EXISTS FoodGather;')
        tx.executeSql('DROP TABLE IF EXISTS RecentlyEatenFood;')
      })
    }

    db.transaction(tx => {
      const onSuccess = (tableName) => {
        console.log('Success: ' + tableName)
      }

      const onError = (tx, error) => {
        console.log('Error', { error })
        // throw Error("Statement failed.");
      }

      tx.executeSql('PRAGMA foreign_keys=on')

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS Profile (
                profileID INTEGER PRIMARY KEY NOT NULL, 
                username VARCHAR(20) NOT NULL,
                height FLOAT,
                sex VARCHAR NOT NULL,
                startingWeight INT,
                currentWeight FLOAT,
                goalWeight FLOAT)
                `, [], onSuccess('Profile'), onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS WeightLog (
                weightLogID INTEGER PRIMARY KEY NOT NULL,
                date DATE NOT NULL,
                weight FLOAT NOT NULL);
                `, [], onSuccess('WeightLog'), onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS Food (
                foodID INTEGER PRIMARY KEY NOT NULL,
                name VARCHAR NOT NULL,
                calories FLOAT,
                fat FLOAT,
                sodium FLOAT,
                carbohydrates FLOAT,
                sugar FLOAT,
                protein FLOAT,
                imageSRC VARCHAR(400),
                typeOfFood INT,
                weight FLOAT NOT NULL);
                `, [], onSuccess('Food'), onError)

      tx.executeSql('INSERT INTO Food values (?,?,?,?,?,?,?,?,?,?,?)',
        [1, FOOD_OBJECTS.ribEye.name, FOOD_OBJECTS.ribEye.calories, FOOD_OBJECTS.ribEye.fat,
          FOOD_OBJECTS.ribEye.sodium, FOOD_OBJECTS.ribEye.carbohydrates, FOOD_OBJECTS.ribEye.sugar,
          FOOD_OBJECTS.ribEye.protein, FOOD_OBJECTS.ribEye.imageSRC, FOOD_OBJECTS.ribEye.typeOfFood,
          FOOD_OBJECTS.ribEye.weight], onSuccess('Insert RibEYE'), onError)

      tx.executeSql('INSERT INTO Food values (?,?,?,?,?,?,?,?,?,?,?)',
        [2, FOOD_OBJECTS.rainbowTrout.name, FOOD_OBJECTS.rainbowTrout.calories, FOOD_OBJECTS.rainbowTrout.fat,
          FOOD_OBJECTS.rainbowTrout.sodium, FOOD_OBJECTS.rainbowTrout.carbohydrates, FOOD_OBJECTS.rainbowTrout.sugar,
          FOOD_OBJECTS.rainbowTrout.protein, FOOD_OBJECTS.rainbowTrout.imageSRC, FOOD_OBJECTS.rainbowTrout.typeOfFood,
          FOOD_OBJECTS.rainbowTrout.weight], onSuccess('Insert RainbowTrout'), onError)

      tx.executeSql('INSERT INTO Food values (?,?,?,?,?,?,?,?,?,?,?)',
        [3, FOOD_OBJECTS.salmon.name, FOOD_OBJECTS.salmon.calories, FOOD_OBJECTS.salmon.fat,
          FOOD_OBJECTS.salmon.sodium, FOOD_OBJECTS.salmon.carbohydrates, FOOD_OBJECTS.salmon.sugar,
          FOOD_OBJECTS.salmon.protein, FOOD_OBJECTS.salmon.imageSRC, FOOD_OBJECTS.salmon.typeOfFood,
          FOOD_OBJECTS.salmon.weight], onSuccess('Insert Salmon'), onError)

      tx.executeSql('INSERT INTO Food values (?,?,?,?,?,?,?,?,?,?,?)',
        [4, FOOD_OBJECTS.shrimp.name, FOOD_OBJECTS.shrimp.calories, FOOD_OBJECTS.shrimp.fat,
          FOOD_OBJECTS.shrimp.sodium, FOOD_OBJECTS.shrimp.carbohydrates, FOOD_OBJECTS.shrimp.sugar,
          FOOD_OBJECTS.shrimp.protein, FOOD_OBJECTS.shrimp.imageSRC, FOOD_OBJECTS.shrimp.typeOfFood,
          FOOD_OBJECTS.shrimp.weight], onSuccess('Insert Shrimp'), onError)

      tx.executeSql('SELECT * from Food',
        [], (_, tx) => { console.log(tx) }, onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS BreakfastItems (
                breakfastfoodID INTEGER PRIMARY KEY NOT NULL,
                date DATE NOT NULL,
                fID INTEGER,
                FOREIGN KEY (fID) REFERENCES Food ( foodID ) );
                `, [], onSuccess('BreakfastItems'), onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS LunchItems (
                lunchfoodID INTEGER PRIMARY KEY NOT NULL,
                date DATE NOT NULL,
                fID INTEGER,
                FOREIGN KEY ( fID ) REFERENCES Food (foodID) );
                `, [], onSuccess('LunchItems'), onError)
      tx.executeSql(`
                
                CREATE TABLE IF NOT EXISTS DinnerItems (
                dinnerfoodID INTEGER PRIMARY KEY NOT NULL,
                date DATE NOT NULL,
                fID INTEGER,
                FOREIGN KEY ( fID ) REFERENCES Food (foodID) );
                `, [], onSuccess('DinnerItems'), onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS SnacksItems (
                snacksfoodID INTEGER PRIMARY KEY NOT NULL,
                date DATE NOT NULL,
                fID INTEGER,
                FOREIGN KEY (fID) REFERENCES Food( foodID ));
                `, [], onSuccess('SnacksItems'), onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS WaterItems(
                waterfoodID INTEGER PRIMARY KEY NOT NULL,
                date DATE NOT NULL,
                waterCount INTEGER NOT NULL);
                `, [], onSuccess('WaterItems'), onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS FoodGather (
                foodgatherID INTEGER PRIMARY KEY NOT NULL,
                date DATE UNIQUE NOT NULL,
                breakfastNetCalorie FLOAT,
                lunchNetCalorie FLOAT,
                dinnerNetCalorie FLOAT,
                snacksNetCalorie FLOAT,
                totalCarb FLOAT,
                totalProtein FLOAT,
                totalFat FLOAT);
                `, [], onSuccess('FoodGather'), onError)

      tx.executeSql(`       
                CREATE TABLE IF NOT EXISTS RecentlyEatenFood (
                recentlyID INTEGER PRIMARY KEY NOT NULL,
                createdAt DATE NOT NULL,
                updatedAt DATE NOT NULL,
                numberOfTimesAdded INT NOT NULL,
                fID INTEGER,
                FOREIGN KEY (fID) REFERENCES Food( foodID ));
                `, [], onSuccess('RecentlyEatenFood'), onError)
    },
    (_, error) => {
      console.log('Database Creation ERROR!!!')
      console.log('Error', { error })
      console.log('In initializeDB.js')
      reject(error)
    },
    (_, success) => {
      console.log('Initialization Database Creation Success!')
      resolve(success)
    }
    )
  })
}

export const database = {
  setupDatabaseAsync
}
