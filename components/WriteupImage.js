import {View, Image} from 'react-native';

const WriteupImage = ({src, alt, style}) => {
  return <Image style={style} length={100} height={100} source={{uri: 'https://i.pinimg.com/474x/2b/55/5c/2b555c5a474b8fdd7ef294c99b764eb0.jpg'}} />;
};

export default WriteupImage;
