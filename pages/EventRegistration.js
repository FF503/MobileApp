import React from 'react'
import { Stylesheet, Text, View, TextInput, StyleSheet, Image, TouchableOpacity, Modal, Dimensions } from 'react-native';
import CellEvent from '../components/CellEvent';

export default function EventRegistration() {

    return (
        <View style={styles.container}>
            <View style={styles.eventCont}>
                <Text style={styles.eventText}> Create Event: </Text>
            </View>
            <View style={styles.cellCont}>
                <CellEvent detail='Event Name:' prop='display' propValue='Friends of the Rouge'>

                </CellEvent>
                <CellEvent detail='Location:' prop='display' propValue='Ishaan Sid Backyard'>

                </CellEvent>
                <CellEvent detail='Open Seats:' prop='display' propValue='100'>

                </CellEvent>
                <CellEvent detail='Student Lead:' prop='display' propValue='Ishaan Sid'>

                </CellEvent>
                <CellEvent detail='Mentor Lead:' prop='display' propValue='Rakesh Sid+smt'>

                </CellEvent>
                <CellEvent detail='Start Date:' prop='display' propValue='December 25, 2023 - 3:00 AM'>

                </CellEvent>
                <CellEvent detail='End Date:' prop='display' propValue='December 26, 2023 - 1:00 AM'>

                </CellEvent>
                <CellEvent detail='Event Type:' prop='display' propValue='Community Service'>

                </CellEvent>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#ec2578', justifyContent: 'center', alignItems: 'center', width: (Dimensions.get('window').width) * 4.5 / 10, height: (Dimensions.get('window').height) / 16, marginTop: 15 }}>
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}> Register </Text>
                </TouchableOpacity>
            </View>

        </View>
    );


}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
    },

    eventCont: {
        marginTop: 20,
        height: 40,
        width: '100%',
        alignItems: 'left',
        justifyContent: 'left',
        marginLeft: 10,
    },

    eventText: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },

    cellCont: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'column',
        height: '70%',
    }
});
