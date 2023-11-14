import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { STYLES } from '../styles/styles';

export default shopCard = ({ name, price, callback}) => {
    return (
        <TouchableOpacity style={STYLES.shopCard} onPress={() => {
            callback(name);
        }}>
            <Text style={STYLES.shopBuyBtn}>Buy Now!</Text>
            <Text style={STYLES.shopCardButtonText}>{name}</Text>
            <Text style={STYLES.shopCardButtonText}>{price}</Text>
        </TouchableOpacity>
    );
}