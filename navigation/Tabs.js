//import React from 'react';
import {View, StyleSheet, Image, Text, Modal,useState, TouchableOpacity} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ranking from '../pages/Ranking';
import About from '../pages/About';
import { COLORS, STYLES } from '../styles/styles';


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
                              position:"absolute",
                                bottom:"2%",
                                left:"6%",
                                right:"6%",
                                elevation:10,
                                backgroundColor: COLORS.primary,
                                borderRadius: 5,
                                height:"10%",
                                ...style.shadow
                          }
  
                    }}
              >
                  <Tab.Screen name="Settings" component={About} options={{ 
                    tabBarIcon:({focused}) => {
                          return <View style={{backgroundColor:focused?COLORS.white : COLORS.primary,...style.icon}}>
                                <Image
                                      resizeMode = 'contain'
                                      style = {{
                                            width:30,
                                            height:30,
                                      tintColor:  focused?COLORS.primary : COLORS.white
  
                                      }}
                                      //attribution for like flaticon required... graphics pizza
                                      source = {require('../assets/images/setting.png')}
                                      //key={this.state.source.uri}
  
                                />
                                <Text
                                style={{color:focused?COLORS.primary : COLORS.white, fontSize:15, marginBottom:"5%"}}
                                >Setting</Text>
                          </View>
                          
                    }
                  }} />

                  <Tab.Screen name="Roster" component={Ranking} options={{ 
                    tabBarIcon:({focused}) => {
                          return <View style={{backgroundColor:focused?COLORS.white : COLORS.primary,  ...style.icon}}>
                                <Image
                                      resizeMode = 'contain'
                                      style = {{
                                            width:30,
                                            height:30,
                                      tintColor:  focused?COLORS.primary : COLORS.white
  
                                      }}
                                      //attribution for like flaticon required... graphics pizza
                                      source = {require('../assets/images/to-do-list.png')}
                                      //key={this.state.source.uri}
  
                                />
                                <Text
                                style={{color:focused?COLORS.primary : COLORS.white, fontSize:15, marginBottom:"5%"}}
                                >Roster</Text>
                          </View>
                          
                    }
                  }} />

                  <Tab.Screen name="Home" component={About} options={{ 
                    tabBarIcon:({focused}) => {
                          return <View style={{backgroundColor:focused?COLORS.white : COLORS.primary, ...style.icon}} >
                              
                                <Image
                                      resizeMode = 'contain'
                                      style = {{
                                            width:30,
                                            height:30,
                                      tintColor: focused?COLORS.primary : COLORS.white
  
                                      }}
                                      source = {require('../assets/images/home.png')}
  
                                />
                                <Text 
                                style={{color:focused?COLORS.primary : COLORS.white, fontSize:15, marginBottom:"5%"}}
                                >Home</Text>
                          </View>
                          
                    }
                  }} />

                  <Tab.Screen name="Events" component={Ranking} options={{ 
                    tabBarIcon:({focused}) => {
                          return <View style={{backgroundColor:focused?COLORS.white : COLORS.primary, ...style.icon}}>
                                <Image
                                      resizeMode = 'contain'
                                      style = {{
                                            width:30,
                                            height:30,
                                      tintColor:  focused?COLORS.primary : COLORS.white
  
                                      }}
                                      //attribution for like flaticon required... graphics pizza
                                      source = {require('../assets/images/events.png')}
  
                                />
                                <Text
                                style={{color:focused?COLORS.primary : COLORS.white, fontSize:15, marginBottom:"5%"}}
                                >Events</Text>
                          </View>
                          
                    }
                  }} />

                  <Tab.Screen name="Store" component={About} options={{ 
                    tabBarIcon:({focused}) => {
                          return <View style={{backgroundColor:focused?COLORS.white : COLORS.primary,  ...style.icon}}>
                                <Image
                                      resizeMode = 'contain'
                                      style = {{
                                            width:30,
                                            height:30,
                                      tintColor:  focused?COLORS.primary : COLORS.white
  
                                      }}
                                      //attribution for like flaticon required... graphics pizza
                                      source = {require('../assets/images/setting.png')}
                                      //key={this.state.source.uri}
  
                                />
                                <Text
                                style={{color:focused?COLORS.primary : COLORS.white, fontSize:15, marginBottom:"5%"}}
                                >Store</Text>
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
            width:"80%",
            height:"80%",
            alignItems:"center", 
            borderRadius: 3, 
            paddingHorizontal:"3%", 
            paddingTop:"9%"
      },
      

})

export default Tabs;

