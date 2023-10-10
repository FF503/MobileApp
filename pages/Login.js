import React from 'react'
import {View,Text, Button} from 'react-native'
const login = () =>{
  console.log("Username")
}

const Login = () => {
  
    const x = 1+1
      return(
    <View>
    <Button
    onPress={login}
    title='Login'
    color='#2196F3'
    />
    </View>
  )
}

export default Login;