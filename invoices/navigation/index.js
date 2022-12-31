import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InvoiceDetailScreen from '../screens/InvoiceDetailScreen';
import InvoiceHomeScreen from '../screens/InvoiceHomeScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SignInScreen from '../screens/SignInScreen';
import AddNewInvoiceScreen from '../screens/AddNewInvoiceScreen';

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

      <Stack.Screen
        name="InvoiceDetailScreen"
        component={InvoiceDetailScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddNewInvoiceScreen"
        component={AddNewInvoiceScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MyStack;
