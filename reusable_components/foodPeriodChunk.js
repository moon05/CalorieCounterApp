import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Divider, Text } from 'react-native-paper'
import { LogScreenFoodRow } from './logscreen_foodrow'

const styles = StyleSheet.create({

  large_container: {
    flexDirection: 'column'
  },

  title_row_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },

  period_title_text: {
    fontSize: 15,
    fontWeight: '900'
  },

  add_button_view: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft: -22
  }

})

export class FoodPeriodChunk extends Component {
  render () {
    return (

            <View style={styles.large_container}>
                <View style={styles.title_row_view}>
                    <Text style={styles.period_title_text}> {this.props.periodName} </Text>
                    {/* <Text style={styles.period_title_text}> 445 </Text> */}
                </View>
                <Divider style={{ marginTop: 10, marginBottom: 10 }}/>

                <View>

                     <LogScreenFoodRow
                         foodObj={(this.props.listToLoad !== 'NotReady')
                           ? this.props.listToLoad
                           : 'NotReady'}
                         queryGetter={this.props.getter}
                     />
                     <View style={styles.add_button_view}>

                        <Button onPress={() => {
                          this.props.navi.navigate(
                            'FoodSelection',
                            { name: this.props.periodName, itemRegisterFunc: this.props.regFunc }
                          )
                        }}
                        >
                            ADD FOOD
                        </Button>
                     </View>
                </View>
            </View>

    )
  }
}
