import React from 'react';
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { Stylesheet, Text, View, TextInput, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import CalendarPicker from 'react-native-calendar-picker';

export default function CellEvent({ detail, prop }) {

    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState.apply('');
    const [textDate, setTextDate] = React.useState('')
    const [currentDate, setCurrentDate] = React.useState("")
    const [showModal, setShowModal] = React.useState(false);

    const [index, setIndex] = React.useState(0);
    const ref = React.useRef();
    const onValueChange = (data, selectedIndex) => {
        setIndex(selectedIndex);
    };

    function onDateChange(date) {
        let tempDate = date
        setCurrentDate(tempDate);

        let dateList = (tempDate.toString()).split(" ");
        console.log(tempDate.toString())
        console.log(dateList);

        let dayList = dateList[2];
        console.log("Day: " + dayList)
        let year = dateList[3]
        console.log("Year: " + year)
        let monthList = dateList[1];
        console.log("Month: " + monthList)
        let month = "";
        if (monthList == "Jan") {
            month = "January";
        } else if (monthList == "Feb") {
            month = "February";
        } else if (monthList == "Mar") {
            month = "March";
        } else if (monthList == "Apr") {
            month = "April";
        } else if (monthList == "May") {
            month = "May";
        } else if (monthList == "Jun") {
            month = "June";
        } else if (monthList == "Jul") {
            month = "July";
        } else if (monthList == "Aug") {
            month = "August";
        } else if (monthList == "Sep") {
            month = "September";
        } else if (monthList == "Oct") {
            month = "October";
        } else if (monthList == "Nov") {
            month = "November";
        } else if (monthList == "Dec") {
            month = "December";
        }
        let finalDate = month + " " + dayList + ", " + year + " - 12:56 AM";
        setCurrentDate(finalDate);
        setShowModal(false);
    }

    const dropdownData = [
        { label: "Team Meeting", value: 1 },
        { label: "Offseason Competition", value: 2 },
        { label: "Group Traning", value: 3 },
        { label: "FIRST Workshop", value: 4 },
        { label: "Community Service", value: 5 },
        { label: "Community Outreach", value: 6 }
    ]
    const [value, setValue] = React.useState(null)

    if (prop == 'input') {
        //Input Component
        comp =
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder=""
            />
    } else if (prop == 'scroll') {
        comp =
            <View style={styles.scrollViewPick}>
                <ScrollPicker
                    dataSource={['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21']}
                    selectedIndex={index}
                    //
                    //
                    //
                    onValueChange={(data, selectedIndex) => {
                        //
                    }}
                    wrapperHeight={40}
                    wrapperBackground="#303030"
                    itemHeight={20}
                    highlightColor="white"
                    highlightBorderWidth={1}
                />
            </View>

    } else if (prop == 'calander') {

        comp =
            <View style={styles.calanderView}>
                <TouchableOpacity onPress={() => setShowModal(true)} style={styles.input2}>
                    <Text style={{ color: 'white', fontSize: 16, }}> {currentDate.toString()} </Text>
                </TouchableOpacity>
                <Modal visible={showModal} transparent={true}>
                    <View style={{}}>
                        <TouchableOpacity activeOpacity={1.0} onPress={() => setShowModal(false)} style={{ height: '45%' }}>
                            <View style={{ height: '100%', width: '100%', backgroundColor: "transparent" }}>

                            </View>
                        </TouchableOpacity>
                        <View style={{ height: '55%', backgroundColor: 'white', flexDirection: 'column' }}>
                            <View style={{ backgroundColor: 'white', height: '92%', borderColor: 'transparent', borderWidth: 1, flexDirection: 'column' }}>
                                <CalendarPicker
                                    style={{ margin: 40, elevation: 4, borderRadius: 10, height: '50%' }}
                                    todayBackgroundColor="green"
                                    selectedDayColor="#87CEEB"
                                    selectedDayTextColor="#FFFFFF"
                                    onDateChange={onDateChange}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', height: '10%', transform: [{ translateY: -8 }] }}>
                                <TouchableOpacity onPress={() => setShowModal(false)} activeOpacity={1.0} style={styles.closeButton}><Text style={{ fontWeight: 'bold' }}>Close</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>

        {/* <View style={styles.input3}>
                    <View style={styles.calTextView}>
                    </View>
                    <TouchableOpacity activeOpacity={1} style={styles.calIconView}>
                        <Image style={styles.calIcon} source={require("../images/calanderIcon.png")} />
                    </TouchableOpacity>
                </View> */}
        {/* <View style={styles.input4}>
                    <View style={styles.calTextView}>
                    </View>
                    <TouchableOpacity activeOpacity={1} style={styles.calIconView}>
                        <Image style={styles.calIcon} source={require("../images/calanderIcon.png")} />
                    </TouchableOpacity>
                </View> */}


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

    return (
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
        width: '95%',
        height: 60,
        borderWidth: 1,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: '#303030',
        flexDirection: 'row',
    },

    detailText: {
        color: 'white',
        //
        //
        width: '35%',
        fontSize: 20,
        marginLeft: 5,
    },

    input: {
        height: '60%',
        width: '60%',
        borderWidth: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#525252',
        paddingLeft: 10,
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 5,
        textAlignVertical: 'center',
        fontSize: 16,
        alignContent: 'center',
        lineHeight: 10
    },

    input2: {
        height: '60%',
        width: '60%',
        borderWidth: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#525252',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        marginLeft: 5
    },

    input3: {
        height: '100%',
        alignSelf: 'center',
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        zIndex: 1,
        elevation: 1,
        borderRadius: 10,
    },

    input4: {
        height: '100%',
        alignSelf: 'center',
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'white',
        zIndex: 2,
        elevation: 2
    },

    calanderButton: {
        width: '100%',
        height: '100%',
        borderColor: 'blue'
    },

    scrollViewPick: {
        width: "55%",
        height: '65%',
        justifyContent: 'center',
        // borderWidth: 0.5, 
        // borderColor: 'white',
        marginBottom: 5,
        backgroundColor: "#303030"
    },

    dropdown: {
        height: '60%',
        width: '60%',
        borderWidth: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#525252',
        paddingLeft: 10,
        color: 'white',
        textAlign: 'center',
        marginLeft: 5
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

    calanderButton: {
        height: '100%',
        width: '100%',
        // borderWidth: 0.5, 
        // borderColor: 'black'
    },

    calIconView: {
        height: '80%',
        width: '20%',
        vIndex: 5
    },

    calanderView: {
        width: '100%'
    },

    calIcon: {
        height: '100%',
        width: '100%',
    },

    closeButton: {
        width: '100%',
        backgroundColor: 'red',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

