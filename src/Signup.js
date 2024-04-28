import React, {useEffect} from 'react';
import {Vibration, View, Image, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Signup = props => {
  return (
    //     <View style={style.main}>
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={style.WelcomeText}>
        Welcome to{' '}
        <Text style={{color: 'black', fontWeight: 'bold'}}> QIKcap</Text> by
      </Text>

      <Image style={style.HAI} source={require('../src/assets/Capture1.png')} />
      {/* <Text style={{marginTop: 3, fontSize: 22}}>
          HAI
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black'}}>
            Solution
          </Text>
        </Text> */}

      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
        <Text style={style.H2}>Create Account</Text>
        <Text style={style.regularbody}>
          Using your email or social accounts.
        </Text>
        <Text style={style.regularbody1}>
          Already have account?
          <TouchableOpacity style={style.login}>
            <Text style={{color: 'blue'}}> Login Now</Text>
          </TouchableOpacity>
        </Text>
        <Text style={{marginTop: 10, marginRight: 170, marginTop: 40}}>
          Email address
        </Text>
        <TextInput placeholder="enter your email" style={style.input} />
        <TouchableOpacity
          style={style.Next}
          onPress={() => props.navigation.navigate('Signupviaemail')}>
          <Text style={style.nexttext}>Next></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = {
  main: {
    backgroundcolor: 'white',
  },
  WelcomeText: {
    fontSize: 22,
    color: 'black',
    marginTop: 80,
  },
  HAI: {
    width: 180,
    height: 30,
    marginTop: 15,
  },
  H2: {
    color: '#221138',
    marginTop: 50,
    fontSize: 25,
  },
  regularbody: {
    marginTop: 5,
    fontSize: 15,
  },
  regularbody1: {
    marginTop: 5,
    color: 'black',
  },
  login: {
    backgroundColor: 'white',
  },
  Next: {
    backgroundColor: '#6030A1',
    width: 260,
    height: 48,
    borderRadius: 10,
    marginTop: 20,
    marginRight: -5,
  },
  nexttext: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  input: {
    backgroundColor: 'white',
    width: 280,
    borderColor: 'grey',
    marginLeft: 10,
    borderRadius: 15,
    borderTopEndRadius: 15,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    borderWidth: 1,
    underlineColorAndroid: 'transparent',
    color: 'grey',
  },
};
export default Signup;
