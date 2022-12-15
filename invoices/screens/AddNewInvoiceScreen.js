import {View, Text} from 'react-native';
import React from 'react';

const AddNewInvoiceScreen = ({navigation}) => {
  return (
    <View>
      <Text>AddNewInvoiceScreen</Text>
      <Text onPress={() => navigation.navigate('InvoiceHomeScreen')}>
        Back to All Invoice
      </Text>
    </View>
  );
};

export default AddNewInvoiceScreen;
