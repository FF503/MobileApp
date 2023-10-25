//import React from 'react';
import {View, StyleSheet, Image, Text, Modal,useState, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ranking from '../pages/Ranking';
import About from '../pages/About';
import { STYLES } from '../styles/styles';


const Tabs = () => {
      //const [modalVisible, setModalVisible] = useState(false);
      const Tab = createBottomTabNavigator();
  
      const CustomBarButton=({children, onPress} ) => {
        <TouchableOpacity
              style={{
                    bottom:30,
                    justifyContent:'center',
                    alignItems:'center',
                    ...style.shadow
              }}
              onPress={onPress}
        >
              <View
                    style={{
                          width:70,
                          height:70,
                          borderRadius: 35,
                          backgroundColor:'#e32f45'
                    }}
              >
                    {children}
              </View>
        </TouchableOpacity>
  
      }
  
        return(
  
              <Tab.Navigator 
                    screenOptions = {{
                          headerShown: false,
                          tabBarShowLabel: false,
                          tabBarStyle:{
                                position:'absolute',
                                bottom:15,
                                left:15,
                                right:15,
                                elevation:10,
                                backgroundColor: '#ffffff',
                                borderRadius: 5,
                                height:73,
                                ...style.shadow
                          }
  
                    }}
              >
              <Tab.Screen name="Home" component={About} options={{ 
                    tabBarIcon:({focused}) => {
                          return <View style={{backgroundColor:focused?'#e32f45' : '#748c94',  alignItems:"center", borderRadius: 3, paddingHorizontal:"10%", paddingTop:"9%"}} >
                              
                                <Image
                                      resizeMode = 'contain'
                                      style = {{
                                            width:30,
                                            height:30,
                                      //tintColor:  focused ? '#e32f45' : '#748c94'
  
                                      }}
                                      source = {require('../assets/images/home.png')}
  
                                />
                                <Text 
                                style={{color:"white", fontSize:15, marginBottom:"10%"}}
                                >Home</Text>
                          </View>
                          
                    }
                    }} />

              <Tab.Screen name="Events" component={Ranking} options={{ 
                    tabBarIcon:({focused}) => {
                          return <View>
                                <Image
                                      resizeMode = 'contain'
                                      style = {{
                                            marginLeft:13,
                                            width:30,
                                            height:30,
                                      tintColor:  focused ? '#e32f45' : '#748c94'
  
                                      }}
                                      //attribution for like flaticon required... graphics pizza
                                      source = {require('../assets/images/events.png')}
  
                                />
                                <Text
                                style={{color:focused?'#e32f45' : '#748c94', fontSize:15}}
                                >Calendar</Text>
                          </View>
                          
                    }
                    }} />
              
  
              <Tab.Screen name="List" component={Ranking} options={{ 
                    tabBarIcon:({focused}) => {
                          return <View>
                                <Image
                                      resizeMode = 'contain'
                                      style = {{
                                            marginLeft:-1,
                                            width:30,
                                            height:30,
                                      tintColor:  focused ? '#e32f45' : '#748c94'
  
                                      }}
                                      //attribution for like flaticon required... graphics pizza
                                      source = {require('../assets/images/to-do-list.png')}
                                      //key={this.state.source.uri}
  
                                />
                                <Text
                                style={{color:focused?'#e32f45' : '#748c94', fontSize:15}}
                                >Lists</Text>
                          </View>
                          
                    }
                    }} />
  
              <Tab.Screen name="Settings" component={About} options={{ 
                    tabBarIcon:({focused}) => {
                          return <View>
                                <Image
                                      resizeMode = 'contain'
                                      style = {{
                                            marginLeft:3,
                                            width:30,
                                            height:30,
                                      tintColor:  focused ? '#e32f45' : '#748c94'
  
                                      }}
                                      //attribution for like flaticon required... graphics pizza
                                      source = {require('../assets/images/setting.png')}
                                      //key={this.state.source.uri}
  
                                />
                                <Text
                                style={{color:focused?'#e32f45' : '#748c94', fontSize:15}}
                                >Setting</Text>
                          </View>
                          
                    }
                    }} />
  
              
              </Tab.Navigator>
              
            
        )
  }

const style = StyleSheet.create({
      shadow:{
            shadowColor: 'gray',//#7F5DF0
            shadowOffset:{
                  width:0,
                  height:10
            },
            shadowOpacity: 0.25,
            shadowRadius:3.5,
            elevation:5

      },
      icon:{
            width: 40,
            height: 40,
      }

})

export default Tabs;

