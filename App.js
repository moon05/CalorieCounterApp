import React, {useEffect} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './navigation.component';
import * as SQLite from "expo-sqlite"
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import useDatabase from './database/useDatabase'
// import useCachedResources from './hooks/useCachedResources';

const db = SQLite.openDatabase('NewSampleDB.db')
console.log(db)

// db.exec(
//     [{ sql: 'PRAGMA foreign_keys = ON;', args: [] }],
//     false,
//     () => console.log('Foreign keys turned on'),
// );


export default function App() {

    // SplashScreen.preventAutoHideAsync();

    // const isLoadingComplete = useCachedResources();
    const isDBLoadingComplete = useDatabase();

    // if (isDBLoadingComplete) {
    //     SplashScreen.hideAsync();

        return (
            <PaperProvider>
                <NavigationContainer>
                    <AppNavigator database={db}/>
                </NavigationContainer>
            </PaperProvider>

        )
    // } else {
    //     return null
    // }
}

