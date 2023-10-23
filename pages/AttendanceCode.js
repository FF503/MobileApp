import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import Accordion from 'react-native-collapsible/Accordion';

export default class ExampleOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSections: [],
      section: [
        {
          tableHead: ['this is my drop table'],
          tableData: [['1', '2'], ['a', 'b'], ['1', '2'], ['a', 'b']],
        },
      ],
    };
  }

  renderHeader = section => {
    console.log('state', section);
    let index = this.state.activeSections[0];
    let currentObj = this.state.section[index];
    return (
      <View style={styles.header}>
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

  renderContent = section => {
    return (
      <View style={styles.content}>
        <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
          <Rows data={section.tableData} textStyle={styles.text} />
        </Table>
      </View>
    );
  };

  updateSections = activeSections => {
    this.setState({ activeSections });
  };

  render() {
    return (
      <Accordion
        sections={this.state.section}
        activeSections={this.state.activeSections}
        renderHeader={this.renderHeader}
        renderContent={this.renderContent}
        onChange={this.updateSections}
        duration={500}
        underlayColor="#fff"
      />
    );
  }
}

const styles = StyleSheet.create({
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
    marginTop: 30,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '92%',
    borderWidth: 2,
    borderColor: '#c8e1ff',
    alignSelf: 'center',
  },
});