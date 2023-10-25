import React from 'react'
import {View,Text, Button, Image} from 'react-native'
const login = () =>{
  console.log("Username")
}

const Login = () => {

      return(
    <View
    style={{flex:1, backgroundColor:'lightgreen'}}
    >
      <View
        style={{ flex:1,alignContent:"center",fontSize:20, flexDirection:'column-reverse'}}>
        <Text
          style={{color:'darkgreen', textAlign:"center",fontSize:200}}>
            Lilypad
        </Text>
      </View>
      <View style={{flex:1,  alignContent:"center"}}>
        <Text
          style={{color:'black', textAlign:"center",fontSize:40}}>
            Login
        </Text>
        
        <View style={{flex:1,  alignContent:"center", flexDirection: "row"}}>
          <View  style={{flex:1,  alignContent:"center"}}>
          </View>
          <View  style={{flex:1,  alignContent:"center"}}>
          <Button style={{alignContent:"center",flex:4,fontSize:40}}
            onPress={login}  
            title='Sign in'
        /> 
          </View>
       

        <View  style={{flex:1,  alignContent:"center"}}>
          </View>
        </View>
        
     <View style={{flex:6,  alignContent:"center"}}>
        <Text
          style={{color:'black', textAlign:"center",fontSize:20}}>
            with Outlook
        </Text>
        </View>
      </View>
     
   
    </View>
  )
}

export default Login;