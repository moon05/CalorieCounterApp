
const onSuccess = (sucessMessage) => {
  console.log('Success: ' + sucessMessage)
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

const insertUser = (db, userName, height, startingWeight, currentWeight, goalWeight, successFunc) => {
  db.transaction(tx => {
    tx.executeSql('insert into Profile (username, height, starting_weight, current_weight, goal_weight) values (?,?,?,?,?)', [userName, height, startingWeight, currentWeight, goalWeight])
  },
  (t, error) => { console.log('db error insertUser'); console.log(error) },
  (t, success) => { successFunc() }
  )
}
