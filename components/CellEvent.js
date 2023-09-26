import React from 'react';
import ScrollPicker from  "react-native-wheel-scrollview-picker";
import { Stylesheet, Text, View, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Fontisto } from 'react-native-vector-icons/Fontisto'

export default function CellEvent({ detail, prop }) {

    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState.apply('');

    const [index, setIndex] = React.useState(0);
    const ref = React.useRef();
    const onValueChange = (data, selectedIndex) => {
        setIndex(selectedIndex);
    };

    const dropdownData = [
        { label: "Team Meeting", value: 1}, 
        { label: "Offseason Competition", value: 2}, 
        { label: "Group Traning", value: 3}, 
        { label: "FIRST Workshop", value: 4}, 
        { label: "Community Service", value: 5}, 
        { label: "Community Outreach", value: 6}
    ]
    const [value, setValue] = React.useState(null)

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
        comp = 
        <View style={styles.input2}> 
            <View style={styles.calTextView}> 
            </View>
            <TouchableOpacity activeOpacity={1} style={styles.calIconView}>
                <Image style={styles.calIcon} source={require("../images/calanderIcon.png")}/>
            </TouchableOpacity>
        </View>
    } else if (prop == 'dropdown') {
        comp = 
        <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={dropdownData}
            maxHeight={300}
            labelField={"label"}
            valueField={"value"}
            placeholder={'Select the Event Type'}
            value={value}
            onChange={item => {
                setValue(item.value)
            }}
        />
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
        color: 'white', 
        textAlign: 'center'
    },

    input2: {
        height: '60%', 
        width: '55%', 
        borderWidth: 1, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#525252', 
        paddingLeft: 10, 
        color: 'white', 
        textAlign: 'center', 
        flexDirection: 'row',
        alignItems: 'center',
    },

    scrollViewPick: {
        width: "55%",
        height: '65%', 
        justifyContent: 'center', 
        // borderWidth: 0.5, 
        // borderColor: 'white',
        marginBottom: 5
    },

    dropdown: {
        height: '60%', 
        width: '55%', 
        borderWidth: 1, 
        borderRadius: 10, 
        borderWidth: 1, 
        borderColor: '#525252', 
        paddingLeft: 10, 
        color: 'white', 
        textAlign: 'center'
    }, 

    selectedTextStyle: {
        fontSize: 16, 
        color: "white", 
        textAlign: 'center'
    },

    placeholderStyle: {
        fontSize: 16, 
        color: "white",
        textAlign: 'center'
    }, 

    calTextView: {
        height: '100%', 
        width: '80%', 
        // borderWidth: 0.5, 
        // borderColor: 'black'
    }, 

    calIconView: {
        height: '80%', 
        width: '20%',
    },

    calIcon: {
        height: '100%', 
        width: '100%'
    }
})

