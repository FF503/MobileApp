import {React,useState,} from 'react'
import {View,TouchableOpacity,Text,StyleSheet, ScrollView,Dimensions} from 'react-native'
const Dropdown = (props) => {
    const [state,setState] = useState(true)
    const [items,setItems] = useState(props.items)
    const header = props.header;
    var currentState = state;
    var height = Dimensions.get('window').height; 
    const changeState = () => {
        //setState(!currentState)
        currentState = !currentState
        console.log("changed")
        setState(currentState)
        //return currentState
    }
    const callCallback = (item,index) => {
        item.callback(item,index)
    }
    if(currentState != state) {
        setState(currentState)
    }
    /*if(curSelectedValue != selected) {
        setSelected(curSelectedValue)
    }*/
    
    return (
        <View style={{paddingHorizontal:10}}>
            <View style={styles.containerStyle}>
                <View style={styles.headerStyle}>
                <TouchableOpacity onPress={()=>{changeState()}} style={{flex:1,flexDirection:'column'}}>
                    <View style={{}}><Text style={{fontSize:25,fontFamily:'Open-Sans',color:'#000000'}}>{header}</Text></View>
                </TouchableOpacity>
                <View style={{flex: 0.05, height: 1, backgroundColor: 'black'}} />
                </View>
                <ScrollView style={{display :(currentState == true) ? 'display': 'none',backgroundColor:'#e5e5e5',maxHeight: (currentState == true) ? height*0.1 : '%0'}}>
                    {items.map((item,idx) => {
                        return(
                        <View key={idx} style={{flex:1,flexDirection:'row'}}>
                            <TouchableOpacity onPress={()=>{callCallback(item,idx)}} style={{flex:9}}>
                                <Text key={idx} style={{fontSize:18,fontFamily:'Open-Sans',color:'#000000'}}>{item.value}</Text>
                            </TouchableOpacity>
                            <View style={{flex:1}}></View>
                        </View>
                        )
                    })}
                </ScrollView>
                <View style={{ flex: 1, justifyContent: 'flex-end' }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor:'#e5e5e5',
        color:"#000000",
        minHeight:50,
        //flexDirection:'column',
        borderColor:'#e5e5e5',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        //flex:1
        /*borderBottomLeftRadius: (currentState == true) ? 0 : 8,
        borderBottomRightRadius: (currentState == true) ? 0 : 8,*/
    },
    containerStyle: {
        backgroundColor:'#e5e5e5',
        borderColor:'#e5e5e5',
        borderRadius:8,
        backgroundColor:'#11111',
        //flex:1,
        //flexDirection:'column',
        borderWidth:4,
        minHeight:58,
        height:'auto',
    },
    dropdownStyle: {
        backgroundColor:'#e5e5e5',
        flexDirection:'column',
        borderColor:'#e5e5e5',
        borderWidth:4,
        maxHeight:'1%',
        height:'auto',
    }
})

export default Dropdown;
