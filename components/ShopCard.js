import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {STYLES, COLORS} from '../styles/styles';

export default function ShopCard({name, price, onPress}) {
  return (
    <View style={STYLES.shopCard}>
      <TouchableOpacity
        onPress={() => {
          onPress(name);
        }}>
        <Text style={[STYLES.shopText, {backgroundColor: 'lightpink'}]}>
          Buy Now!
        </Text>
        <Text style={STYLES.shopText}>{name}</Text>
        <Text style={STYLES.shopText}>{price}🐸</Text>
      </TouchableOpacity>
    </View>
  );
}
