import {View, Text} from 'react-native';
import Title from '../components/Title';
import ShopCard from '../components/ShopCard';

export default Shop = () => {
  return (
    <View>
      <Title title="Shop" />
      <ShopCard
        name="Dark Mode"
        price="500"
        onPress={() => {
          console.log('Dark Mode bought!');
        }}
      />
    </View>
  );
};
