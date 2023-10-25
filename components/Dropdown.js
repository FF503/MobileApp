import {React,useState} from 'react'
import {View,TouchableOpacity,Text,StyleSheet} from 'react-native'
const Dropdown = (props) => {
    const [state,setState] = useState(true)
    const [items,setItems] = useState(props.items)
    const header = props.header;
    var currentState = state

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
        <View style={{flex:1,flexDirection:'column',borderColor:'red',borderWidth:4,minHeight:0,maxHeight:(currentState == true) ? 250 : 58}}>
            <View style={styles.headerStyle}>
            <TouchableOpacity onPress={()=>{changeState()}} style={{flex:1,maxHeight:50,flexDirection:'column'}}>
                <View style={{flex:1}}><Text>{header}</Text></View>
            </TouchableOpacity>
            </View>
            <View style={{flex:8,flexDirection:'column',borderColor:'green',borderWidth:4,maxHeight:200,display :(currentState == true) ? 'display': 'none'}}>
                {items.map((item,idx) => {
                    return(
                    <View key={idx}>
                        <TouchableOpacity onPress={()=>{callCallback(item,idx)}}>
                            <Text key={idx}>{item.value}</Text>
                        </TouchableOpacity>
                    </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor:'#e5e5e5',
        color:"#000000",
        minHeight:50,
        flexDirection:'column',
    }
})

export default Dropdown;
