import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {color} from '../../utils/Colors';

const InvoiceDetailAddress = ({address}) => {
  return (
    <View>
      <Text style={styles.fontColor}>{address?.street}</Text>
      <Text style={styles.fontColor}>{address?.city}</Text>
      <Text style={styles.fontColor}>{address?.postCode}</Text>
      <Text style={styles.fontColor}>{address?.country}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontColor: {
    color: color.fontBlue,
  },
});

export default InvoiceDetailAddress;
