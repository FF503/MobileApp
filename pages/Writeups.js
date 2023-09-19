import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import WriteupImage from '../components/WriteupImage';
import {COLORS, STYLES} from '../styles/styles';
import WriteupAddImg from '../components/WriteupAddImg';

// https://www.figma.com/file/4Qo3LDUDWqFRwbOCrpjcRH/Food-App-Design-(Community)?type=design&node-id=704-1902&mode=design&t=feK6HL4xivNTq7el-0 (1.27)

export default WriteupPage = () => {
  return (
    <SafeAreaView>
      <View style={stylesheet.container}>
        <Text style={stylesheet.title}>Write-ups!</Text>
        <TextInput
          style={stylesheet.textBox}
          placeholder="Bet you love doing this"
        />
        <View style={stylesheet.imageContainer}>
          <WriteupImage
            style={stylesheet.btn}
            src="https://i.pinimg.com/474x/2b/55/5c/2b555c5a474b8fdd7ef294c99b764eb0.jpg"
          />
          <WriteupAddImg stylesheet={stylesheet} />
        </View>

        <View style={{width: '100%', alignContent: 'center'}}>
          <TouchableOpacity style={stylesheet.submitBtn}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const stylesheet = StyleSheet.create({
  container: {
    margin: 28,
  },
  textBox: {
    borderRadius: 4,
    borderColor: '#646464',
    borderWidth: 1,
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,
    paddingHorizontal: 30,
    height: 150,
    marginTop: 20,
    textAlignVertical: 'top',
  },
  title: {
    color: COLORS.primaryDark,
    fontFamily: 'Open Sans',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 130,
  },
  imageContainer: {
    display: 'flex',
    padding: '17px 7px 12px 8px',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 15,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    justifyAlight: 'center',
  },
  btn: {
    width: 100,
    height: 100,
    borderRadius: 4,
  },
  submitBtn: {
    display: 'flex',
    width: 315,
    height: 56,
    padding: '17px 59px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: COLORS.primaryPink,
    justifyContent: 'center',
    justifyAlight: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
});
