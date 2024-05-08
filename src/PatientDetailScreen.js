import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Patientdetailscreen = props => {
  return (
    <ScrollView style={style.container}>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={style.dashboardText}>Samuel Peterson</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: '10%'}}>
        <Text
          style={{
            marginLeft: '10%',
            color: 'black',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          Samuel Peterson
        </Text>
      </View>
      <View style={{flexDirection: 'column', marginTop: '5%'}}>
        <Text style={{color: 'black', fontSize: 15, marginLeft: '10%'}}>
          Current Date & Time:
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: '10%',
            marginTop: '2%',
            fontWeight: 'bold',
          }}>
          Wed 27 Sep 23 - 1:40 PM
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            marginLeft: '10%',
            marginTop: '5%',
          }}>
          Segment
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: '10%',
            marginTop: '2%',
            fontWeight: 'bold',
          }}>
          Med Surg{' '}
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: '10%',
            marginTop: '10%',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          QIKcap Disinfection{' '}
        </Text>
        <Text
          style={{
            color: 'black',
            marginLeft: '10%',
            marginTop: '2%',
            // fontWeight: 'bold',
          }}>
          5 seconds per disinfection cycles
        </Text>
      </View>
      <View
        style={{
          height: 100,
          width: '80%',
          backgroundColor: '#E7E0F1',
          marginLeft: '9%',
          marginTop: '5%',
          borderRadius: 10,
        }}>
        <Text
          style={{
            marginLeft: '8%',
            marginTop: '8%',
            color: 'black',
            fontSize: 18,
          }}>
          Add new QIKcap{' '}
        </Text>
        <Text style={{marginLeft: '8%', color: 'black', fontSize: 18}}>
          Disinfection Cycle
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          elevation: 30,
          height: 100,
          width: '80%',
          marginLeft: '9%',
          marginTop: '8%',
          borderRadius: 10,
        }}>
        <Text style={{marginLeft: '5%'}}>Total IV Cycles</Text>
        <Text style={{fontWeight: 'bold', color: 'black', marginLeft: '5%'}}>
          18{' '}
        </Text>
        <Text style={{marginLeft: '64%', marginTop: '-13%'}}>
          Last Disinfection{' '}
        </Text>
        <Text
          style={{
            marginLeft: '66%',
            color: 'black',
            fontWeight: 'bold',
            marginTop: '-5%',
          }}>
          2h 39m{' '}
        </Text>
        <Text style={{marginLeft: '5%', marginTop: '5%'}}>
          Total Time spent
        </Text>
        <Text style={{marginLeft: '5%', color: 'black', fontWeight: 'bold'}}>
          90
        </Text>
      </View>
      <Text
        style={{
          color: 'black',
          marginLeft: '10%',
          marginTop: '10%',
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        Segment History{' '}
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          height: 150,
          width: '90%',
          marginLeft: '5%',
        }}>
        <Icon
          name="circle"
          color="#126DA0"
          size={30}
          style={{marginLeft: '5%', marginTop: '5%'}}
        />
        <Text
          style={{
            marginLeft: '20%',
            color: '#2F6926',
            fontSize: 28,
            marginTop: '-11%',
          }}>
          ICU
        </Text>
        <Text
          style={{
            marginLeft: '20%',
            color: 'grey',
            fontSize: 18,
          }}>
          Med surg, rM 02903
        </Text>
        <Text
          style={{
            marginLeft: '20%',
            color: 'grey',
            fontSize: 18,
          }}>
          Sept 13, 2023, 7:37am{' '}
        </Text>
        <Text
          style={{
            marginLeft: '20%',
            color: 'black',
            fontSize: 18,
          }}>
          Current Segment{' '}
        </Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          borderRadius: 10,
          height: 150,
          width: '90%',
          marginLeft: '5%',
          marginTop: '5%',
        }}>
        <Text
          style={{
            marginLeft: '10%',
            color: 'grey',
            fontSize: 16,
          }}>
          Location
        </Text>
        <Text
          style={{
            marginLeft: '10%',
            color: 'black',
            fontSize: 17,
          }}>
          Mountain Ave Ste H, Upland...{' '}
        </Text>
        <Text
          style={{
            marginLeft: '10%',
            color: 'grey',
            fontSize: 16,
          }}>
          Floor{' '}
        </Text>
        <Text
          style={{
            marginLeft: '10%',
            color: 'black',
            fontSize: 18,
          }}>
          4th floor east Wing{' '}
        </Text>
        <Text
          style={{
            marginLeft: '10%',
            color: 'grey',
            fontSize: 16,
          }}>
          Room
        </Text>
        <Text
          style={{
            marginLeft: '10%',
            color: 'black',
            fontSize: 18,
          }}>
          RM302
        </Text>
      </View>

      {/* Add TouchableOpacity components */}
      <TouchableOpacity
        style={{
          backgroundColor: '#6030A1',
          padding: 15,
          margin: 20,
          alignItems: 'center',
          borderRadius: 5,
        }}
        onPress={() => props.navigation.navigate('Changeinformation')}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Change information
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#6030A1',
          padding: 15,
          margin: 20,
          alignItems: 'center',
          borderRadius: 5,
          marginTop: '-5%',
        }}
        onPress={() => props.navigation.navigate('AddingNewPatient')}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>
          Add a new patient
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const style = {
  dashboardText: {
    marginLeft: '35%',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginTop: '1%',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
};

export default Patientdetailscreen;
