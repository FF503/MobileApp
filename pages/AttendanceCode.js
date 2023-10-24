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
  Dimensions
} from 'react-native';
//import { Table, Row, Rows, Col, TableWrapper } from 'react-native-table-component';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-reanimated-table';
import ProgressCircle from 'react-native-progress-circle'
import Accordion from 'react-native-collapsible/Accordion';
//import DataTable from 'react-data-table-component';

//import {CameraKitCameraScreen} from 'react-native-camera-kit';
//import { CameraScreen } from 'react-native-camera-kit';

const AttendanceCode = () => {

  const [button, setdb] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [b1, setB1] = useState(1);
  //require("../images/arrow.png")
  const dropdownTitle = (props, v) => {
    return (
      <SafeAreaView>
        <View>
          <TouchableOpacity
            style={{}}
            onPress={async () => {
              let temp = b1
              if (temp[v] == 0) {
                temp[v] = 1
              } else {
                temp[v] = 0
              }
              setB1(temp)
              console.log(temp)
            }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={[styles.text, { width: '90%', color: 'black', fontWeight: 'bold' }]}>{props}</Text>
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
    tableHead: ['', 'Requirement', 'Goal', 'Attended', 'Possible', 'Percent', 'Status'],
    tableTitle: [[dropdownTitle('Team Meeting', 0)], [dropdownTitle('FIRST \nWorkshops', 1)], [dropdownTitle('Community Outreach', 2)], [dropdownTitle('Community Service', 3)], [dropdownTitle('Off Season Competition', 4)], [dropdownTitle('YPP Training', 5)], [dropdownTitle('Saftey Training', 6)]],
    //flexArray: [75, 25, 55, 10, 90, 90, 75],
    flexArray: [1, 1, 1, 1, 1, 1, 1],
    flexArray2: [48, 13, 20, 20, 20, 50],
    widthArray: [130, 90, 90, 90, 100, 90,],
    widthArray2: [80, 80, 80, 90, 85,],
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
  const [list, setList] = useState(
    {
      section: [
        {
          tableHead: ['', 'Requirement', 'Goal', 'Attended', 'Possible', 'Percent', 'Status'],
          tableData: [['1', '2', '1', '2','1', '2'], ['1', '2', '1', '2','1', '2'], ['1', '2', '1', '2','1', '2'], ['1', '2', '1', '2','1', '2']],
          tableTitle: ['Team Meeting']
        },
        {
          tableHead: ['', 'Requirement', 'Goal', 'Attended', 'Possible', 'Percent', 'Status'],
          tableData: [['1', '2', '1', '2','1', '2'], ['1', '2', '1', '2','1', '2'], ['1', '2', '1', '2','1', '2'], ['1', '2', '1', '2','1', '2']],
          tableTitle: ['Outreach']
        },
      ]
    }
  )
  const [activeSections, setActiveSections] = useState([])

  const renderHeader = section => {
    console.log('state', section);
    let index = activeSections[0];
    let currentObj = list.section[index];
    return (
      <View style={styles.header}>
        <View>

        </View>
        <Text>{section.tableHead}</Text>

        <Image
          style={{ height: 25, width: 25 }}
          source={
            currentObj == section
              ? {
                uri:
                  'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-512.png',
              }
              : {
                uri:
                  'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-512.png',
              }
          }
        />
      </View>
    );
  };

  const renderContent = section => {
    return (
      <View style={styles.content}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Rows data={section.tableData} textStyle={styles.text} />
        </Table>
      </View>
    );
  };

  const updateSections = activeSections2 => {
    console.log(activeSections2)
    let temp = activeSections2
    console.log(temp)
    setActiveSections(temp)
    //setActiveSections({ activeSections2 });
  };
  return (
    <SafeAreaView style={{}}>
      <ScrollView>
        <View>

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
            {/* <View>
              <Table borderStyle={{ borderWidth: 1, borderColor: '' }}>
                <Row data={data.tableHead} style={[styles.head, { backgroundColor: 'pink' }]} height={43} widthArr={data.widthArray} textStyle={styles.text} />
                <TableWrapper style={styles.wrapper}>
                  <Col data={data.tableTitle[0]} style={styles.title} width={130} heightArr={[43, 43, 43, 43, 43, 43, 43]} textStyle={styles.text} />
                  <Rows data={data.tableData} style={styles.row} height={43} widthArr={data.widthArray2} textStyle={styles.text} />
                </TableWrapper>
                <Rows data={data.tableData1} style={[styles.row, { backgroundColor: 'lightgrey'}]} height={43} widthArr={data.widthArray} textStyle={styles.text} />
              </Table>
            </View> */}
            <View style={{}}>
            <Row data={data.tableHead} style={[styles.head, { backgroundColor: 'pink' }]} height={43} widthArr={data.widthArray} textStyle={styles.text} />
              <Accordion
                sections={list.section}
                activeSections={activeSections}
                renderHeader={renderHeader}
                renderContent={renderContent}
                onChange={updateSections}
                duration={500}
                underlayColor="#fff"
              />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      {/* )} */}
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
  // container: { flex: 1, padding: 16, paddingTop: 30 },
  // row: { backgroundColor: '' },
  // head: { backgroundColor: '', },
  // text: { margin: 2, color: 'black', fontSize: 15, textAlign: 'center' },
  // wrapper: { flexDirection: 'row' },
  // dataWrapper: { marginTop: -1 },
  text: { padding: 6 },
  content: {
    backgroundColor: '#FFFFFF',
    marginTop: 5,
    width: '92%',
    borderTopColor: '#E9E9E9',
    borderTopWidth: 1,
    alignSelf: 'center',
  },
  header: {
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderWidth: 2,
    borderColor: '#c8e1ff',
    alignSelf: 'center',
  },
});

export default AttendanceCode;