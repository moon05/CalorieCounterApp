import React, { Component } from 'react'
import { View } from 'react-native'
import { Divider, Text } from 'react-native-paper'

export class CALORIE_DASHBOARD extends Component {
  render () {
    return (
            <View flexDirection='column'>
                <View flexDirection='row' justifyContent="flex-start">
                    <Text style={{ fontSize: 15, fontWeight: '600' }}> Calories Remaining</Text>
                </View>

                <View flexDirection='row' justifyContent="space-between" style={{ paddingTop: 10 }}>
                    <View flexDirection='column' justifyContent="space-between" alignItems="center">
                        <View><Text style={{ fontSize: 17 }}>{this.props.goalCalorie}</Text></View>
                        <View><Text>Goal</Text></View>
                    </View>

                    <View flexDirection='column' justifyContent="center" alignItems="center">
                        <View><Text style={{ fontSize: 18 }}>-</Text></View>
                    </View>

                    <View flexDirection='column' justifyContent="space-between" alignItems="center">
                        <View><Text style={{ fontSize: 17 }}>{this.props.consumedCalorie}</Text></View>
                        <View><Text>Food</Text></View>
                    </View>

                    <View flexDirection='column' justifyContent="center" alignItems="center">
                        <View><Text style={{ fontSize: 18 }}>=</Text></View>
                    </View>

                    <View flexDirection='column' justifyContent="space-between" alignItems="center">
                        <View><Text style={{ fontSize: 20, color: 'green' }}>{this.props.goalCalorie - this.props.consumedCalorie}</Text></View>
                        <View><Text>Remaining Calories</Text></View>
                    </View>

                </View>

                <Divider style={{ marginTop: 20 }}/>

            </View>
    )
  }
}
