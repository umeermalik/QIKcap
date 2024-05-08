import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {useNavigation} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {DrawerActions} from '@react-navigation/native';
import CustomDrawer from './CustomDrawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

// import CustomDrawer from './CustomDrawer';

const Dashboard = props => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <ScrollView style={style.container}>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <TouchableOpacity
          onPress={() => props.navigation.dispatch(DrawerActions.openDrawer)}>
          <Image
            style={style.imagefoursquare}
            source={require('../src/assets/icons8-four-squares-30.png')}
          />
        </TouchableOpacity>
        <Text style={style.dashboardText}>Dashboard</Text>
        <Icon
          name="group"
          color="black"
          size={30}
          style={{marginLeft: '30%'}}
        />
      </View>
      <View
        style={{
          flexDirection: 'column',
          marginTop: -20,
          // flex: 1,
        }}>
        <Text style={style.UsernameText}>Howdy,Jon</Text>
        <Text style={style.QIKLinks}>QIK Links</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 10,
        }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Allpatient')}
          style={style.buttonStyle}>
          <Image
            style={style.buttonImage}
            source={require('../src/assets/medical-icon_i-inpatient.png')}
          />
          <Text style={style.buttonText}>Patient Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.buttonStyle}>
          <Image
            style={style.buttonImage}
            source={require('../src/assets/vector2.png')}
          />
          <Text style={style.buttonText}>Messages</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={style.clinicalText}>Clinical events</Text>
      </View>
      <View
        style={{
          flexDirection: 'column',

          alignItems: 'center',
        }}>
        <TouchableOpacity style={style.clinicalEventButton}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={style.eventImage}
              source={require('../src/assets/Group.png')}
            />
            <Text style={style.upcomingEvent}>
              Upcoming Event | Patient Cap
            </Text>
          </View>
          <Text style={{marginLeft: 45}}>24th September | 12:00 PM</Text>
          <Text style={{marginLeft: 45}}>
            QIKcap Disinfection briefing session
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.clinicalEventButton}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={style.eventImage}
              source={require('../src/assets/Group.png')}
            />
            <Text style={style.upcomingEvent}>
              Upcoming Event | Patient Cap
            </Text>
          </View>
          <Text style={{marginLeft: 45}}>24th September | 12:00 PM</Text>
          <Text style={{marginLeft: 45}}>
            QIKcap Disinfection briefing session
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.viewAllEventsButton}>
          <Text style={style.viewEventText}>View All Events</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,

          padding: 10,
          marginBottom: -10,
        }}>
        <Image
          style={style.buttonImage1}
          source={require('../src/assets/ph_info-fill.png')}
        />
        <Text style={style.upcomingInfo}>
          Upcoming events are highlighted. Tap on the highlighted date to view
          the event details.
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: -10,

          padding: 10,
        }}>
        <Image
          style={style.buttonImage1}
          source={require('../src/assets/Ellipse 203.png')}
        />
        <Text style={style.upcomingInfo}>Training a nurse events</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',

          padding: 10,
        }}>
        <Image
          style={style.buttonImage1}
          source={require('../src/assets/3.png')}
        />
        <Text style={style.upcomingInfo}>Patients related events </Text>
      </View>
      <View>
        <Calendar
          style={{
            backgroundColor: '#1C0937',
            elevation: 10,
            margin: 20,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: 'black',
          }}
          enableSwipeMonths
          markedDates={{
            '2024-10-10': {marked: true, dotColor: 'yellow', selected: true},
            '2024-10-11': {
              marked: true,
              dotColor: 'yellow',
              selected: true,
              selectedColor: 'yellow',
            },
          }}
          theme={{
            monthTextColor: 'white',
            calendarBackground: '#1C0937',
            dayTextColor: 'white',
            textDisabledColor: 'grey',
          }}
        />
      </View>

      <View style={{margin: '4%'}}>
        <Text
          style={{
            fontSize: 18,
            marginLeft: '3%',
            fontWeight: 'bold',
            color: 'black',
          }}>
          Insights
        </Text>
        <LineChart
          data={{
            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [1, 2, 3, 4, 5, 6],
              },
            ],
          }}
          width={330} // Use screenWidth here
          height={220}
          yAxisLabel=""
          yAxisSuffix=""
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#5040A3', // Dark purple background color
            backgroundGradientFrom: '#7B6DC9', // Lighter purple gradient start color
            backgroundGradientTo: '#A59FE1', // Lighter purple gradient end color

            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
      <View style={{marginLeft: '12%', marginBottom: '20%', marginTop: '-2%'}}>
        <TouchableOpacity style={style.viewAllEventsButton}>
          <Text style={style.viewEventText}>View All Events</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const style = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  upcomingInfo: {
    color: 'black',
    textAlign: 'lefts',
    fontSize: 14,
    marginLeft: 20,
  },
  viewAllEventsButton: {
    backgroundColor: '#6030A1',
    width: 260,
    height: 48,
    borderRadius: 10,
    marginTop: 20,
    marginRight: -5,
  },
  viewEventText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  dashboardText: {
    marginLeft: '28%',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginTop: '1%',
  },
  upcomingEvent: {
    color: 'black',
    fontSize: 17,
    marginTop: 5,
    marginLeft: 10,
  },

  QIKLinks: {marginLeft: '5%', fontSize: 34, color: 'black'},
  imagefoursquare: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  ImageButton: {
    width: 50,
    height: 50,
    marginLeft: 10,
    alignSelf: 'center',
  },
  UsernameText: {
    marginTop: '20%',
    marginLeft: '5%',
    fontSize: 18,
    color: 'black',
  },
  buttonStyle: {
    width: '40%',
    height: 180,
    backgroundColor: '#6030A1',
    borderRadius: 10,
    paddingTop: 60,
  },
  buttonImage: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonImage1: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 2,
  },
  buttonText: {color: 'white', marginTop: 3, alignSelf: 'center'},
  clinicalText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  clinicalEventButton: {
    backgroundColor: 'white',
    width: '90%',
    height: 100,
    borderRadius: 10,
    elevation: 20,
    marginTop: 10,
  },
  eventImage: {
    marginTop: 5,
    marginLeft: 10,
    height: 25,
    width: 25,
  },
};
export default Dashboard;
