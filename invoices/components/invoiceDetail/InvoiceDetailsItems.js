import {View, StyleSheet} from 'react-native';
import React from 'react';
import {color} from '../../utils/Colors';
import {Text} from '@ui-kitten/components';

const InvoiceDetailsItems = () => {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <View>
          <Text style={styles.product} category="s1">
            Banner Design
          </Text>
          <Text style={styles.fontColor}>1 x $200.00</Text>
        </View>
        <View>
          <Text>$200.00</Text>
        </View>
      </View>
      {/* Delete this later */}
      <View style={styles.list}>
        <View>
          <Text style={styles.product}>Banner Design</Text>
          <Text style={styles.fontColor}>1 x $200.00</Text>
        </View>
        <View>
          <Text>$200.00</Text>
        </View>
      </View>
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
