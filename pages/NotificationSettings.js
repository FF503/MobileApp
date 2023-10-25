import React, {useState} from "react";
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';

const NotificationSettings = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    return (
        <View style = {styles.container}>
            <View><Text style = {styles.Header}>Notification Settings</Text></View>
            <View>
            <Text style = {styles.Header2}>Team Meeting Notification</Text>
            </View>
            <View>
            <Text style = {styles.Header2}>Outreach Notification</Text>
            </View>
            <View style = {{marginTop: 20}}>
            <View>
            <Text style = {styles.Header2}> Group Notifications </Text>
            <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
              
            <View>
            <Text style = {styles.Header2}>New Event Notifications</Text>
            <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                />
            </View>
            </View>
                
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    Header:{
        textAlign: 'left',
        fontSize: 40,
        marginTop: 20,
        // marginLeft: 12,
        color: "#000000",
        fontWeight: "bold",
        },
        Header2:{
            textAlign: 'left',
            fontSize: 30,
            marginTop: 10,
            color: "#000000",
            // marginLeft: 12
        },
        WelcomeH:{
            textAlign: 'left',
            fontSize: 30,
            marginTop: 10,
            color: "#000000",
            marginLeft: 24
        },
        alertImage:{
          verticalAlign: "center",
          marginTop: -40,
          width: 70,
          height: 70,
        },
        arrow: { fontSize: 50, margin: 100 },
        // container: { flex: 1,height: 100,
        //   padding: 20,flexDirection: 'row'  },
        //   update: {
        //     // height: 75,
        //     flexDirection:'row',
        //     backgroundColor: 'white',
        //     borderRadius: 8,
        //     paddingVertical: 45,
        //     paddingHorizontal: 25,
        //     width: '95%',
        //     maxHeight: "10%",
        //     alignSelf: "center",
        //     marginVertical: 10,
        //     // shadowColor: '#171717',
        //     // shadowOffset: {width: -2, height: 4},
        //     // shadowOpacity: 0.2,
        //     // shadowRadius: 3,
        //   },
        //   container1:{flex: 10}
  });

export default NotificationSettings;

