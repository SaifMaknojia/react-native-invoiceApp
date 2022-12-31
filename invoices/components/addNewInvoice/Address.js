import {View, StyleSheet} from 'react-native';
import React from 'react';
import CustomInput from './CustomInput';

const Address = ({values, handleChange, name}) => {
  return (
    <View>
      <CustomInput
        handleChange={handleChange}
        placeholder="Enter your Street"
        label="Street Address"
        name={`${name}.street`}
        values={values?.street}
      />
      <View style={styles.holder}>
        <View style={styles.width48}>
          <CustomInput
            handleChange={handleChange}
            placeholder="City"
            label="City"
            name={`${name}.city`}
            values={values?.city}
          />
        </View>
        <View style={styles.width48}>
          <CustomInput
            handleChange={handleChange}
            placeholder="Postal Code"
            label="Postal Code"
            name={`${name}.postCode`}
            values={values?.postCode}
          />
        </View>
      </View>
      <CustomInput
        handleChange={handleChange}
        placeholder="Country"
        label="Country"
        name={`${name}.country`}
        values={values?.country}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  width48: {
    width: '48%',
  },
  holder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default Address;
