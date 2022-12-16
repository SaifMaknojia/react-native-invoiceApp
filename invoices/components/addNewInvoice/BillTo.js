import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CustomInput from './CustomInput';
import Address from './Address';

const BillTo = ({handleChange, values}) => {
  return (
    <View>
      <Text style={styles.billTo}>Bill To</Text>
      <View>
        <CustomInput
          handleChange={handleChange}
          placeholder="Name"
          label="Client Name"
          name="clientName"
        />
        <CustomInput
          handleChange={handleChange}
          placeholder="Email"
          label="Client Email"
          name="clientEmail"
        />
        <Address name="clientAddress" handleChange={handleChange} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  billTo: {marginVertical: 15},
});

export default BillTo;
