import React from 'react';
import {Card} from '@ui-kitten/components';
import {View, StyleSheet} from 'react-native';
import InvoiceDetailAddress from './InvoiceDetailAddress';
import InvoiceDetailDate from './InvoiceDetailDate';
import InvoiceDetailBillTo from './InvoiceDetailBillTo';
import InvoiceDetailTitle from './InvoiceDetailTitle';
import InvoiceDetailsItems from './InvoiceDetailsItems';
import InvoiceDetailGrandTotal from './InvoiceDetailGrandTotal';
import {useSelector} from 'react-redux';

const InvoiceDetailsMainCard = () => {
  const {singleInvoice} = useSelector(state => state.individualInvoice);
  return (
    <Card style={styles.card}>
      <InvoiceDetailTitle />
      <InvoiceDetailAddress address={singleInvoice.senderAddress} />
      <View style={styles.wrapper}>
        <View>
          <InvoiceDetailDate
            date={singleInvoice?.paymentDue}
            title="Invoice Date"
          />
          <InvoiceDetailDate
            date={singleInvoice?.createdAt}
            title="Payment Due"
          />
        </View>
        <View>
          <InvoiceDetailBillTo />
          <InvoiceDetailAddress address={singleInvoice.clientAddress} />
        </View>
      </View>
      <InvoiceDetailDate date={singleInvoice?.clientEmail} title="Sent To" />
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
  card: {
    marginTop: 20,
    paddingBottom: 0,
  },
});

export default InvoiceDetailsMainCard;
