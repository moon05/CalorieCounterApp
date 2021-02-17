import React, { useEffect } from 'react'
import { HomeScreen } from './homeScreen.component'
import { LogScreen } from './logScreen.component'
import { MoreScreen } from './moreScreen.component'
import { ProgressScreen } from './progressScreen.component'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { FOOD_SELECTION_SCREEN } from './reusable_components/food_selection_screen'
import { FOOD_ADD_SCREEN } from './reusable_components/food_add_screen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Button, IconButton } from 'react-native-paper'

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

const MainTabs = ({ propDB }) => {
  return (
        <Tab.Navigator
            initialRouteName="Home"
            shifting={false}
            sceneAnimationEnabled={false}
        >
            <Tab.Screen
                name="Home"
                // component={HomeScreen}
                options={{
                  tabBarIcon: 'home'
                }}
            >

                {() =>
                  (<Stack.Navigator>
                            <Stack.Screen name="LightWeightCalorieCounter">
                                {(props) => <HomeScreen propDB={propDB}/>}
                            </Stack.Screen>
                        </Stack.Navigator>
                  )
                }
            </Tab.Screen>

            <Tab.Screen
                name="Log"
                options={{
                  tabBarIcon: 'book'
                }}
            >
                {() => (
                    <Stack.Navigator
                        screenOptions={{
                          headerBackTitleVisible: false
                        }}>
                        <Stack.Screen name="Log"
                              // options={({ route, navigation }) => (
                              //   {
                              //     headerRight: () => (
                              //         <Button
                              //             size={30}
                              //             // style={{ marginRight: 135 }}
                              //             onPress={() => {
                              //               route.params.rightHeaderInsert()
                              //             }
                              //             }
                              //         > {'<'} Date {'>'} </Button>
                              //     )
                              //   }
                              // )}
                        >
                            {(props) => <LogScreen {...props} propDB={propDB} />}
                        </Stack.Screen>

                        <Stack.Screen
                            name="FoodSelection"
                            options={({ route, navigation }) => (
                              {
                                title: route.params.name,
                                headerLeft: () => (
                                        <IconButton
                                            icon="chevron-left"
                                            size={45} style ={{ marginLeft: -19 }}
                                            onPress={() => {
                                              navigation.navigate('Log', { lastScreen: 'FoodSelectionScreen' })
                                            }
                                        }
                                        />
                                )
                              })

                            }
                        >
                            {(props) => <FOOD_SELECTION_SCREEN
                                {...props}
                                propDB={propDB}
                                />
                            }
                        </Stack.Screen>

                        <Stack.Screen
                            name="Add Food"
                            options={({ navigation, route }) => ({
                              headerLeft: () => (
                                    <IconButton
                                        icon="chevron-left"
                                        size={45} style ={{ marginLeft: -19 }}
                                        onPress={() => {
                                          navigation.navigate('FoodSelection', { lastScreen: 'FoodAddScreen' })
                                        }
                                        }
                                    />
                              ),
                              headerRight: () => (
                                <IconButton
                                    icon="check"
                                    size={30}
                                    onPress={() => {
                                      route.params.rightHeaderInsert()
                                      navigation.navigate('Log', { lastScreen: 'FoodAddScreen' })
                                    }
                                }
                                />
                              )
                            })}
                            >
                            {(props) => <FOOD_ADD_SCREEN
                                {...props}
                                propDB={propDB}
                            />
                            }
                        </Stack.Screen>
                    </Stack.Navigator>
                )}
            </Tab.Screen>

            <Tab.Screen
                name="Progress"
                options={{
                  tabBarIcon: 'chart-bar'
                }}
            >
                {() =>
                  (<Stack.Navigator>
                        <Stack.Screen name="Progress">
                            {(props) => <ProgressScreen propDB={propDB}/>}
                        </Stack.Screen>
                    </Stack.Navigator>
                  )
                }
            </Tab.Screen>

            <Tab.Screen
                name="More"
                options={{
                  tabBarIcon: 'more'
                }}
            >
                {() =>
                  (<Stack.Navigator>
                            <Stack.Screen name="More">
                                {(props) => <MoreScreen propDB={propDB}/>}
                            </Stack.Screen>
                        </Stack.Navigator>
                  )
                }
            </Tab.Screen>
        </Tab.Navigator>
  )
}
const AppNavigator = ({ propDB }) => {
  return (
      <NavigationContainer propDB={propDB}>
          <MainTabs propDB={propDB} />
      </NavigationContainer>

  )
}

export default AppNavigator
