import React, {useState} from "react";
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';

const NotificationSettings = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    /*return (
        <View style = {styles.container}>
            <View style = {{flex: 1}}><Text style = {styles.Header}>Notification Settings</Text></View>
            <View style = {{flex: 1}}>
            <Text style = {styles.Header2}>Team Meeting Notification</Text>
            </View>
            <View style={{backgroundColor:'#111111',flex: 1}}>
            <Text style = {styles.Header2}>Outreach Notification</Text>
            </View>
            <View style = {{marginTop: '20%',flex: 1}}>
            <View style = {{backgroundColor: "red",flex: 1}}>
            <Text style = {styles.Header2}> Group Notifications </Text>
            <Switch style = {{marginBottom: '5%',flex: 1}}
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style = {{margin: '5%',flex: 1}}></View>
            <View style = {{backgroundColor: "#EDEDED",flex: 1}}>
            <View style = {{marginBottom: '10%',flex: 1}}>
            <Text style = {styles.Header2}>New Event Notifications</Text>
            <Switch style = {{marginBottom: '5%',flex: 1}}
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled2 ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                />
            </View>
            </View>
            </View>
                
        </View>
    );*/

    return(
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>Notification Settings</Text>
            </View>

            <View style={styles.interactable}>
                <View style={styles.dropdown}>
                    <Text>Team Meeting Notification</Text>
                </View>
                <View style={styles.padding}></View>
                <View style={styles.dropdown}>
                    <Text>Outreach Notification</Text>
                </View>
                <View style={styles.padding}></View>
                    <View style={styles.checkbox}>
                        <Text style={styles.checkboxText}>Group Notifications</Text>
                        <Switch style = {{marginBottom: '5%'}}
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />

                    </View>
                <View style={styles.padding}></View>
                    <View style={styles.checkbox}>
                        <Text style={styles.checkboxText}>New Event Notifications</Text>
                        <Switch style = {{marginBottom: '5%'}}
                                trackColor={{false: '#767577', true: '#81b0ff'}}
                                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />

                    </View>
                <View style={styles.padding}></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
    },
    /*
    Header:{
        flex:5,
        alignSelf: 'center',
        fontSize: 40,
        marginTop: '5%',
        // marginLeft: 12,
        color: "#000000",
        fontWeight: "bold",
        },
        Header2:{
            flex:2,
            textAlign: 'left',
            fontSize: 25,
            marginTop: '15%',
            color: "#000000",
            // marginLeft: 12
        },
        WelcomeH:{
            textAlign: 'left',
            fontSize: 30,
            marginTop: '5%',
            color: "#000000",
            marginLeft: '35%'
        },
    */
    header: {
        flex:4,
        flexDirection:'column',
        padding:10
    },
    headerText: {
        fontSize: 40,
        fontWeight:'bold',
        color:'#000000',
    },
    dropdown: {
        flex:3,
        borderWidth:4,
        borderColor:'#e5e5e5',
        flexDirection:'column',
        justifyContent:'center',
        padding:10,
        backgroundColor:'#e5e5e5',
        borderRadius:18
    },
    checkbox: {
        flex:1,
        borderWidth:4,
        borderColor:'#e5e5e5',
        flexDirection:'column',
        justifyContent:'center',
        padding:10,
        backgroundColor:'#e5e5e5',
        borderRadius:18
    },
    checkboxText: {
        textAlign: 'left',
        fontSize: 25,
        color:'#000000'
    },
    interactable: {
        flex:22,
        flexDirection:'column',
        justifyContent:'space-around',
        padding:40,
        
    },
    padding: {
        flex:0.5
    }
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

