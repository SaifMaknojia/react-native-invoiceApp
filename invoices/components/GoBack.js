import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {Icon} from '@ui-kitten/components';
import {color} from '../utils/Colors';

const GoBack = ({navigation}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('InvoiceHomeScreen')}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          style={{width: 30, height: 30}}
          name="arrow-back-outline"
          fill={color.fontBlue}
        />
        <Text style={[styles.fontColor, styles.allInvoices]}>All Invoices</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  fontColor: {
    color: color.fontBlue,
  },
  allInvoices: {marginLeft: 10, fontWeight: 'bold'},
});

export default GoBack;
