import React from 'react';
import {Card, Text} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import InvoiceDetailAddress from './InvoiceDetailAddress';
import InvoiceDetailDate from './InvoiceDetailDate';
import InvoiceDetailBillTo from './InvoiceDetailBillTo';
import InvoiceDetailTitle from './InvoiceDetailTitle';
import InvoiceDetailsItems from './InvoiceDetailsItems';
import InvoiceDetailGrandTotal from './InvoiceDetailGrandTotal';

const InvoiceDetailsMainCard = () => {
  return (
    <Card style={{marginTop: 20, paddingBottom: 0}}>
      <InvoiceDetailTitle />
      <InvoiceDetailAddress />
      <View style={styles.wrapper}>
        <View>
          <InvoiceDetailDate />
          <InvoiceDetailDate />
        </View>
        <View>
          <InvoiceDetailBillTo />
          <InvoiceDetailAddress />
        </View>
      </View>
      <InvoiceDetailDate />
      <InvoiceDetailsItems />
      <InvoiceDetailGrandTotal />
    </Card>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
});

export default InvoiceDetailsMainCard;
