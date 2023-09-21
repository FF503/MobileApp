import React from 'react';
import ScrollPicker from  "react-native-wheel-scrollview-picker";
import { Stylesheet, Text, View, TextInput, StyleSheet } from 'react-native';

export default function CellEvent({ detail, prop }) {

    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState.apply('');

    const [index, setIndex] = React.useState(0);
    const ref = React.useRef();
    const onValueChange = (data, selectedIndex) => {
        setIndex(selectedIndex);
    };

    if (prop == 'input') {
        //Input Component
        comp = <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder=""
        />
    } else if (prop == 'scroll') {
        comp = 
        <View style={styles.scrollViewPick}>
            <ScrollPicker
            dataSource = {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21']}
            selectedIndex = {index}
            //
            //
            //
            onValueChange={(data, selectedIndex) => {
                //
            }}
            wrapperHeight = {40}
            wrapperBackground = '#303030'
            itemHeight = {20}
            highlightColor = "#d8d8d8"
            highlightBorderWidth = {1}
        />
        </View>
        
    } else if (prop == 'calander') {
        comp = <Text> calander prop will be completed soon hopefully </Text>
    } else if (prop == 'dropdown') {
        comp = <Text> dropdown prop will be complete soon hopefully </Text>
    }

    return(
        <View style={styles.cell}>
            <Text style={styles.detailText}> {detail} </Text>
            {comp}
        </View>
    );
}

const styles = StyleSheet.create({
    cell: {
        justifyContent: 'left', 
        alignItems: 'center', 
        width: '94%', 
        height: 60, 
        borderWidth: 1, 
        marginTop: 5, 
        borderRadius: 10, 
        backgroundColor: '#303030',
        flexDirection: 'row'
    }, 

    detailText: {
        color: 'white', 
        //
        //
        width: '40%', 
        fontSize: 20, 
        marginLeft: 5, 
    }, 

    input: {
        height: '60%', 
        width: '55%', 
        borderWidth: 1, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#525252', 
        paddingLeft: 10, 
        color: 'white'
    },

    scrollViewPick: {
        width: "55%",
        height: '65%', 
        justifyContent: 'center', 
        // borderWidth: 0.5, 
        // borderColor: 'white',
        marginBottom: 5
    }
})

