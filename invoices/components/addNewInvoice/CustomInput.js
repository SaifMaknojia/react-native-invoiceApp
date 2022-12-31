import {StyleSheet} from 'react-native';
import React from 'react';
import {Input} from '@ui-kitten/components';

const CustomInput = ({
  placeholder,
  values,
  errors,
  touched,
  label,
  name,
  handleChange,
}) => {
  return (
    <Input
      style={errors && touched ? [styles.error, styles.input] : styles.input}
      placeholder={placeholder}
      value={values}
      onChangeText={handleChange(name)}
      size="large"
      label={label ? label : ''}
    />
  );
};
const styles = StyleSheet.create({
  input: {
    width: '100%',
    paddingVertical: 5,
    borderRadius: 10,
    fill: 'black',
  },
  error: {
    borderColor: 'red',
    color: 'red',
  },
});

export default CustomInput;
