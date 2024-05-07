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

const AddingNewPatient = props => {
  const [modalVisible, setModalVisible] = useState(false);

  const AddPatientmodal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={require('../src/assets/icons8-four-squares-30.png')}
        />
        <Text style={styles.headerTitle}>New Patient</Text>
        <Image
          style={styles.headerIcon}
          source={require('../src/assets/Vector.png')}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Adding New Patient</Text>
        <Text style={styles.addNewText}>Add new</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AddingNewPatient')}
          style={styles.addButton}>
          <Text style={styles.addButtonLabel}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentText}>
          Enter the patient details and select the segment to add a new patient.
        </Text>
        {/* Input fields */}
        <Text>FULL NAME</Text>
        <TextInput placeholder="Enter Full Name" style={styles.input} />
        <Text>LOCATION</Text>
        <TextInput placeholder="Enter Location" style={styles.input} />
        <Text>SEGMENT</Text>
        <TextInput placeholder="Select a Segment" style={styles.input} />
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
        onPress={AddPatientmodal}>
        <Text style={styles.addButtonPurpleText}>Add</Text>
      </TouchableOpacity>

      <Modal
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
                  marginLeft: '16%',
                  fontSize: 25,
                  marginBottom: 10,
                }}>
                Delete the patient
              </Text>
              <Text style={styles.modalText}>
                Are you sure you want to delete the patient. This action can not
                be undone.
              </Text>
              <TouchableOpacity
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
      </Modal>
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
  headerIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
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
    backgroundColor: '#6030A1',
    padding: 10,
    borderRadius: 20,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 20,
  },
  content: {
    marginTop: 20,
  },
  contentText: {
    fontSize: 17,
    marginBottom: 10,
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

export default AddingNewPatient;
