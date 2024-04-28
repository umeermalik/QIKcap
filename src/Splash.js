import React, {useEffect} from 'react';
import {Vibration, View, Image} from 'react-native';
import {Text} from 'react-native-paper';
import * as Progress from 'react-native-progress';

const Splash = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Signup');
    }, 2000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#6030A1',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{width: 180, height: 180, marginBottom: 60}}
        source={require('../src/assets/image1.png')}
      />
      <Text style={Style.Text}>Loading</Text>
      <Progress.Bar
        progress={0.3}
        width={200}
        indeterminate={true}
        color="white"
      />
    </View>
  );
};

const Style = {
  logo: {
    width: 180,
    height: 180,
  },
  Text: {
    color: 'white',
    marginBottom: 10,
  },
};
export default Splash;
