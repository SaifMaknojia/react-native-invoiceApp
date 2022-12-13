import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {color} from '../../utils/Colors';

const InvoiceDetailAddress = () => {
  //takes 4 props - street, postalCode, city, country
  return (
    <View>
      <Text style={styles.fontColor}>19 Union Terrace</Text>
      <Text style={styles.fontColor}>Toront</Text>
      <Text style={styles.fontColor}>M3C 1S9</Text>
      <Text style={styles.fontColor}>Canada</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontColor: {
    color: color.fontBlue,
  },
});

export default InvoiceDetailAddress;
