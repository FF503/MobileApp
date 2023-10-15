import {SafeAreaView, Text, View} from 'react-native';
import {STYLES} from '../styles/styles';

export default Title = ({title}) => {
  return (
    <SafeAreaView>
      <Text style={STYLES.title}>{title}</Text>

    </SafeAreaView>
  );
};
