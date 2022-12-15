import {View, StyleSheet} from 'react-native';
import React from 'react';
import {color} from '../../utils/Colors';
import {Text} from '@ui-kitten/components';

const InvoiceDetailDate = ({date}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontColor}>Invoice Date</Text>
      <Text category="s1" style={styles.information}>
        {date}
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
  container: {
    marginBottom: 20,
  },
});

export default InvoiceDetailDate;
