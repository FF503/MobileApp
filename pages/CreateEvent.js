import React from 'react'
import { Stylesheet, Text, View, TextInput, StyleSheet, Image, TouchableOpacity, Modal, Dimensions } from 'react-native';
import CellEvent from '../components/CellEvent';

export default function CreateEvent() {

    const CreateEventButton = () => {
        return (
            <TouchableOpactity>
                <Text>Create Event</Text>
            </TouchableOpactity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.eventCont}>
                <Text style={styles.eventText}> Create Event: </Text>
            </View>
            <View style={styles.cellCont}>
                <CellEvent detail='Event Name:' prop='input'>

                </CellEvent>
                <CellEvent detail='Location:' prop='input'>

                </CellEvent>
                <CellEvent detail='Open Seats:' prop='scroll'>

                </CellEvent>
                <CellEvent detail='Student Lead:' prop='input'>

                </CellEvent>
                <CellEvent detail='Mentor Lead:' prop='input'>

                </CellEvent>
                <CellEvent detail='Start Date:' prop='calander'>

                </CellEvent>
                <CellEvent detail='End Date:' prop='calander'>

                </CellEvent>
                <CellEvent detail='Event Type:' prop='dropdown'>

                </CellEvent>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: '#ec2578', justifyContent: 'center', alignItems: 'center', width: (Dimensions.get('window'). width) * 9.5/10, height: (Dimensions.get('window').height)/20, marginTop: 10 }}>
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}> Create Event </Text>
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
