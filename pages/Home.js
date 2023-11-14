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



// DATA.push({
//   id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//   title: '4th Item',
//   time: "10:00am"
// })
//WHen the time is right and I get SQl use the above code to insert sql database values into it



const Home =()=>{

  const [selected, setSelected] = useState('');
  const [trial, setTrial] = useState(0);
 
  const [index, setIndex] = useState();


  const onDelte = (timee,titlee,ide)=>{
    setTrial(trial+1);
    console.log("id: "+ ide);
    console.log("title: "+titlee);
    console.log("time: "+timee);
    // const index = DATA.indexOf(
    //   {
    //     id: ide,  
    //     title: titlee,
    //     time: timee
    //   }
    // );
    const indexT = DATA.findIndex((item) => item.title === titlee);
    const indexC = DATA.findIndex((item) => item.time === timee);
    console.log("WOEK PLASE 0")
    setIndex(indexT)
    console.log("WOEK PLASE 1")
    if (indexC>=indexT){
      console.log("WOEK PLASE 2")
      setIndex(indexC);
      console.log("WOEK PLASE 3")
    }
    else if(indexT>=indexC){
      console.log("WOEK PLASE 4")
      setIndex(indexT);
      console.log("WOEK PLASE 5")
    }
    console.log("WOEK PLASE 6")
    console.log("Title: " + titlee);
    const inde = index;
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
    <Text style={{fontSize:24,color: "black",fontWeight: "500"}}>{title}</Text>
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


// Initialize with today's date

      //moment().add(7,"days")
    
    return(
        <ScrollView style = {{backgroundColor: "#EDEDED", height: "100%"}}>
            {/* <Headers centerComponent ={{text: "Home", style: {color: "#fff"}}}/> */}
            <View>
            <Text style={styles.Header}>
             Home</Text>
      <Text style={styles.Header2}>
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