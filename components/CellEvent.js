import React, { useState } from 'react';
import { ScrollPicker } from 'react-native-value-picker';
import { Stylesheet, Text, View, TextInput, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker'
import CalendarPicker from 'react-native-calendar-picker';

export default function CellEvent({ detail, prop }) {

    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState.apply('');
    const [textDate, setTextDate] = React.useState('')
    const [currentDate, setCurrentDate] = React.useState("")
    const [showModal, setShowModal] = React.useState(false);
    const [output, setOutput] = useState("");
    const [date, setDate] = useState(new Date())
    const [pickedValue, setPickedValue] = useState();

    MOCK_DATA = [
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
        {
            value: 4,
            label: '4',
        },
        {
            value: 5,
            label: '5',
        },
        {
            value: 6,
            label: '6',
        },
        {
            value: 7,
            label: '7',
        },
        {
            value: 8,
            label: '8',
        },
        {
            value: 9,
            label: '9',
        },
        {
            value: 10,
            label: '10',
        },
        {
            value: 11,
            label: '11',
        },
        {
            value: 12,
            label: '12',
        },
        {
            value: 13,
            label: '13',
        },
        {
            value: 14,
            label: '14',
        },
        {
            value: 15,
            label: '15',
        },
        {
            value: 16,
            label: '16',
        },
        {
            value: 17,
            label: '17',
        },
        {
            value: 18,
            label: '18',
        },
        {
            value: 19,
            label: '19',
        },
        {
            value: 20,
            label: '20',
        },
        {
            value: 21,
            label: '21',
        },
        {
            value: 22,
            label: '22',
        },
        {
            value: 23,
            label: '23',
        },
        {
            value: 24,
            label: '24',
        },
        {
            value: 25,
            label: '25',
        },
        {
            value: 26,
            label: '26',
        },
        {
            value: 27,
            label: '27',
        },
        {
            value: 28,
            label: '28',
        },
        {
            value: 29,
            label: '29',
        },
        {
            value: 30,
            label: '30',
        },
        {
            value: 31,
            label: '31',
        },
        {
            value: 32,
            label: '32',
        },
        {
            value: 33,
            label: '33',
        },
        {
            value: 34,
            label: '34',
        },
        {
            value: 35,
            label: '35',
        },
        {
            value: 36,
            label: '36',
        },
        {
            value: 37,
            label: '37',
        },
        {
            value: 38,
            label: '38',
        },
        {
            value: 39,
            label: '39',
        },
        {
            value: 40,
            label: '40',
        },
        {
            value: 41,
            label: '41',
        },
        {
            value: 42,
            label: '42',
        },
        {
            value: 43,
            label: '43',
        },
        {
            value: 44,
            label: '44',
        },
        {
            value: 45,
            label: '45',
        },
        {
            value: 46,
            label: '46',
        },
        {
            value: 47,
            label: '47',
        },
        {
            value: 48,
            label: '48',
        },
        {
            value: 49,
            label: '49',
        },
        {
            value: 50,
            label: '50',
        },
        {
            value: 51,
            label: '51',
        },
        {
            value: 52,
            label: '52',
        },
        {
            value: 53,
            label: '53',
        },
        {
            value: 54,
            label: '54',
        },
        {
            value: 55,
            label: '55',
        },
        {
            value: 56,
            label: '56',
        },
        {
            value: 57,
            label: '57',
        },
        {
            value: 58,
            label: '58',
        },
        {
            value: 59,
            label: '59',
        },
        {
            value: 60,
            label: '60',
        },
    ]

    const [index, setIndex] = React.useState(0);
    const ref = React.useRef();
    const onValueChange = (data, selectedIndex) => {
        setIndex(selectedIndex);
    };

    function onDateChange(dateArg) {
        let tempDate = dateArg.toString()

        let dateList = (tempDate.toString()).split(" ");
        console.log(tempDate.toString())
        console.log(dateList);

        let timeList = dateList[4];
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
        let timeString = timeList.toString()
        let time = timeString.substring(0, 5)
        let normalFront = time.substring(0, 2)
        let intNormalFront = parseInt(normalFront)
        let ending = " AM"
        if (intNormalFront == 12) {
            ending = " PM"
        } else if (intNormalFront > 12) {
            intNormalFront -= 12
            ending = " PM"
            console.log("Come here!" + ending)
        } else if (intNormalFront == 0) {
            intNormalFront = 12
        }
        normalFront = intNormalFront.toString()
        let finalTime = normalFront + time.substring(2, 5)

        let finalDate = month + " " + dayList + ", " + year + " - " + finalTime + ending;
        setOutput(finalDate);
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
            <View style={styles.calanderView}>
                <TouchableOpacity onPress={() => setShowModal(true)} style={styles.input2}>
                    <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}> {pickedValue} </Text>
                </TouchableOpacity>
                <Modal visible={showModal} transparent={true}>
                    <View style={{}}>
                        <TouchableOpacity activeOpacity={1.0} onPress={() => setShowModal(false)} style={{ height: '60%' }}>
                            <View style={{ height: '100%', width: '100%', backgroundColor: "transparent" }}>

                            </View>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: '40%', borderTopLeftRadius: 40, borderTopRightRadius: 40, borderWidth: 1, borderColor: 'black' }}>
                            <ScrollPicker
                                currentValue={pickedValue}
                                extraData={pickedValue}
                                list={MOCK_DATA}
                                onItemPress={(d) => {
                                    setPickedValue(d)
                                    setShowModal(false)
                                }}
                                labelColor="black"
                                selectedColor="blue"
                            />
                        </View>
                    </View>
                </Modal>
            </View>

    } else if (prop == 'calander') {

        comp =
            <View style={styles.calanderView}>
                <TouchableOpacity onPress={() => setShowModal(true)} style={styles.input2}>
                    <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}> {output.toString()} </Text>
                </TouchableOpacity>
                <Modal visible={showModal} transparent={true}>
                    <View style={{}}>
                        <TouchableOpacity activeOpacity={1.0} onPress={() => setShowModal(false)} style={{ height: '60%' }}>
                            <View style={{ height: '100%', width: '100%', backgroundColor: "transparent" }}>

                            </View>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: '40%', borderTopLeftRadius: 40, borderTopRightRadius: 40, borderWidth: 1, borderColor: 'black' }}>
                            <DatePicker
                                date={date}
                                onDateChange={setDate}
                            />
                            <TouchableOpacity onPress={() => onDateChange(date)} style={{ marginTop: 25, backgroundColor: 'green', width: '75%', borderRadius: 40, paddingTop: 5, paddingBottom: 5 }}>
                                <Text style={{ fontSize: 20, color: 'black', textAlign: 'center' }}> Select </Text>
                            </TouchableOpacity>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
        width: '95%',
        height: 60,
        marginTop: 5,
        borderRadius: 10,
        backgroundColor: '#ededed',
        flexDirection: 'row',
    },

    detailText: {
        color: 'black',
        //
        //
        width: '35%',
        fontSize: 19,
        transform: [{ translateX: 5 }],
    },

    input: {
        height: '60%',
        width: '62%',
        borderWidth: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#525252',
        paddingLeft: 10,
        color: 'black',
        textAlign: 'center',
        marginLeft: 5,
        textAlignVertical: "center",
        paddingBottom: 0,
        paddingTop: 0,
        fontSize: 16,
        justifyContent: 'center',
        textAlign: 'center'
    },

    input2: {
        height: '60%',
        width: '62%',
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
        color: 'black',
        textAlign: 'center',
        marginLeft: 5,
        alignContent: 'center',
        justifyContent: 'center'
    },

    selectedTextStyle: {
        fontSize: 16,
        color: "black",
        textAlign: 'center'
    },

    placeholderStyle: {
        fontSize: 16,
        color: "black",
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

