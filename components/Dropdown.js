import React, { useState } from 'react';

import {
    SafeAreaView,
    Text,
    View,
    Linking,
    TouchableHighlight,
    PermissionsAndroid,
    Platform,
    StyleSheet,
    Alert,
    TouchableOpacity,
    Image,
    TextInput,
    ScrollView,
} from 'react-native';

const Dropdown = (props) => {
    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity
                    style={{}}
                    onPress={async () => {
                        let tempDb = props.btn
                        console.log(button[props.v])
                        tempDb[props.v] = tempDb[props.v] ? false : true;
                        setdb(tempDb)
                        console.log("tempDb = " + tempDb)
                    }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={[styles.text, { width: '70%' }]}>{props}</Text>
                        {button[props.v] ? (<Image style={{ width: 15, height: 15, borderColor: 'black' }} source={require("../images/upArrow.png")} />
                        ) : (<Image style={{ width: 15, height: 15, borderColor: 'black' }} source={require("../images/arrow.png")} />)}
                        {/* {button[props.v] ? (<View></View>
                        ) : (<Image style={{ width: 15, height: 15, borderColor: 'black' }} source={require("../images/arrow.png")} />)} */}
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Dropdown;