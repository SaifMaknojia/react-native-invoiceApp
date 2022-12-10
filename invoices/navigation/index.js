import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View} from 'react-native';
import InvoiceHomeScreen from '../screens/InvoiceHomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SignInScreen from '../screens/SignInScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InvoiceHomeScreen"
        component={InvoiceHomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
