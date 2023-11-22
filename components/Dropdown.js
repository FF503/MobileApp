import {React,useState,} from 'react'
import {View,TouchableOpacity,Text,StyleSheet, ScrollView,Dimensions,LayoutAnimation} from 'react-native'
const Dropdown = (props) => {
    const [state,setState] = useState(true)
    const [items,setItems] = useState(props.items)
    const [pressed,setPressed] = useState(false);
    let currentPressed = pressed;
    const header = props.header;
    let currentState = state;
    var height = Dimensions.get('window').height; 
    const changeState = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        //setState(!currentState)
        currentState = !currentState
        console.log("changed")
        setState(currentState)
        //return currentState
    }
    const callCallback = (item,index) => {
        item.callback(item,index)
        currentPressed = true;
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        changeState();
    }
    if(currentState != state) {
        setState(currentState)
    }
    if(currentPressed != pressed) {
        setPressed(currentPressed);
    }
    /*if(curSelectedValue != selected) {
        setSelected(curSelectedValue)
    }*/
    
    return (
        <View style={{paddingHorizontal:10}}>
            <View style={styles.containerStyle}>
                <View style={styles.headerStyle}>
                <TouchableOpacity activeOpacity={1} onPress={()=>{changeState()}} style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
                    <View style={{}}><Text style={{fontSize:25,fontFamily:'Open-Sans',color:'#000000'}}>{header}</Text></View>
                </TouchableOpacity>
                <View style={{flex:0.05,justifyContent:'center',flexDirection:'row'}}>
                    <View style={{height: 1, backgroundColor: 'black',width:(currentState == true) ? '100%' : '0%'}} />
                </View>
                
                </View>
                {/*<View style={{height: (currentState == true) ? 0 : 100,backgroundColor:'red'}}></View>*/}
                <ScrollView style={{backgroundColor:'#e5e5e5',height: (currentState == true) ? height*0.1 : 0}}>
                    {items.map((item,idx) => {
                        return(
                        <View key={idx} style={{flex:1,flexDirection:'row'}}>
                            {/*<TouchableOpacity onPress={()=>{callCallback(item,idx)}} style={{flex:9}}>*/}
                                <Text onPress={(e)=>{callCallback(item,idx); }} key={idx} style={{fontSize:18,fontFamily:'Open-Sans',color:'#000000',opacity:(pressed==true) ? 0.5 : 1}}>{item.value}</Text>
                            {/*</TouchableOpacity>*/}
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
        //backgroundColor:'#11111',
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
