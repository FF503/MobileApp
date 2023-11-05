import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Linking,
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
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-reanimated-table';
import ProgressCircle from 'react-native-progress-circle'
import Accordion from 'react-native-collapsible/Accordion';
import { useCameraDevices } from 'react-native-vision-camera';
import { Camera } from 'react-native-vision-camera';
import { useScanBarcodes, BarcodeFormat } from 'vision-camera-code-scanner';

const AttendanceCode = () => {
  const [qrvalue, setQrvalue] = useState('');
  const [opneScanner, setOpneScanner] = useState(false);
  const [number, onChangeNumber] = useState('');
  const [tableData, setTableData] = useState({
    tableHead: ['', 'Requirement', 'Goal', 'Attended', 'Possible', 'Percent', 'Status'],
    tableHead2: ['Event Date', 'Event Title', 'Cutoff Time', 'Checkin Time', 'Attended'],
    widthArray: [130, 100, 50, 80, 80, 80,],
    widthArray2: [104, 104, 104, 104, 104],
    widthArray3: [100, 50, 80, 80, 80,],
  })
  const [list, setList] = useState(
    {
      section: [
        {
          tableTitle: ['Team Meeting'],
          tableHead: [['1', '1', '1', '1', '1', '1']],
          tableData: [['1', '2', '1', '2', '1', '2'], ['1', '2', '1', '2', '1', '2'], ['1', '2', '1', '2', '1', '2'], ['1', '2', '1', '2', '1', '2']],
        },
        {
          tableTitle: ['Community Outreach'],
          tableHead: [['2', '2', '2', '2', '2', '2']],
          tableData: [['1', '2', '1', '2', '1', '2'], ['1', '2', '1', '2', '1', '2'], ['1', '2', '1', '2', '1', '2'], ['1', '2', '1', '2', '1', '2']],
        },
      ]
    }
  )
  const [activeSections, setActiveSections] = useState([])

  const renderHeader = section => {
    let index = activeSections[0];
    let currentObj = list.section[index];
    return (
      <View style={styles.header}>
        <View>
          <View style={{}}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
              <TableWrapper style={{ flexDirection: 'row' }}>
                <Col data={[(
                  <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <View style={{ width: '80%' }}>
                      <Text style={[styles.text, { fontWeight: 'bold' }]}>{section.tableTitle}</Text>
                    </View>
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
                  </View>)]} style={styles.title} width={130} heightArr={[43]} textStyle={styles.text} />
                <Row data={section.tableHead[0]} textStyle={styles.text} widthArr={tableData.widthArray3} height={43} />
              </TableWrapper>
            </Table>
          </View>
        </View>
      </View>
    );
  };

  const renderContent = section => {
    return (
      <View style={styles.content}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Row data={tableData.tableHead2} textStyle={[styles.text, { fontWeight: 'bold' }]} widthArr={tableData.widthArray2} height={43} />
          <Rows data={section.tableData} textStyle={styles.text} widthArr={tableData.widthArray2} />
        </Table>
      </View>
    );
  };

  const updateSections = activeSections2 => {
    let temp = activeSections2
    setActiveSections(temp)
  };

  const [hasPermission, setHasPermission] = React.useState(false);
  const devices = useCameraDevices();
  const device = devices.back;

  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.QR_CODE], {
    checkInverted: true,
  });

  // Alternatively you can use the underlying function:
  //
  // const frameProcessor = useFrameProcessor((frame) => {
  //   'worklet';
  //   const detectedBarcodes = scanBarcodes(frame, [BarcodeFormat.QR_CODE], { checkInverted: true });
  //   runOnJS(setBarcodes)(detectedBarcodes);
  // }, []);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'authorized');
    })();
  }, []);

  return (
    <SafeAreaView style={{}}>
      {opneScanner && device != null && hasPermission ? (
        <>
          <Camera
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            frameProcessor={frameProcessor}
            frameProcessorFps={5}
          />
          {barcodes.map((barcode, idx) => (
            <Text key={idx} style={styles.barcodeTextURL}>
              {barcode.displayValue}
            </Text>
          ))}
        </>
      ) : (
        <ScrollView>
          <View style={{ width: Dimensions.get('window').width, marginTop: 10 }}>
            <View style={{ flexDirection: 'row', width: Dimensions.get('window').width - 10, justifyContent: 'space-between', marginLeft: 10 }}>
              <Text style={{ fontSize: 35, color: 'black' }}>Attendance</Text>
              <TouchableOpacity style={{ marginRight: 5 }}
                onPress={async () => {
                  setOpneScanner(true)
                }}
              >
                <Image style={{ width: 50, height: 50 }} source={require("../images/cameraIconPink.png")} />
              </TouchableOpacity>
            </View>
            <View style={{ height: 10 }}></View>
            <View style={{ flexDirection: 'row', width: Dimensions.get('window').width, justifyContent: 'space-between' }}>
              <TextInput
                style={[styles.input, { marginLeft: 10 }]}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Attendance Code"
                keyboardType="numeric"
              />
              <TouchableOpacity style={{ borderWidth: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink', marginRight: 10 }}>
                <Text style={{ color: 'black', fontSize: 20, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10 }}>Submit</Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 10 }}></View>
            <Text style={{ fontSize: 35, color: 'black', marginLeft: 10 }}>Roster Requirements</Text>
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', marginLeft: 10 }}>Name: </Text>
              <Text style={{ fontSize: 20, color: 'black' }}>Anish Manda</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', marginLeft: 10 }}>Assigned Group: </Text>
              <Text style={{ fontSize: 20, color: 'black' }}>{qrvalue}</Text>
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
              <View style={{ marginLeft: 10, marginRight: 10 }}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff', padding: 2 }}>
                  <Row data={tableData.tableHead} textStyle={[styles.text, { fontWeight: 'bold' }]} widthArr={tableData.widthArray} height={43} />
                </Table>
                <Accordion
                  sections={list.section}
                  activeSections={activeSections}
                  renderHeader={renderHeader}
                  renderContent={renderContent}
                  onChange={updateSections}
                  duration={500}
                  underlayColor="#fff"
                  containerStyle={{ marginLeft: 0 }}
                />
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
    borderWidth: 1,
    padding: 10,
    width: Dimensions.get('window').width * .6
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
    marginBottom: 25
  },
  text: { padding: 2.5, color: 'black', justifyContent: 'center', textAlign: 'center' },
  content: {
    backgroundColor: '#FFFFFF',
    marginTop: 1,
    width: '100%',
    borderTopColor: '#E9E9E9',
    borderTopWidth: 1,
    alignSelf: 'center',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 2,
    paddingBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'center',
  },
});

export default AttendanceCode;