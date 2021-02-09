import React, { useContext, useState, useEffect, Component } from 'react'
import { SafeAreaView, Image, View, FlatList, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Button, Divider, Text } from 'react-native-paper'
import { LogScreenFoodRow } from './logscreen_foodrow'

export class FoodPeriodChunk extends Component {
  render () {
    return (

            <View flexDirection='column'>
                <Text style={{ marginTop: 10, fontWeight: 'bold' }}> {this.props.periodName} </Text>
                <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

                <View>

                     <LogScreenFoodRow foodObj={(this.props.listToLoad !== 'NotReady') ? this.props.listToLoad : 'NotReady'} queryGetter={this.props.getter}/>

                    <Button onPress={() => {
                      this.props.navi.navigate(
                        'FoodSelection',
                        { name: this.props.periodName, itemRegisterFunc: this.props.regFunc }
                      )
                    }}
                    > ADD FOOD </Button>
                </View>
            </View>

    )
  }
}
