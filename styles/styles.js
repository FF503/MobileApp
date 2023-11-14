import {StyleSheet, Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';

export const COLORS = {
  primaryDark: '#22212c',
  primaryLight: '#f8f8f2',
  primaryPink: '#ff80bf',
};

//to be changed but please use these and add as needed
export const STYLES = StyleSheet.create({
  flex: {
    flex: 1,
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    marginLeft: 20,
    color: 'black',
  },
  heading: {
    fontSize: 25,
  },
  shopCard: {
    backgroundColor: '#D9D9D9',
    marginLeft: 20,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    width: Dimensions.get('window').width / 2 - 30,
    height: 200,
  },
  shopBuyBtn: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#EC2578',
    textAlign: 'center',
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  shopCardButtonText: {
    fontSize: 25,
    textAlign: 'center',
  },
});
