import React, {useState} from 'react'
import { Calendar } from 'react-native-calendars'; 
import {TextInput, View, Text, Button,Image, Touchable, TouchableOpacity, ScrollView,StyleSheet,Headers} from 'react-native'
import moment from 'moment';
console.log("WE OPEN ")
const Home =()=>{
// Initialize with today's date
const [selected, setSelected] = useState('');
      //moment().add(7,"days")
    
    return(
        <View>
            {/* <Headers centerComponent ={{text: "Home", style: {color: "#fff"}}}/> */}
            <View>
            <Text style={styles.Header}>
             Home</Text>
      <Text style={styles.WelcomeH}>
            Welcome (insert name here)</Text>
            </View>
    <View>
    <Text style={styles.Header2}>Recent Updates</Text>
    
    </View>
    <View>
    <View
  style={{
    marginLeft: "2.5%",
    height: ".75%",
    width: "95%",
    backgroundColor: "black"
    // borderBottomColor: 'black',
    // borderBottomWidth: StyleSheet.hairlineWidth,
  }}
/>

   <Calendar
                onDayPress={day => {
                setSelected(day.dateString);
                console.log(selected)
                }}
                //markingType={'period'}
                markedDates={{
                [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'pink'},
                //'2023-05-06': {marked: true, dotColor: '#50cebb'},
                }}
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: '#ffffff',
                    textSectionTitleColor: 'pink', //colors days of week
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: 'gray',
                    textMonthFontSize: 32, 
                    textDayHeaderFontSize: 16,
                    rightArrow: 24,
                }}
                
                
            />
  </View>
  </View>
        
    )
   
}
const styles = StyleSheet.create({
    Header:{
    textAlign: 'left',
    fontSize: 40,
    marginTop: 20,
    marginLeft: 12,
    color: "#000000",
    fontWeight: "bold"
    },
    Header2:{
        textAlign: 'left',
        fontSize: 30,
        marginTop: 10,
        color: "#000000",
        marginLeft: 12  
    },
    WelcomeH:{
        textAlign: 'left',
        fontSize: 30,
        marginTop: 10,
        color: "#000000",
        marginLeft: 24
    },
    arrow: { fontSize: 50, margin: 100 },
    container: { flex: 1,height: 100,
      padding: 20,flexDirection: 'row'  },
      leftArrow: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 25,
        borderRightWidth: 25,
        borderBottomWidth: 50,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "black",
        margin: 5,
        marginTop: 15,
        transform: [{ rotate: "-90deg" }],
      },
      rightArrow: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 25,
        borderRightWidth: 25,
        borderBottomWidth: 50,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderBottomColor: "black",
        margin: 5,
        transform: [{ rotate: "90deg" }],
      },
      container1:{flex: 10}
   })
export default Home;