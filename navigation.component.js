import React from 'react';
import { HomeScreen } from './homeScreen.component';
import { LogScreen } from './logScreen.component';
import { MoreScreen } from './moreScreen.component';
import { ProgressScreen } from './progressScreen.component';

import { BottomNavigation } from 'react-native-paper';


const AppNavigator = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'log', title: 'Log', icon: 'book' },
        { key: 'progress', title: 'Progress', icon: 'chart-bar' },
        { key: 'more', title: 'More', icon: 'more' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        log: LogScreen,
        progress: ProgressScreen,
        more: MoreScreen
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default AppNavigator;