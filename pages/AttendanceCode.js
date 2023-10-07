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
//import { Table, Row, Rows, Col, TableWrapper } from 'react-native-table-component';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-reanimated-table';
import ProgressCircle from 'react-native-progress-circle'

//import {CameraKitCameraScreen} from 'react-native-camera-kit';
//import { CameraScreen } from 'react-native-camera-kit';

const AttendanceCode = () => {

  const [button, setdb] = useState([false, false, false, false, false, false, false]);
  //require("../images/arrow.png")
  const dropdownTitle = (props, v) => {
    return (
      <SafeAreaView>
        <View>
          <TouchableOpacity
            style={{}}
            onPress={async () => {
              let tempDb = button
              console.log(button[0])
              tempDb[0] = tempDb[0] ? false : true;
              setdb(tempDb)
              console.log("tempDb = " + tempDb)
            }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[styles.text, { width: '70%' }]}>{props}</Text>
              {button[0] ? (<Image style={{ width: 15, height: 15, borderColor: 'black' }} source={require("../images/upArrow.png")} />
              ) : (<View></View>)}
              {button[0] ? (<View></View>
              ) : (<Image style={{ width: 15, height: 15, borderColor: 'black' }} source={require("../images/arrow.png")} />)}
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }

  const [qrvalue, setQrvalue] = useState('');
  const [opneScanner, setOpneScanner] = useState(false);
  const [number, onChangeNumber] = useState('');
  const [data, setData] = useState({
    tableHead: ['Requirement', 'Goal', 'Attended', 'Possible', 'Percent', 'Status'],
    tableTitle: [dropdownTitle('Team Meeting', 0), dropdownTitle('FIRST \nWorkshops', 1), dropdownTitle('Community Outreach', 2), dropdownTitle('Community Service', 3), dropdownTitle('Off Season Competition', 4), dropdownTitle('YPP Training', 5), dropdownTitle('Saftey Training', 6)],
    //flexArray: [75, 25, 55, 10, 90, 90, 75],
    flexArray: [1, 1, 1, 1, 1, 1, 1],
    flexArray2: [48, 13, 20, 20, 20, 50],
    widthArray: [130, 80, 80, 80, 90, 85,],
    widthArray2: [80, 80, 80, 90, 85,],
    tableData: [
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
    ],
    tableData1: [
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
    ],
    tableData2: [
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
    ],
    tableData3: [
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
    ],
    tableData4: [
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
    ],
    tableData5: [
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
    ],
    tableData6: [
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
    ],
    tableData7: [
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
      ['1', '2', '3', '4', '5'],
    ],
    tableTitle1: ["", "", "", "", "", "", ""],
  })

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
          {/* <CameraScreen
            // Barcode props
            scanBarcode={true}
            onReadCode={(event) => onBarcodeScan(event.nativeEvent.codeStringValue)} // optional
            showFrame={true} // (default false) optional, show frame with transparent layer (qr code or barcode will be read on this area ONLY), start animation for scanner,that stoped when find any code. Frame always at center of the screen
            laserColor='red' // (default red) optional, color of laser in scanner frame
            frameColor='white' // (default white) optional, color of border of scanner frame
          /> */}
          <Text>Why did this work</Text>
        </View>
      ) : (
        <ScrollView>
          <View>
            <TouchableOpacity
              style={{}}
              onPress={async () => {
                let tempDb = button
                console.log(button[0])
                tempDb[0] = tempDb[0] ? false : true;
                setdb(tempDb)
                console.log("tempDb = " + tempDb)
              }}
            >
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[styles.text, { width: '70%' }]}>text</Text>
                {button[0] ? (<Image style={{ width: 15, height: 15, borderColor: 'black' }} source={require("../images/upArrow.png")} />) :
                  (<Image style={{ width: 15, height: 15, borderColor: 'black' }} source={require("../images/arrow.png")} />)}
                {/* <Image style={{ width: 15, height: 15, borderColor: 'black' }} source={require("../images/arrow.png")} /> */}
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'column', margin: 10 }}>
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ flex: 3.6, fontSize: 35, color: 'black' }}>Attendance</Text>
              <TouchableOpacity style={{ flex: 1 }}
                onPress={async () => {
                  setOpneScanner(true)
                }}
              >
                <Image style={{ width: 50, height: 50 }} source={require("../images/cameraIconPink.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ height: 10 }}></View>
            <View style={{ flexDirection: 'row', }}>
              <TextInput
                style={[styles.input, { flex: 2 }]}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="useless placeholder"
                keyboardType="numeric"
              />
              <View style={{ flex: 0.5 }}></View>
              <TouchableOpacity style={{ flex: 1, borderWidth: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
                <Text style={{ color: 'black', fontSize: 20 }}>Submit</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 10 }}></View>
            <Text style={{ fontSize: 35, color: 'black' }}>Roster Requirements</Text>
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Name: </Text>
              <Text style={{ fontSize: 20, color: 'black' }}>Anish Manda</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black' }}>Assigned Group: </Text>
              <Text style={{ fontSize: 20, color: 'black' }}>Quit Robotics I think</Text>
            </View>
            <View style={{ height: 10 }}></View>
            <View style={styles.circle}>
              <ProgressCircle
                percent={48}
                radius={100}
                borderWidth={8}
                color="#3399FF"
                shadowColor="#999"
                bgColor="#fff">
                <Text style={{ fontSize: 22, color: 'black' }}>{'48% Complete'}</Text>
              </ProgressCircle>
            </View>
            <ScrollView horizontal={true}>
              <View>
                <Table borderStyle={{ borderWidth: 1, borderColor: '' }}>
                  <Row data={data.tableHead} style={[styles.head, { backgroundColor: 'pink' }]} height={43} widthArr={data.widthArray} textStyle={styles.text} />
                  <TableWrapper style={styles.wrapper}>
                    <Col data={data.tableTitle} style={styles.title} width={130} heightArr={[43, 43, 43, 43, 43, 43, 43]} textStyle={styles.text} />
                    <Rows data={data.tableData} style={styles.row} height={43} widthArr={data.widthArray2} textStyle={styles.text} />
                  </TableWrapper>
                </Table>

              </View>
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};
//textStyle={styles.text}
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
  // textStyle: {
  //   color: 'black',
  //   fontSize: 16,
  //   textAlign: 'center',
  //   padding: 10,
  //   marginTop: 16,
  // },
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
  circle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25
  },
  container: { flex: 1, padding: 16, paddingTop: 30 },
  row: { backgroundColor: '' },
  head: { backgroundColor: '', },
  text: { margin: 2, color: 'black', fontSize: 15, textAlign: 'center' },
  wrapper: { flexDirection: 'row' },
  dataWrapper: { marginTop: -1 },
});

export default AttendanceCode;