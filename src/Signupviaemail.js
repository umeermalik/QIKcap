import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const Signupviaemail = props => {
  const [selectedValue, setSelectedValue] = useState('option1'); // Initialize with a default value

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={style.H2}>Create Account</Text>
      <Text style={style.regularbody}>
        Using your email or social accounts.
      </Text>
      <Text style={style.regularbody1}>
        Already have an account?
        <TouchableOpacity style={style.login}>
          <Text style={{color: 'blue'}}> Login Now</Text>
        </TouchableOpacity>
      </Text>
      <View style={{marginTop: 70}}>
        <Text style={{marginLeft: 13, marginRight: 10, marginBottom: 5}}>
          Email Address
        </Text>
        <TextInput placeholder="enter your email" style={style.input} />
        <Text style={{marginLeft: 13, marginRight: 10, marginBottom: 5}}>
          Email Address
        </Text>
        <TextInput placeholder="enter your email" style={style.input} />
        <Text>Select an option:</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={{height: 50, width: 200}}>
          <Picker.Item label="Option 1" value="option1" />
          <Picker.Item label="Option 2" value="option2" />
          <Picker.Item label="Option 3" value="option3" />
          {/* Add more Picker.Item components for additional options */}
        </Picker>
      </View>
    </View>
  );
};

const style = {
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
