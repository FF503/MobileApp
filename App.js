import React from 'react'

import {Text, View,UIManager} from 'react-native'

import Settings from './pages/Settings'

const App = () => {
    if (
        Platform.OS === 'android' &&
        UIManager.setLayoutAnimationEnabledExperimental
      ) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    return (
            <Settings></Settings>
    )
}

export default App;