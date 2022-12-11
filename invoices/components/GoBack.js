import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from '@ui-kitten/components';

const GoBack = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('InvoiceHomeScreen')}>
      <View
        onPress={() => navigation.navigate('InvoiceHomeScreen')}
        style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          style={{width: 30, height: 30}}
          name="arrow-back-outline"
          fill="black"
        />
        <Text style={{marginLeft: 10, fontWeight: 'bold'}}>All Invoices</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoBack;
