import React from 'react'

import {Text, View} from 'react-native'

import Dropdown from "../components/Dropdown.js"

const customCallbackTest = (item,idx) => {
    console.log("Item value : " + item.value +  " index : " + idx)
}

const Settings = () => {

    const itemsd =  [{value:'hi',key:1,callback:customCallbackTest},{value:'hello',key:2,callback:customCallbackTest},{value:'bye',key:3,callback:customCallbackTest},{value:'bye',key:4,callback:customCallbackTest},{value:'bye',key:5,callback:customCallbackTest},{value:'bye',key:6,callback:customCallbackTest}]
    return (
        <View style={{flex:1,flexDirection:'column'}}>
            <View style={{flex:1}}>
                <Text style={{fontSize:30}}>Settings</Text>
            </View>
            <View style={{flex:12,borderColor:'red',borderWidth:2}}>
                <View style={{flex:1,borderColor:'red',borderWidth:2}}>
                    <Text>Person info</Text>
                </View>
                <View style={{flex:4,borderColor:'red',borderWidth:2}}>
                    <Text>Settings buttons</Text>
                    <Dropdown style={{flex:1}} 
                    items={itemsd} header='Hello'
                    ></Dropdown>
                </View>
            </View>
        </View>
    )
}
//<Dropdown style={{flex:1}} props={[{value:'hi'},{value:'hello'}]}></Dropdown>
export default Settings;