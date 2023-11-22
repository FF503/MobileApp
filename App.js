import React from 'react'
import {Text, View} from 'react-native'
import EventRegistration from './pages/EventRegistration'
import CreateEvent from './pages/CreateEvent';

export default function App() {
  return(
    <View>
        {/* <CreateEvent></CreateEvent> */}
        <EventRegistration></EventRegistration>
    </View>
  );
}