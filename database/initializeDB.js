import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase('sampleDB.db')

db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
  console.log('Foreign keys turned on')
)

const setupDatabaseAsync = async () => {
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
      const onSuccess = () => {
        console.log('Success')
      }

      const onError = (tx, error) => {
        console.log('Error', { error })
        // throw Error("Statement failed.");
      }

      tx.executeSql('PRAGMA foreign_keys=on')

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS Profile (
                profileID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL, 
                username VARCHAR(20) NOT NULL,
                height FLOAT,sex VARCHAR NOT NULL,
                starting_weight INT,
                current_weight FLOAT,
                goal_weight FLOAT);
                `, [], null, onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS WeightLog (
                weightLogID INTEGER AUTO_INCREMENT NOT NULL PRIMARY KEY,
                date DATE NOT NULL,
                weight FLOAT NOT NULL);
                `, [], null, onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS Food (
                foodID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
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
                `, [], null, onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS BreakfastItems (
                breakfoodID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
                date DATE NOT NULL,
                foodID INTEGER,
                FOREIGN KEY (foodID) REFERENCES Food ( foodID ) );
                `, [], null, onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS LunchItems (
                lunchfoodID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
                date DATE NOT NULL,
                foodID INTEGER,
                FOREIGN KEY ( foodID ) REFERENCES Food (foodID) );
                `, [], null, onError)
      tx.executeSql(`
                
                CREATE TABLE IF NOT EXISTS DinnerItems (
                dinnerfoodID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
                date DATE NOT NULL,
                foodID INTEGER,
                FOREIGN KEY ( foodID ) REFERENCES Food (foodID) );
                `, [], null, onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS SnacksItems (
                snacksfoodID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
                date DATE NOT NULL,
                foodID INTEGER,
                FOREIGN KEY (foodID) REFERENCES Food( foodID ));
                `, [], null, onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS WaterItems(
                waterfoodID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
                date DATE NOT NULL,
                waterCount INTEGER NOT NULL);
                `, [], null, onError)

      tx.executeSql(`
                CREATE TABLE IF NOT EXISTS FoodGather (
                foodgatherID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
                date DATE UNIQUE NOT NULL,
                breakfastNetCalorie FLOAT,
                lunchNetCalorie FLOAT,
                dinnerNetCalorie FLOAT,
                snacksNetCalorie FLOAT,
                totalCarb FLOAT,
                totalProtein FLOAT,
                totalFat FLOAT);
                `, [], null, onError)

      tx.executeSql(`       
                CREATE TABLE IF NOT EXISTS RecentlyEatenFood (
                recentlyID INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
                createdAt DATE NOT NULL,
                updatedAt DATE NOT NULL,
                numberOfTimesAdded INT NOT NULL,
                foodID INTEGER,
                FOREIGN KEY (foodID) REFERENCES Food( foodID ));
                `, [], null, onError)
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
