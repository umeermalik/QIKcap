import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

const Login = props => {
  return (
    <View style={style.container}>
      <Text style={style.H2}>Create Account</Text>
      <Text style={style.regularbody}>
        Using your email or social accounts.
      </Text>
      <Text style={style.regularbody1}>
        Already have an account?
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Login')}
          style={style.login}>
          <Text style={{color: 'blue'}}> Login Now</Text>
        </TouchableOpacity>
      </Text>
      <View style={{marginTop: 50, marginRight: 10}}>
        <Text style={{marginLeft: 13, marginRight: 10, marginBottom: 5}}>
          EMAIL ADDRESS
        </Text>
        <TextInput placeholder="enter your email" style={style.input} />
        <Text style={{marginLeft: 13, marginRight: 10, marginBottom: 5}}>
          PASSWORD
        </Text>
        <TextInput placeholder="enter your email" style={style.input} />

        <TouchableOpacity
          style={style.Login}
          onPress={() => props.navigation.navigate('CustomDrawer')}>
          <Text style={style.LoginText}>Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: -240,
  },
  Login: {
    backgroundColor: '#6030A1',
    width: 260,
    height: 48,
    borderRadius: 10,
    marginTop: 20,
    marginRight: -15,
    marginLeft: 18,
  },
  LoginText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
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
    marginBottom: 10,
  },
};
export default Login;
