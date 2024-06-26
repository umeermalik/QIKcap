import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Signupviaemail = props => {
  const [selectedValue, setSelectedValue] = useState(''); // Initialize with a default value

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
          FULL NAME
        </Text>
        <TextInput placeholder="enter your email" style={style.input} />
        <Text style={{marginLeft: 13, marginRight: 10, marginBottom: 5}}>
          TITLE
        </Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={style.input}>
          <Picker.Item label="Nurse" value="Nurse" />
          <Picker.Item label="Manager" value="Manager" />
          <Picker.Item label="Anesthiologist" value="Anesthiologist" />
          <Picker.Item label="CRNA" value="CRNA" />
          {/* Add more Picker.Item components for additional options */}
        </Picker>
        <Text style={{marginLeft: 13, marginRight: 10, marginBottom: 5}}>
          PASSWORD
        </Text>
        <TextInput placeholder="Password" style={style.input} />
        <Text style={{marginLeft: 13, marginRight: 10, marginBottom: 5}}>
          CONFIRM PASSWORD
        </Text>
        <TextInput placeholder="enter your email" style={style.input} />
        <TouchableOpacity
          style={style.Signup}
          onPress={() => props.navigation.navigate('Signupviaemail')}>
          <Text style={style.SignupText}>Signup</Text>
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
    marginTop: -30,
  },
  Signup: {
    backgroundColor: '#6030A1',
    width: 260,
    height: 48,
    borderRadius: 10,
    marginTop: 20,
    marginRight: -15,
    marginLeft: 18,
  },
  SignupText: {
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

export default Signupviaemail;
