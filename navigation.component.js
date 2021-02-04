import React, { useEffect } from 'react'
import { HomeScreen } from './homeScreen.component'
import { LogScreen } from './logScreen.component'
import { MoreScreen } from './moreScreen.component'
import { ProgressScreen } from './progressScreen.component'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

// import {BottomNavigation} from 'react-native-paper';

const Tab = createMaterialBottomTabNavigator()

const AppNavigator = ({ database }) => {
  // const [index, setIndex] = React.useState(0);
  // const [routes] = React.useState([
  //     {key: 'home', title: 'Home', icon: 'home'},
  //     {key: 'log', title: 'Log', icon: 'book'},
  //     {key: 'progress', title: 'Progress', icon: 'chart-bar'},
  //     {key: 'more', title: 'More', icon: 'more'},
  // ]);
  //
  // const renderScene = BottomNavigation.SceneMap({
  //     home: HomeScreen,
  //     log: LogScreen,
  //     progress: ProgressScreen,
  //     more: MoreScreen
  // });
  //
  // return (
  //     <BottomNavigation
  //         navigationState={{index, routes}}
  //         onIndexChange={setIndex}
  //         renderScene={renderScene}
  //         db={database}
  //     />
  // );
  // useEffect(() => {
  //   console.log('priting in app navigation')
  //   console.log(database)
  // })

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
                {() => <HomeScreen database={database}/>}
            </Tab.Screen>
            <Tab.Screen
                name="Log"
                component={LogScreen}
                options={{
                  tabBarIcon: 'book'
                }}
            />
            <Tab.Screen
                name="Progress"
                component={ProgressScreen}
                options={{
                  tabBarIcon: 'chart-bar'
                }}
            />
            <Tab.Screen
                name="More"
                component={MoreScreen}
                options={{
                  tabBarIcon: 'more'
                }}
            />
        </Tab.Navigator>

  )
}

export default AppNavigator
