import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';
import {color} from '../../utils/Colors';
import {useSelector} from 'react-redux';

const InvoiceDetailTitle = () => {
  const {singleInvoice} = useSelector(state => state.individualInvoice);

  return (
    <View style={{marginTop: 20, marginBottom: 25}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.fontColor} category="h6">
          #
        </Text>
        <Text category="h6">{singleInvoice?.invoiceNumber}</Text>
      </View>

      <Text style={styles.fontColor} category="s1">
        {singleInvoice?.description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontColor: {
    color: color.fontBlue,
  },
});

export default InvoiceDetailTitle;
