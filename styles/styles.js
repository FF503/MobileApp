import { StyleSheet,Dimensions } from 'react-native';

export const COLORS = {
  primary: "#EC2578",
  background:"#FFEEDA",
  white:"#ffffff",
  secondary:"#000000",
  textGray: '#646464',
  lightBackground:'#E2E2E2'
};

//to be changed but please use these and add as needed
export const STYLES = StyleSheet.create({
  flex: {
    flex: 1
  },
  centerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 40,
    color: COLORS.secondary,
  },
  heading: {
    fontSize: 30, 
    color:COLORS.secondary,
  },
  textBlack: {
    //values to be changed
    fontSize: 20, 
    color: COLORS.secondary,
  },
  textPink:{
    fontSize: 20, 
    color: COLORS.primary,
  },
  textWhite:{
    fontSize: 20, 
    color: COLORS.white,
  },
  textGray:{
    fontSize: 20, 
    color: COLORS.textGray,
  },
  button:{
    flex:1,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  }

});

