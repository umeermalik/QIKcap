import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from './Dashboard';
import AllPatient from './Allpatient';
import AddingNewPatient from './AddingNewPatient';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function CustomDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={DashboardStack}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

const DashboardStack = () => {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Allpatient"
        component={AllPatient}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddingNewPatient"
        component={AddingNewPatient}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default CustomDrawer;
