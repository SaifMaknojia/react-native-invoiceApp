import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const InvoiceDetailGrandTotal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.colorWhite}>Grand Total</Text>
      <Text style={styles.colorWhite}>$500.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#252945',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    paddingVertical: 35,
    alignItems: 'center',
  },
  colorWhite: {
    color: '#fff',
  },
});

export default InvoiceDetailGrandTotal;
