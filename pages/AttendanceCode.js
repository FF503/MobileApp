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
  TextInput
} from 'react-native';

//import {CameraKitCameraScreen} from 'react-native-camera-kit';
//import { CameraScreen } from 'react-native-camera-kit';

const AttendanceCode = () => {
  const [qrvalue, setQrvalue] = useState('');
  const [opneScanner, setOpneScanner] = useState(false);
  const [number, onChangeNumber] = useState('');

  const onOpenlink = () => {
    // If scanned then function to open URL in Browser
    Linking.openURL(qrvalue);
  };

  // const onBarcodeScan = (qrvalue) => {
  //   // Called after te successful scanning of QRCode/Barcode
  //   setQrvalue(qrvalue);
  //   setOpneScanner(false);
  // };

  const onBarcodeScan = (qrvalue) => {
    // Called after te successful scanning of QRCode/Barcode
    setQrvalue(qrvalue);
    setOpneScanner(false);

    Alert.alert(
      "Your attendance has been recoreded",
      "",
      [
        {
          text: "Ok",
          style: "ok",
        },
      ],
    );
  };

  const onOpneScanner = () => {
    // To Start Scanning
    if (Platform.OS === 'android') {
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs permission for camera access',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // If CAMERA Permission is granted
            setQrvalue('');
            setOpneScanner(true);
          } else {
            alert('CAMERA permission denied');
          }
        } catch (err) {
          alert('Camera permission err', err);
          console.warn(err);
        }
      }
      // Calling the camera permission function
      requestCameraPermission();
    } else {
      setQrvalue('');
      setOpneScanner(true);
    }
  };

  return (
    <SafeAreaView style={{}}>
      {opneScanner ? (
        <View style={{ flex: 1 }}>
          <CameraScreen
            // Barcode props
            scanBarcode={true}
            onReadCode={(event) => onBarcodeScan(event.nativeEvent.codeStringValue)} // optional
            showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
            laserColor='red' // (default red) optional, color of laser in scanner frame
            frameColor='white' // (default white) optional, color of border of scanner frame
          />
        </View>
      ) : (
        // <View style={styles.container}>
        //   <View style={{flexDirection: 'row'}}>
        //     <Text style={styles.titleText}>Attendance</Text>
        //     {/* <TouchableOpacity>
        //       <Image source={require("../images/cameraIconPink.png")}/>
        //     </TouchableOpacity> */}
        //   </View>
        //   {/* <TouchableHighlight
        //     onPress={onOpneScanner}
        //     style={styles.buttonStyle}>
        //     <Text style={styles.buttonTextStyle}>
        //       Scan Again?
        //     </Text>
        //   </TouchableHighlight> */}
        // </View>
        <View style={{ flexDirection: 'column', margin: 10, flex: 1 }}>
          <View style={{ flexDirection: 'row', flex: 2}}>
            <Text style={{ flex: 3, fontSize: 35, color: 'black' }}>Attendance</Text>
            <TouchableOpacity style={{ flex: 1 }}>
              <Image style={{ width: 50, height: 50 }} source={require("../images/cameraIconPink.png")} />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', flex: 3}}>
            <TextInput
              style={[styles.input, {flex: 2}]}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="useless placeholder"
              keyboardType="numeric"
            />
            <View style={{flex: 0.5}}></View>
            <TouchableOpacity style={{ flex: 1, borderWidth: 1}}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: 'white',
    //padding: 10,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    marginTop: 16,
  },
  buttonStyle: {
    fontSize: 16,
    color: 'white',
    backgroundColor: 'green',
    padding: 5,
    minWidth: 250,
  },
  buttonTextStyle: {
    padding: 5,
    color: 'white',
    textAlign: 'center',
  },
  textLinkStyle: {
    color: 'blue',
    paddingVertical: 20,
  },
  input: {
    height: 40,
    //margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AttendanceCode;