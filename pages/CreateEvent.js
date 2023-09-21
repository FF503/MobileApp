import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import CellEvent from '../components/CellEvent';

export default function CreateEvent() {

    return(
        <View style={styles.container}>
            <View style={styles.eventCont}>
                <Text style={styles.eventText}> Create Event</Text>
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
                <CellEvent detail='Date:' prop='input'>
                    
                </CellEvent>
                <CellEvent detail='Event Type:' prop='dropdown'>
                    
                </CellEvent>
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
        marginTop: 10, 
        height: 60, 
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    eventText: {
        fontSize: 40, 
        color: 'black',
    }, 

    cellCont: {
        width: '100%', 
        alignItems: 'center', 
        marginTop: 10, 
        //
        //
        height: '50%'
    },
});
