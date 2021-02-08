import React, { useContext, useState, useEffect } from 'react'
import { SafeAreaView, Image, View, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { DatabaseContext } from '../context/DatabaseContext'

export const FOOD_ADD_SCREEN = ({ propDB, route, navigation }) => {
  const databaseContext = useContext(DatabaseContext)
  const [loaded, setLoaded] = useState(false)
  const [foodObj, setFoodObj] = useState('NotReady')

  const styles = StyleSheet.create({
    food_image: {
      width: 50,
      height: 50,
      alignItems: 'center',
      justifyContent: 'flex-start',
      backgroundColor: 'grey',
      borderRadius: 3,
      marginLeft: 10

    },
    large_container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    food_row: {
      flex: 1,
      marginBottom: 10
    },
    name_column: {
      width: 190,
      paddingLeft: 10
    },
    protein_column: {
      width: 50
    },
    calorie_column: {
      width: 50,
      paddingRight: 5,
      marginRight: 8
    }
  })

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.large_container}>
                <View>
                    <Text> Food Item Name</Text>
                    <Text> Food total weight</Text>
                </View>
                <View flexDirection="row" justifyContent="space-between" alignItems="center">
                    <View justifyContent="flex-start" alignItems="flex-start">
                        <Text category="h6"> Total calories</Text>
                    </View>
                    <View justifyContent="flex-start" alignItems="flex-start">
                        <Text category="h6"> Total Carbs</Text>
                    </View>
                    <View justifyContent="flex-start" alignItems="flex-start">
                        <Text category="h6"> Total Fat</Text>
                    </View>
                    <View justifyContent="flex-start" alignItems="flex-start">
                        <Text category="h6"> Total Protein</Text>
                    </View>
                </View>

                <View>
                    <Text>Nutrition Fact Table Will Go Here Later</Text>
                </View>
            </View>
        </SafeAreaView>

  )
}
