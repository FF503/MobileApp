import React from 'react'
import {View,Text,Image} from 'react-native'
import { COLORS, STYLES } from '../styles/styles';

const About = () => {
    return(
        <View style={{backgroundColor: COLORS.white,flex:1}}>
            <Text style = {[STYLES.title, {marginLeft:"5%", marginBottom: 5}]}>About: We are cool</Text>
            {/* <Image
                style = {{width:50,height:50}}
                source = {require('../assets/images/home.png')}
            /> */}
            
        </View>
    )
}

export default About;