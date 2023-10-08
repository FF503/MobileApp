import React, {useState} from 'react'

import {TextInput, View, Text, Button,Image, Touchable, TouchableOpacity, ScrollView,StyleSheet,Headers} from 'react-native'
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
console.log("WE OPEN ")
const Home =()=>{
  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with today's date

  const handleDateChange = (newDate) => {
    // Update the selected date when it changes
    setSelectedDate(newDate);
  };
  const handleLeftArrowPress = () => {
    // Handle left arrow press

    console.log('Left arrow pressed');
  };

    const handleRightArrowPress = () => {
      // Handle right arrow press
      console.log('Right arrow pressed');
    };
    console.log(moment().date())
    day = moment().date()-1
    start1= moment().subtract(day,"days")
    start2 = moment().add(7-day,"days")
    console.log(start2)
    s2 = start2
    start3 = moment().add(14-day,"days")
    start4 = moment().add(21-day,"days")
    start5 = moment().add(28-day,"days")
    start6 = moment().add(35-day,"days")
    // console.log("moment: ")
    // console.log(moment())
    // console.log("Start1: ")
    // console.log(start1)
    // console.log("Start2: ")
    // console.log(start2)
    // console.log("Start3: ")
    // console.log(start3)
    // console.log("Start4: ")
    // console.log(start4)
    // console.log("Start5: ")
    // console.log(start5)
    // // console.log("momF: ")
    // // console.log(mom)
    console.log('"'+moment().year()+"-"+(moment().month()+1)+"-01T19:34:24.526Z"+'"')
    //start1='"'+(moment().year())+"-"+(moment().month()+1)+"-01T19:34:24.526Z"+'"'
    console.log(typeof(moment() ))
    //start1=moment()
    datesWhitelist = [
        // single date (today)
        moment(),
        
        // date range
        {
          start: moment(),
          end: moment().add(1,'days')
        }
      ];
      start = "2023-10-25T19:34:24.526Z"
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
    <View style={styles.container}>
      <View style= {{flex: 1}}>
    <TouchableOpacity onPress={handleLeftArrowPress} style={styles.leftArrow}>

      
      </TouchableOpacity>
      </View>
      <View style= {styles.container1}>
    <CalendarStrip
        
      style={{height:150, marginTop: 20}}
      startingDate={start1}
      leftSelector={[]} // Remove the left arrow
      rightSelector={[]}
      
    //   datesBlacklist={datesBlacklistFunc}
    />
    <CalendarStrip
        
        style={{height:100}}
  
        startingDate={start2}
        showMonth={false}
        leftSelector={[]} // Remove the left arrow
        rightSelector={[]}
        
        
      //   datesBlacklist={datesBlacklistFunc}
      />
      <CalendarStrip
        
        style={{height:100}}
        startingDate={start3}
        showMonth={false}
        leftSelector={[]} // Remove the left arrow
        rightSelector={[]}
        
      //   datesBlacklist={datesBlacklistFunc}
      />
      <CalendarStrip
        
        style={{height:100}}
        startingDate={start4}
        showMonth={false}
        leftSelector={[]} // Remove the left arrow
        rightSelector={[]}
        
        
      //   datesBlacklist={datesBlacklistFunc}
      />
      <CalendarStrip
        
        style={{height:100}}
        startingDate={start5}
        showMonth={false}
        leftSelector={[]} // Remove the left arrow
        rightSelector={[]}
        
        
      //   datesBlacklist={datesBlacklistFunc}
      />
      <CalendarStrip
        style={{height:100}}
        startingDate={start6}
        showMonth={false}
        leftSelector={[]} // Remove the left arrow
        rightSelector={[]}
        
        
      //   datesBlacklist={datesBlacklistFunc}
      /></View>
      <View style= {{flex: 1}}>
      <TouchableOpacity onPress={handleRightArrowPress} style={styles.rightArrow}>
      </TouchableOpacity>
  </View>
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