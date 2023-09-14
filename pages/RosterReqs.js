import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import ProgressCircle from 'react-native-progress-circle'
import { Table, Row, Rows, Col, TableWrapper } from 'react-native-table-component';
import {ExpandableListView} from 'react-native-expandable-listview';


const RosterReqs = () => {

    const CONTENT = [
        {
          id: '42',
          categoryName: 'Item 1',
          subCategory: [
            {
              id: '1',
              name:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
            },
            {id: '2', name: 'Sub Item 2'},
          ],
        },
        {
          id: '95',
          categoryName: 'Item 2',
          subCategory: [{id: '1', name: 'Sub Item 1'}],
        },
        {
          id: '94',
          categoryName: 'Item 3',
          subCategory: [{id: '1', name: 'Sub Item 1'}],
        },
        {
          id: '93',
          categoryName: 'Item 4',
          subCategory: [{id: '1', name: 'Sub Item 1'}],
        },
        {
          id: '92',
          categoryName: 'Item 5',
          subCategory: [{id: '1', name: 'Sub Item 1'}],
        },
        {
          id: '96',
          categoryName: 'Item 6',
          subCategory: [{id: '1', name: 'Sub Item 1'}],
        },
      ];

        function handleItemClick({index}) {
          console.log(index);
        };
      
        function handleInnerItemClick({innerIndex, item, itemIndex}) {
          console.log(innerIndex);
        };
//'            '
    state = {
        tableHead: ['', 'Requirement', 'Goal', 'Attended', 'Possible', 'Percent', 'Status'],
        tableTitle: ['Title', 'Title2', 'Title3', 'Title4', 'Title5', 'Title6', 'Title7', 'Title8', 'Title9', 'Title10'],
        //flexArray: [75, 25, 55, 10, 90, 90, 75],
        flexArray: [1, 1, 1, 1, 1, 1, 1],
        flexArray2: [48, 13, 20, 20, 20, 50],
        widthArray: [80, 130, 55, 100, 90, 85, 70],
        widthArray2: [130, 55, 100, 90, 85, 70],
        tableData: [
          ['1', '2', '3', '4', '5', '6'],
          ['1', '2', '3', '4', '5', '6'],
          ['1', '2', '3', '4', '5', '6'],
          ['1', '2', '3', '4', '5', '6'],
          ['1', '2', '3', '4', '5', '6'],
          ['1', '2', '3', '4', '5', '6'],
          ['1', '2', '3', '4', '5', '6'],
          ['1', '2', '3', '4', '5', '6'],
          ['1', '2', '3', '4', '5', '6'],
          ['1', '2', '3', '4', '5', '6'],
        ]
      }

    return(
        <View style={styles.containerMain}>
        <ScrollView>
            <View>
                <Text style={styles.h1}>Roster Requirements Status</Text>
                <Text style={styles.h2}>For Nirvan Daram</Text>
                <View style={styles.circle}>
                    <ProgressCircle
                        percent={75}
                        radius={100}
                        borderWidth={8}
                        color="#3399FF"
                        shadowColor="#999"
                        bgColor="#fff"
                    >
                        <Text style={{ fontSize: 22, color: 'black' }}>{'75% Complete'}</Text>
                    </ProgressCircle>
                </View>
                
                <ScrollView horizontal={true}>
                    <View>
                      <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                        <Row data={state.tableHead} style={styles.head} widthArr={state.widthArray} textStyle={styles.text}/>   
                        <TableWrapper style={styles.wrapper}>
                            <Col data={state.tableTitle} style={styles.title} width={80} textStyle={styles.text}/>
                            <Rows data={state.tableData} style={styles.row} widthArr={state.widthArray2} textStyle={styles.text}/>  
                        </TableWrapper>
                    </Table> 
                    </View>
                </ScrollView>
        
                <ExpandableListView
                    data={CONTENT} // required
                    onInnerItemClick={handleInnerItemClick}
                    onItemClick={handleItemClick}
                />
            </View>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    h1: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 5,
    },
    h2: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 5,
    },
    circle: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
        marginBottom: 25
    },
    container: { flex: 1, padding: 16, paddingTop: 30 },
    row: { height: 40, backgroundColor: 'lightblue' },
    head: { height: 40, backgroundColor: 'lightblue' },
    text: { margin: 6, color: 'black', fontSize: 20 },
    wrapper: { flexDirection: 'row' },
    dataWrapper: { marginTop: -1 },
})

export default RosterReqs;