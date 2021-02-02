import React from 'react'
import { SafeAreaView, FlatList, Image, StyleSheet, View } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import { FOOD_DATA } from './food_data'

import { CHICKEN_BREAST, CHICKEN_DRUMSTICK, CHICKEN_THIGH, HAM, LAMB_SHANK, PORK_CHOP, RIB_EYE, VENISON } from './images'

export const MoreScreen = ({ navigation }) => {
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

  const Item = ({ fields }) => (
        <View flexDirection="row" justifyContent="space-between" alignItems="center" style={styles.food_row}>
            <View justifyContent="flex-start" alignItems="flex-start">
                <Image source={fields.image_src} style={styles.food_image}/>
            </View>
            <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-start" style={styles.name_column}>
                <Text style={{ fontWeight: '500' }}>{fields.title}</Text>
                <Text>{fields.portion}</Text>
            </View>

            <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-center" style={styles.protein_column}>
                <Text>{fields.protein}</Text>
            </View>
            <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-end" style={styles.calorie_column}>
                <Text>{fields.calorie}</Text>
            </View>
        </View>
  )

  const renderItem = ({ item }) => (
        <Item fields={item}/>
  )

  return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.large_container}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                    <View flexDirection="row" justifyContent="center" alignItems="center" style={{ marginBottom: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: '600' }}>Food Library</Text>
                    </View>
                    <Divider/>
                    <View flexDirection="row" justifyContent="space-between" alignItems="center" style={{ marginTop: 15, marginBottom: 10 }}>
                        <View justifyContent="flex-start" alignItems="flex-start">
                            <Text category="h6" style={{ marginRight: 50 }}></Text>
                        </View>
                        <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-start">
                            <Text style={{ marginRight: 190 }}></Text>
                        </View>

                        <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-center">
                            <Text style={{ fontWeight: 'bold', width: 70 }}>Protein</Text>
                        </View>
                        <View flexDireciton="column" justifyContent="flex-start" alignItems="flex-end">
                            <Text style={{ fontWeight: 'bold', width: 80, marginRight: 8 }}>Calories</Text>
                        </View>
                    </View>

                    <FlatList
                        data={FOOD_DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </SafeAreaView>
  )
}
