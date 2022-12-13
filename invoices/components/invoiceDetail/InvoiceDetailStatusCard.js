import {Text, StyleSheet, View} from 'react-native';
import React from 'react';
import {Card} from '@ui-kitten/components';
import {color} from '../../utils/Colors';

const InvoiceDetailStatusCard = () => {
  return (
    <Card style={styles.card}>
      <View style={styles.view}>
        <Text style={styles.fontColor}>Status</Text>
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

  fontColor: {
    color: color.fontBlue,
  },
});

export default InvoiceDetailStatusCard;
