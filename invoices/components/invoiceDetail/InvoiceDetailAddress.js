import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {color} from '../../utils/Colors';
import {useSelector} from 'react-redux';

const InvoiceDetailAddress = ({address}) => {
  console.log(address);
  //takes 4 props - street, postalCode, city, country
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
