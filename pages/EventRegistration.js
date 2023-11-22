import React, { useState } from 'react';
import { Stylesheet, Text, View, TextInput, StyleSheet, Image, TouchableOpacity, Modal, Dimensions } from 'react-native';
import CellEvent from '../components/CellEvent';
import QRCodeIcon from '../images/qrCodeIcon.png';
import { COLORS } from '../styles/styles';

export default function EventRegistration() {

    const [qrModal, setQRModal] = React.useState(false);

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center', height: (Dimensions.get("window").height) * 0.1, width: '100%', flexDirection: 'row' }}>
                <View style={styles.eventCont}>
                    <Text style={styles.eventText}> Event Details: </Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setQRModal(true)
                    }}
                    activeOpacity={1.0}
                    style={styles.eventCont2}>
                    <Image style={{ width: '70%', height: '70%' }} source={QRCodeIcon} />
                </TouchableOpacity>
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
                <Modal visible={qrModal} transparent={true}>
                    <View style={{}}>
                        <TouchableOpacity activeOpacity={1.0} onPress={() => setQRModal(false)} style={{ height: '90%' }}>
                            <View style={{ height: '100%', width: '100%', backgroundColor: "transparent" }}>

                            </View>
                        </TouchableOpacity>
                        <View style={{ backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: '10%', borderTopLeftRadius: 40, borderTopRightRadius: 40, borderWidth: 1, borderColor: 'black', flexDirection: 'row' }}>
                            <Image style={{ width: (Dimensions.get("window").height) * 0.075, height: (Dimensions.get("window").height) * 0.075 }} source={QRCodeIcon} />
                            <Text style={{ color: 'red', fontSize: 40 }} > 503156 </Text>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity style={{ borderRadius: 10, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center', width: (Dimensions.get('window').width) * 4.5 / 10, height: (Dimensions.get('window').height) / 16, marginTop: 15 }}>
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center' }}> Register </Text>
                </TouchableOpacity>
            </View>

        </View>
    );


}

const styles = StyleSheet.create({
    eventCont: {
        height: '100%',
        width: '80%',
        alignItems: 'left',
        justifyContent: 'center',
    },

    eventCont2: {
        height: '100%',
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    eventText: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },

    cellCont: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
        height: '70%',
    }
});
