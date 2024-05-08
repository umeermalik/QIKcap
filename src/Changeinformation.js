import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Changeinformation = props => {
  const [selectedValue, setSelectedValue] = useState(''); // Initialize with a default value

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        {/* <Image
          style={styles.headerIcon}
          source={require('../src/assets/icons8-four-squares-30.png')}
        /> */}
        <Text style={styles.headerTitle}>Samuel Peterson</Text>
        <Icon
          name="group"
          color="black"
          size={25}
          style={{marginLeft: '27%'}}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Samuel Peterson</Text>
        <Icon
          name="settings"
          color="black"
          size={30}
          style={{marginLeft: '30%'}}
        />
        {/* <TouchableOpacity
          onPress={() => props.navigation.navigate('AddingNewPatient')}
          style={styles.addButton}>
          <Text style={styles.addButtonLabel}>+</Text>
        </TouchableOpacity> */}
      </View>

      <View style={styles.content}>
        <Text style={styles.contentText}>Current Date & Time:</Text>
        <Text style={{marginBottom: 5, color: 'black', fontWeight: 'bold'}}>
          Wed 27 Sep 23 - 1:40 PM
        </Text>
        {/* Input fields */}
        <Text>FULL NAME</Text>
        <TextInput placeholder="Enter Full Name" style={styles.input} />
        <Text>LOCATION</Text>
        <TextInput placeholder="Enter Location" style={styles.input} />
        <Text>SEGMENT</Text>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          style={styles.inputs}>
          <Picker.Item label="ICU" value="ICU" />
          <Picker.Item label="QR" value="QR" />
          <Picker.Item label="ER" value="ER" />
          <Picker.Item label="STEP DOWN" value="STEP DOWN" />
          <Picker.Item label="MED SURF" value="MED SURF" />

          {/* Add more Picker.Item components for additional options */}
        </Picker>
        <Text>FLOOR</Text>
        <TextInput placeholder="4th floor East Wing" style={styles.input} />
        <Text>ROOM</Text>
        <TextInput placeholder="RM302" style={styles.input} />
        <Text>ADDITIONAL NOTES</Text>
        <TextInput placeholder="Add notes" style={styles.input} />
        <Text style={styles.dateTimeText}>Current Date & Time:</Text>
        <Text style={styles.dateTimeValue}>Wed 27 Sep 23 - 1:40 PM</Text>
      </View>

      <TouchableOpacity
        style={styles.addButtonPurple}
        onPress={() => props.navigation.navigate('Patientdetailscreen')}>
        <Text style={styles.addButtonPurpleText}>Save Changes</Text>
      </TouchableOpacity>

      {/* <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={closeModal}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  marginLeft: '10%',
                  fontSize: 25,
                  marginBottom: 10,
                }}>
                Patient has been added{' '}
              </Text>
              <Text style={styles.modalText}>
                Patient Name: Samuel Peterson
              </Text>
              <Text style={[styles.modalText, {marginTop: -15}]}>
                Date: Wed 27 Sep 23 - 1:40 PM
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#6030A1',
                  marginBottom: 10,
                  height: 60,
                  width: '90%',
                  borderRadius: 10,
                  marginLeft: '7%',
                }}
                onPress={() =>
                  props.navigation.navigate('Patientdetailscreen')
                }>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    padding: 17,
                    fontSize: 18,
                  }}>
                  View Patient Details
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={closeModal}
                style={{
                  backgroundColor: '#6030A1',
                  marginBottom: 10,
                  height: 60,
                  width: '90%',
                  borderRadius: 10,
                  marginLeft: '7%',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    padding: 16,
                    fontSize: 18,
                  }}>
                  Go To Home
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 80, // Adjust based on button height and desired spacing
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputs: {
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
  headerIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',

    marginLeft: '25%',
    color: 'black',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
    color: 'black',
  },
  addNewText: {
    color: 'black',
    marginRight: 8,
  },
  addButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    height: 20,
    width: 20,
  },
  addButtonLabel: {
    color: 'purple',
    fontSize: 13,
    textAlign: 'center',
  },
  content: {
    marginTop: 20,
  },
  contentText: {
    fontSize: 17,
    marginBottom: 1,
    color: 'black',
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  dateTimeText: {
    marginTop: 10,
    fontWeight: 'bold',
  },
  dateTimeValue: {
    color: 'black',
  },
  addButtonPurple: {
    backgroundColor: '#6030A1',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonPurpleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default Changeinformation;
