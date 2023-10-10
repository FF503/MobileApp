import {StyleSheet, Dimensions} from 'react-native';
import {color} from 'react-native-reanimated';

export const COLORS = {
  primaryDark: '#22212c',
  primaryLight: '#000000',
  primaryPink: '#ff80bf',
  secondaryDark: '#ff80bf',
  secondaryLight: '#ffffff',
  secondaryPink: '#22212c',
  tertiaryDark: '#ffffff',
  tertiaryLight: '#ff80bf',
  tertiaryPink: '#000000',
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
    color: COLORS.primaryLight,
    fontWeight: 'bold',
    left: 20,
    top: 20,
    marginBottom: 20,
  },
  shopCard: {
    width: (Dimensions.get('window').width - 40) / 2,
    height: 100,
    backgroundColor: COLORS.secondaryLight,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopText: {
    fontSize: 20,
    color: COLORS.primaryLight,
    alignContent: 'center',
    textAlign: 'center',
  },
});
