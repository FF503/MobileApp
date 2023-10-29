import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  StatusBar,
} from 'react-native';

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

const FList = () => {
  return (

    <View>
      <Text style={{fontSize: 25}}>
        WAS GOO GAN
      </Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} time={item.time} />}
        keyExtractor={item => item.id}
      />
       <Text style={{fontSize: 25}}>
        WAS GOO GAN
      </Text>
    </View>
  );
};

const Item = ({title,time}) => (
  <View style={styles.update}>
  <Image
  source={require("../images/alert.png")}
  style={styles.alertImage}
  />
<View style={{alignSelf:"center",marginLeft:10}}>
  <Text style={{fontSize:24,color: "black",fontWeight: "500"}}>{title}</Text>
  <Text style={{fontSize:24,}}>{time}</Text>
  </View>
</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
  },
  update: {
    // height: 75,
    flexDirection:'row',
    backgroundColor: 'white',
    borderRadius: 8,
    
    width: '95%',
    height: "25%",
    alignSelf: "center",
    marginVertical: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default FList;