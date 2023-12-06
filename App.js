import React from 'react'

import {Text, View,UIManager} from 'react-native'

import NotificationSettings from './pages/NotificationSettings'

const App = () => {
    if (
        Platform.OS === 'android' &&
        UIManager.setLayoutAnimationEnabledExperimental
      ) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    return (
            <NotificationSettings></NotificationSettings>
    )
}

export default App;