import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './navigation.component';

import Profile from './model/Profile'
import Database from "@nozbe/watermelondb/Database";
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import {mySchema} from "./models/schema";

const adapter = new SQLiteAdapter({
    dbName: 'CalorieCounterDemo',
    schema: mySchema,
})

const database = new Database({
    adapter,
    modelClasses: [Profile],
})

export default function App() {
    return (
        <PaperProvider>
            <AppNavigator/>
        </PaperProvider>

    )
}

