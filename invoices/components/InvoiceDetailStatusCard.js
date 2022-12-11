import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {Card} from '@ui-kitten/components';

const InvoiceDetailStatusCard = () => {
  return (
    <Card style={styles.card}>
      <View style={styles.view}>
        <Text>Status</Text>
        <Text>Paid</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    padding: 10,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default InvoiceDetailStatusCard;
