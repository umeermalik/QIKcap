import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import {TextInput, Button, RadioButton} from 'react-native-paper';
import 'react-native-gesture-handler';

const AllPatient = props => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false); // Corrected modal state name

  const options = [
    {label: 'Samual', value: 'option'},
    {label: 'Megan', value: 'option1'},
    {label: 'Olivia Bradley', value: 'option2'},
    {label: 'Frank Johnson', value: 'option3'},
    {label: 'Samual', value: 'option4'},
    {label: 'Megan', value: 'option5'},
    {label: 'Olivia Bradley', value: 'option6'},
    {label: 'Frank Johnson', value: 'option7'},
    {label: 'Frank Johnson', value: 'option8'},
    {label: 'Frank Johnson', value: 'option9'},
  ];

  const handleOptionPress = value => {
    const updatedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter(option => option !== value)
      : [...selectedOptions, value];
    setSelectedOptions(updatedOptions);
  };

  const renderOptionItem = ({item}) => (
    <View
      style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
      <RadioButton
        value={item.value}
        status={selectedOptions.includes(item.value) ? 'checked' : 'unchecked'}
        onPress={() => handleOptionPress(item.value)}
      />
      <Text style={{marginLeft: 10}}>{item.label}</Text>
      <View style={{marginLeft: '20%', flexDirection: 'column'}}>
        <Text>ER</Text>
      </View>
    </View>
  );

  const handleDeleteButton = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleFilterButton = () => {
    setModalVisible1(true); // Corrected function name
  };

  const closeFilterModal = () => {
    setModalVisible1(false); // Corrected function name
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerIcon}
          source={require('../src/assets/icons8-four-squares-30.png')}
        />
        <Text style={styles.headerTitle}>Patient</Text>
        <Image
          style={styles.headerIcon}
          source={require('../src/assets/Vector.png')}
        />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>All Patients</Text>
        <Text style={styles.addNewText}>Add new</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('AddingNewPatient')}
          style={styles.addButton}>
          <Text style={styles.addButtonLabel}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          onPress={handleFilterButton}
          style={styles.searchButton}>
          <Text>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleDeleteButton}
          style={styles.searchButton}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.patientListContainer}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{marginLeft: '15%'}}>
            <Text>name</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: '23%'}}>
            <Text>Segment</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={options}
          renderItem={renderOptionItem}
          keyExtractor={item => item.value}
          contentContainerStyle={styles.flatListContent}
        />
      </View>

      <Button
        mode="contained"
        onPress={() => console.log('Selected Options:', selectedOptions)}
        style={styles.submitButton}>
        Submit
      </Button>

      {/* Modal for Delete Confirmation */}
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
                Are you sure you want to delete the patient? This action cannot
                be undone.
              </Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => console.log('Patient deleted!')}>
                <Text style={styles.modalButtonText}>Delete</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                <Text style={styles.modalButtonText}>Go back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      {/* Modal for Filter */}
      <Modal
        visible={modalVisible1}
        transparent={true}
        animationType="slide"
        onRequestClose={closeFilterModal}>
        <TouchableWithoutFeedback onPress={closeFilterModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  marginLeft: '25%',
                  fontSize: 25,
                  marginBottom: 10,
                }}>
                Apply Filters
              </Text>
              {/* Add filter options and functionality here */}
              <Text>Filter Options Here</Text>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => console.log('Patient deleted!')}>
                <Text style={styles.modalButtonText}>Filter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
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
    marginLeft: '25%',
    color: 'black',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
    color: 'black',
  },
  addNewText: {
    color: 'black',
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  patientListContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {width: 0, height: 2},
    marginBottom: 20,
  },
  flatListContent: {
    paddingBottom: 20,
  },
  submitButton: {
    backgroundColor: '#6030A1',
    padding: 12,
    borderRadius: 10,
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
  modalButton: {
    backgroundColor: '#6030A1',
    marginBottom: 10,
    height: 60,
    width: '90%',
    borderRadius: 10,
    marginLeft: '7%',
    justifyContent: 'center',
  },
  modalButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
});

export default AllPatient;
