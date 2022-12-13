import {View, StyleSheet} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';
import {color} from '../../utils/Colors';

const InvoiceDetailTitle = () => {
  return (
    <View style={{marginTop: 20, marginBottom: 25}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.fontColor} category="h6">
          #
        </Text>
        <Text category="h6">RT3060</Text>
      </View>

      <Text style={styles.fontColor} category="s1">
        Graphic Design
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
