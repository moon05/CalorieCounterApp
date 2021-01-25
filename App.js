import {StatusBar} from 'expo-status-bar';
import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {Provider as PaperProvider} from 'react-native-paper';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import AppNavigator from './navigation.component';
// import { StyleSheet, Text, View } from 'react-native';

// export default () => (
//     <>
//       {/*<IconRegistry icons={EvaIconsPack}/>*/}
//       {/*<ApplicationProvider {...eva} theme={eva.light}>*/}
//       {/*  <AppNavigator/>*/}
//       {/*</ApplicationProvider>*/}
//         <PaperProvider>
//             <MyComponent />
//         </PaperProvider>
//     </>
// );

export default function App() {
    return (
        <PaperProvider>
            <AppNavigator/>
        </PaperProvider>

    )
}

