import React from 'react'
import {View,Text,Image} from 'react-native'
import { COLORS, STYLES } from '../styles/styles';

const Ranking = () => {
    return(
        <View style={{backgroundColor: COLORS.white, flex: 1}}>
            <Text style = {[STYLES.title, {marginLeft: 10, marginBottom: 5}]}>Home</Text>
            {/* <Image
                style = {{width:50,height:50}}
                source = {require('../assets/images/home.png')}
            /> */}
            
        </View>
    )
}

export default Ranking;