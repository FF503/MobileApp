import React, {useState} from 'react'
import { Calendar } from 'react-native-calendars'; 
import {TextInput, View, Text, Button,Image, FlatList,Touchable, TouchableOpacity, ScrollView,StyleSheet,Headers,Route} from 'react-native'
import { COLORS, STYLES } from '../styles/styles';  
import About from '../pages/About';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { render } from '@testing-library/react-native';
import { Navigation } from 'react-calendar';


console.log("WE OPEN ")
//const [i, setI] = useState(3);
const DATA1 = [
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
  {
    id: '32384392h-3da1-471f-bd96-145571e29d72',
    title: 'Fourth Item',
    time: "1:00am"
  },
];
DATA= []
  for(let i= 0;i<DATA1.length; i++){
    if (i<3){
      DATA.push(DATA1[i])
    }
 
  }
console.log(DATA)



// DATA.push({
//   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//   title: '4th Item',
//   time: "10:00am"
// })
//WHen the time is right and I get SQl use the above code to insert sql database values into it



const Home =(navigation)=>{

  const [selected, setSelected] = useState('');
  const [trial, setTrial] = useState(0);
 
 



  const onDelte = (timee,titlee,ide)=>{
    setTrial(trial+1);
    
    const indexT = DATA.findIndex((item) => item.title === titlee);
    const indexC = DATA.findIndex((item) => item.time === timee);
    console.log("0")
    console.log("The Scuffed title is "+indexT);
    console.log("The Scuffed time is "+indexC);
    const indo = indexT
    
    console.log("INDEX1 IS: " + indo);
    if (indexC>=indexT){
      console.log("1")
      const indo=indexC
    }

    else if(indexT>=indexC){
      console.log("2")
      const indo = indexT;
    }
    console.log("3")
    console.log("Title: " + titlee);
    console.log("INDEX IS: " + indo);
    const inde = indo;
    //hopefully the unique thing will work when i get actual sql but this works for now
    
    console.log("Index: "+inde);
    const x = DATA.splice(inde, 1);
    console.log("X: "+x);
    console.log("did it work tho?");
    console.log(DATA);
   }; 
  

  const Item = ({id,title,time}) => (
    <View style={styles.update}>
    <Image
    source={require("../images/alert.png")}
    style={styles.alertImage}
    />
  <View style={{flex: 1,marginLeft:10,flexDirection:"row", }}>
    <View >
    <Text style={{fontSize:24,color: COLORS.secondary,fontWeight: "500"}}>{title}</Text>
    <Text style={{fontSize:24,}}>{time}</Text>
    </View>
    <View style={{ flex: 1,flexDirection: "row-reverse", alignSelf:"flex-start"}}>
      
      <TouchableOpacity 
      onPress={()=> 
        onDelte(time,title,id)
        //console.log("DA ID IS" + id)
      }
      >
      <Image
        source={require("../images/Icon_Close.png")}
        style={{width: 30,
          height: 30, marginRight:"5%"}}
      /> 
      
       </TouchableOpacity>
    </View>
    </View>
  
  </View>
  );


    
    return(
        <ScrollView style = {{backgroundColor: COLORS.white, height: "100%"}}>
         
            {/* <Headers centerComponent ={{text: "Home", style: {color: "#fff"}}}/> */}
            <View>
            <Text style={styles.Header}>
             Home</Text>
      <Text style={styles.Header2}>
            Welcome (insert name here)</Text>
            </View>
    <View>

    <View style={{flex: 1,marginLeft:10,flexDirection:"row", }}>
    <View >
   
    <Text style={styles.Header2}>Recent Updates</Text>
    </View>
    <View style={{ flex: 1,flexDirection: "row-reverse", alignSelf:"flex-start"}}>
      
      <TouchableOpacity 
      onPress={
        console.log("HOHOOHOH")
      }
      >
      <Text style={{color:COLORS.primary, marginRight: "5%",fontSize:20,marginTop:"20%"}}>
        see more...
      </Text>
      
       </TouchableOpacity>
    </View>
    </View>

 <View style={{marginTop: 10, height:"auto" }}>
  <FlatList
        nestedScrollEnabled
        data={DATA}
        renderItem={({item}) => <Item title={item.title} time={item.time} />}
        keyExtractor={item => item.id}
        extraData={DATA}        
      />
      
    </View>
    </View>
    
    <View
  style={{
    marginLeft: "2.5%",
    height: ".75%",
    width: "95%",
    backgroundColor: COLORS.secondary
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
                [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: COLORS.primary},
                //'2023-05-06': {marked: true, dotColor: '#50cebb'},
                }}
                theme={{
                    backgroundColor: COLORS.white,
                    calendarBackground: COLORS.white,
                    textSectionTitleColor: COLORS.primary, //colors days of week
                    selectedDayBackgroundColor: COLORS.primary,
                    selectedDayTextColor: COLORS.white,
                    todayTextColor: COLORS.primary,
                    dayTextColor: COLORS.textGray,
                    textDisabledColor: COLORS.textGray,
                    textMonthFontSize: 32, 
                    textDayHeaderFontSize: 16,
                    rightArrow: 100,
                    leftArrow: 100,
                    fontSize: 24,
                    textDayFontSize: 20,
                    arrowHeight: 100,
                    arrowWidth:100,
                    marginBottom: 15,
                    
                }}
                
                
            />
      <View style={{height: 50}}>
                {/* <Text>
                  

                </Text> */}
      </View>
  </ScrollView>
        
    )
   
}




const styles = StyleSheet.create({
    
    Header:{
    textAlign: 'left',
    fontSize: 40,
    marginTop: 20,
    marginLeft: 12,
    color: COLORS.secondary,
    fontWeight: "bold"
    },
    Header2:{
        textAlign: 'left',
        fontSize: 30,
        marginTop: 10,
        color: COLORS.secondary,
        marginLeft: 12  
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
        backgroundColor: COLORS.white,
        borderRadius: 8,
        
        width: '95%',
        height: "auto",
        alignSelf: "center",
        marginBottom:20,
        
        shadowColor: COLORS.secondary,
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      container1:{flex: 10}
   })
export default Home;