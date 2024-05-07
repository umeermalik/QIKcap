import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import Splash from './src/Splash';
import Signup from './src/Signup';
import Signupviaemail from './src/Signupviaemail';
import Login from './src/Login';
import Dashboard from './src/Dashboard';
import Allpatient from './src/Allpatient';
import AddingNewPatient from './src/AddingNewPatient';
import CustomDrawer from './src/CustomDrawer';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InitialStack">
        <Stack.Screen
          name="InitialStack"
          component={InitialStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CustomDrawer"
          component={CustomDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const InitialStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signupviaemail"
        component={Signupviaemail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
