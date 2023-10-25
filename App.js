import React from 'react'
import {View, StatusBar, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';

import Home from './pages/Home'
import FList from './pages/fList'
import Calendor from './pages/Calendar'

const App = () => {
  return(
    <View style={{flex: 1}}>
        <NavigationContainer>
        
          <Tabs/>
        </NavigationContainer>
    </View>
  )
}

export default App;