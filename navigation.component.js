import React, { useEffect } from 'react'
import { HomeScreen } from './homeScreen.component'
import { LogScreen } from './logScreen.component'
import { MoreScreen } from './moreScreen.component'
import { ProgressScreen } from './progressScreen.component'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { FOOD_ADD_SCREEN } from './reusable_components/food_add_screen'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

// import {BottomNavigation} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator()
const Stack = createStackNavigator()

const MainTabs = ({ propDB }) => {
  return (
        <Tab.Navigator
            initialRouteName="Home"
            shifting={true}
            sceneAnimationEnabled={false}
        >
            <Tab.Screen
                name="Home"
                // component={HomeScreen}
                options={{
                  tabBarIcon: 'home'
                }}
            >
                {() => <HomeScreen propDB={propDB}/>}
            </Tab.Screen>

            <Tab.Screen
                name="Log"
                options={{
                  tabBarIcon: 'book'
                }}
            >
                {() => (
                    <Stack.Navigator>
                        <Stack.Screen name="Log">
                            {(props) => <LogScreen {...props} propDB={propDB} />}
                        </Stack.Screen>
                        <Stack.Screen name="Add Food">
                            {(props) => <FOOD_ADD_SCREEN {...props} propDB={propDB} />}
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
                {() => <ProgressScreen propDB={propDB}/>}
            </Tab.Screen>

            <Tab.Screen
                name="More"
                options={{
                  tabBarIcon: 'more'
                }}
            >
                {() => <MoreScreen propDB={propDB}/>}
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
