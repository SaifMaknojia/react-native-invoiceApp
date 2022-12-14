import {View, StyleSheet} from 'react-native';
import React from 'react';
import {color} from '../../utils/Colors';
import {Text} from '@ui-kitten/components';
import {useSelector} from 'react-redux';

const InvoiceDetailsItems = () => {
  const {singleInvoice} = useSelector(state => state.individualInvoice);

  return (
    <View style={styles.container}>
      {singleInvoice?.items?.map(item => (
        <View style={styles.list}>
          <View>
            <Text style={styles.product} category="s1">
              {item.name}
            </Text>
            <Text category="c2" style={styles.fontColor}>
              {item.quantity} x ${parseInt(item.price).toFixed(2)}
            </Text>
          </View>
          <View>
            <Text>${parseInt(item.total).toFixed(2)}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F8F8F8',
    padding: 10,
    marginTop: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5,
  },
  fontColor: {
    color: color.fontBlue,
  },
  product: {
    fontWeight: '600',
  },
});

export default InvoiceDetailsItems;
