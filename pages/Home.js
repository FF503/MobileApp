import React, {useState} from 'react'
import { Calendar } from 'react-native-calendars'; 
import {TextInput, View, Text, Button,Image, FlatList,Touchable, TouchableOpacity, ScrollView,StyleSheet,Headers} from 'react-native'
import moment from 'moment';
console.log("WE OPEN ")

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    time: "10:00am"
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    time: "10:00am"
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    time: "10:00am"
  },
];

const Home =()=>{
// Initialize with today's date
const [selected, setSelected] = useState('');
      //moment().add(7,"days")
    
    return(
        <View style = {{backgroundColor: "#EDEDED", height: "100%"}}>
            {/* <Headers centerComponent ={{text: "Home", style: {color: "#fff"}}}/> */}
            <View>
            <Text style={styles.Header}>
             Home</Text>
      <Text style={styles.WelcomeH}>
            Welcome (insert name here)</Text>
            </View>
    <View>
    <Text style={styles.Header2}>Recent Updates</Text>
    {/* <View style={styles.update}>
      <Image
      source={require("../images/alert.png")}
      style={styles.alertImage}
      />
    <View style={{alignSelf:"center",marginLeft:10}}>
      <Text style={{fontSize:24,color: "black",fontWeight: "500"}}>Mech Meet Up Room 186</Text>
      <Text style={{fontSize:24,}}>10:00 a.m.</Text>
      </View>
    </View> */}
 <View style={{marginTop: 10, height:"auto" }}>
  <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} time={item.time} />}
        keyExtractor={item => item.id}
      />
    </View>
    </View>
    
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
                    rightArrow: 100,
                    leftArrow: 100,
                    fontSize: 24,
                    textDayFontSize: 20,
                    arrowHeight: 100,
                    arrowWidth:100,
                    
                }}
                
                
            />
  </View>
        
    )
   
}


const Item = ({title,time}) => (
  <View style={styles.update}>
  <Image
  source={require("../images/alert.png")}
  style={styles.alertImage}
  />
<View style={{flex: 1,marginLeft:10,flexDirection:"row", }}>
  <View >
  <Text style={{fontSize:24,color: "black",fontWeight: "500"}}>{title}</Text>
  <Text style={{fontSize:24,}}>{time}</Text>
  </View>
  <View style={{ flex: 1,flexDirection: "row-reverse", alignSelf:"flex-start"}}>
    <Image
      source={require("../images/Icon_Close.png")}
      style={{width: 30,
        height: 30, marginRight:"5%"}}
    /> 
  </View>
  </View>

</View>
);

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
    alertImage:{
      alignSelf: "center",
      
      width: 70,
      height: 70,
    },
    arrow: { fontSize: 50, margin: 100 },
    container: { flex: 1,height: 100,
      padding: 20,flexDirection: 'row'  },
    update: {
        // height: 75,
        flexDirection:'row',
        backgroundColor: 'white',
        borderRadius: 8,
        
        width: '95%',
        height: "auto",
        alignSelf: "center",
        marginBottom:20,
        
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      container1:{flex: 10}
   })
export default Home;