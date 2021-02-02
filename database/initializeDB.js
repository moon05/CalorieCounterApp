import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase('sampleDB.db')

db.exec([{ sql: 'PRAGMA foreign_keys = ON;', args: [] }], false, () =>
    console.log('Foreign keys turned on')
);

const setupDatabaseAsync = async () => {
    return new Promise((resolve, reject) => {

        const dropAllTables = true;
        if (dropAllTables) {
            db.transaction(tx=> {
                tx.executeSql("DROP TABLE IF EXISTS Profile;");
                tx.executeSql("DROP TABLE IF EXISTS WeightLog;");
                tx.executeSql("DROP TABLE IF EXISTS Food;");
                tx.executeSql("DROP TABLE IF EXISTS BreakfastFood;");
                tx.executeSql("DROP TABLE IF EXISTS LunchFood;");
                tx.executeSql("DROP TABLE IF EXISTS DinnerFood;");
                tx.executeSql("DROP TABLE IF EXISTS SnacksFood;");
                tx.executeSql("DROP TABLE IF EXISTS WaterFood;");
                tx.executeSql("DROP TABLE IF EXISTS FoodGather;");
                tx.executeSql("DROP TABLE IF EXISTS RecentlyEatenFood;");

            })

        }

        db.transaction(tx => {

                const onSuccess = () => {
                    console.log(`Success`);
                };

                const onError = (tx, error) => {
                    console.log(`Error`, { error });
                    // throw Error("Statement failed.");
                };

                tx.executeSql(`
                CREATE TABLE IF NOT EXISTS Profile (
                profile_id INTEGER PRIMARY KEY NOT NULL,
                username VARCHAR(20) NOT NULL,
                height FLOAT,sex VARCHAR NOT NULL,
                starting_weight INT,
                current_weight FLOAT,
                goal_weight FLOAT);
                `, [], null, onError);

                tx.executeSql(`
                    CREATE TABLE IF NOT EXISTS k (
                   k_id INTEGER PRIMARY KEY NOT NULL,
                   profile_id INTEGER,
                   FOREIGN KEY (profile_id) REFERENCES Profile (profile_id) );
                `, [], null, onError);

                tx.executeSql(`
                CREATE TABLE IF NOT EXISTS WeightLog (
                weight_log_id INTEGER NOT NULL PRIMARY KEY,
                date DATE NOT NULL,
                weight FLOAT NOT NULL);
                `, [], null, onError);

                tx.executeSql(`
                CREATE TABLE IF NOT EXISTS Food (
                food_id INTEGER PRIMARY KEY NOT NULL,
                name VARCHAR NOT NULL,
                calories FLOAT,
                fat FLOAT,
                sodium FLOAT,
                carbohydrates FLOAT,
                sugar FLOAT,
                protein FLOAT,
                image_src VARCHAR(400),
                type_of_food INT,
                weight FLOAT NOT NULL);
                `, [], null, onError);

                tx.executeSql(`
                CREATE TABLE IF NOT EXISTS BreakfastFood (
                breakfood_id INTEGER PRIMARY KEY NOT NULL ,
                date DATE NOT NULL,
                food_id INTEGER,
                FOREIGN KEY (food_id) REFERENCES Food ( food_id ) );
                `,[],null, onError);

                tx.executeSql(`
                CREATE TABLE IF NOT EXISTS LunchFood (
                lunchfood_id INTEGER NOT NULL PRIMARY KEY,
                date DATE NOT NULL,
                food_id INTEGER,
                FOREIGN KEY ( food_id ) REFERENCES Food (food_id) );
                `, [], null, onError);
                tx.executeSql(`
                
                CREATE TABLE IF NOT EXISTS DinnerFood (
                dinnerfood_id INTEGER NOT NULL PRIMARY KEY,
                date DATE NOT NULL,
                food_id INTEGER,
                FOREIGN KEY ( food_id ) REFERENCES Food (food_id) );
                `, [], null, onError);

                tx.executeSql(`
                CREATE TABLE IF NOT EXISTS SnacksFood (
                snacksfood_id INTEGER NOT NULL PRIMARY KEY,
                date DATE NOT NULL,
                food_id INTEGER,
                FOREIGN KEY (food_id) REFERENCES Food( food_id ));
                `, [], null, onError);

                tx.executeSql(`
                CREATE TABLE IF NOT EXISTS WaterFood (
                waterfood_id INTEGER NOT NULL PRIMARY KEY,
                date DATE NOT NULL,
                water_count INTEGER NOT NULL);
                `, [], null, onError);

                tx.executeSql(`
                CREATE TABLE IF NOT EXISTS FoodGather (
                foodgather_id INTEGER NOT NULL PRIMARY KEY,
                date DATE NOT NULL,
                breakfast_net_calorie FLOAT,
                lunch_net_calorie FLOAT,
                dinner_net_calorie FLOAT,
                snacks_net_calorie FLOAT,
                total_carb FLOAT,
                total_protein FLOAT,
                total_fat FLOAT);
                `, [], null, onError);
                tx.executeSql(`
                
                CREATE TABLE IF NOT EXISTS RecentlyEatenFood (
                recently_id INTEGER NOT NULL PRIMARY KEY,
                created_at DATE NOT NULL,
                updated_at DATE NOT NULL,
                number_of_times_added INT NOT NULL,
                food_id INTEGER,
                FOREIGN KEY (food_id) REFERENCES Food( food_id ));
                `, [], null, onError);

            },
            (_, error) => {
                console.log("Database Creation ERROR!!!");
                console.log("Error", {error});
                console.log("In initializeDB.js")
                reject(error)
            },
            (_, success) => {
                console.log("Initialization Database Creation Success!");
                resolve(success)
            }
        )
    })
}

export const database = {
    setupDatabaseAsync,
}