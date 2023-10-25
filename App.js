import React, {useState} from 'react'
import {Text, View, TextInput, StyleSheet, Image} from 'react-native'

//search 1
//AntDesign

const App = () => {

    const [text, onChangeText] = useState('');

    return (
        <View>
            <Text style={{fontSize:30, color: 'red'}}>Contacts</Text>
            <View style={{padding: 5, alignItems:'center', flexDirection:'row'}}>
            <Image 
            style={{width: 20,
                height: 20}}
            source={require("./search_logo.png")}/>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Find User Name"
            />
            </View>
        </View>
    )
}

export default App;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 2.5,
      paddingLeft: 10,
      borderRadius: 10
    },
  });
  
