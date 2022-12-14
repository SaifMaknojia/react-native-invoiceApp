import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';
import {color} from '../../utils/Colors';
import {useSelector} from 'react-redux';

const InvoiceDetailBillTo = () => {
  const {singleInvoice} = useSelector(state => state.individualInvoice);
  return (
    <View style={styles.container}>
      <Text style={styles.fontColor} category="s1">
        Bill To
      </Text>
      <Text category="h6">{singleInvoice.clientName}</Text>
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
