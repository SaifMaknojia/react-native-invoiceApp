import {View, StyleSheet} from 'react-native';
import React from 'react';
import {color} from '../../utils/Colors';
import {Text} from '@ui-kitten/components';

const InvoiceDetailDate = () => {
  //2 props Title and date
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.fontColor}>Invoice Date</Text>
      <Text category="s1" style={styles.information}>
        21 Aug 2021
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontColor: {
    color: color.fontBlue,
  },
  information: {
    color: '#000',
    fontWeight: '700',
  },
});

export default InvoiceDetailDate;
