import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';
import {color} from '../../utils/Colors';

const InvoiceDetailBillTo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.fontColor} category="s1">
        Bill To
      </Text>
      <Text category="h6">Alex Grim</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  fontColor: {
    color: color.fontBlue,
  },
});

export default InvoiceDetailBillTo;
