/**
 *
 * @param parentFunctionName: function calling this function
 * @param db: database instance
 * @param sqlStatement
 * @param args: array of args passed
 * @returns {Promise<unknown>}
 */
export const INSERTQUERYPROMISE = (parentFunctionName, db, sqlStatement, args) => {
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
export const SELECTQUERYPROMISE = (parentFunctionName, db, sqlStatement, args, setterFunc) => {
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
    (t, error) => { console.log('Select error @ ' + parentFunctionName); console.log(error); reject(error) },
    (t, success) => { console.log('Select Success @ ' + parentFunctionName) })
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
export const UPDATEQUERYPROMISE = (parentFunctionName, db, sqlStatement, args) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(sqlStatement, [...args], null,
        (tx, error) => {
          console.log('@ ' + parentFunctionName)
          console.log(error)
        })
    },
    (t, error) => { console.log('Update error @ ' + parentFunctionName); console.log(error) },
    (t, success) => { console.log('Update Success @ ' + parentFunctionName) })
  })
}
