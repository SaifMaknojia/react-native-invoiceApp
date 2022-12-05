import {Input} from '@ui-kitten/components';
import {StyleSheet} from 'react-native';
import React from 'react';

const CustomFormInput = ({
  placeholder,
  value,
  onChangeText,
  errors,
  touched,
  accessoryRight,
  secureTextEntry,
}) => {
  return (
    <Input
      style={errors && touched ? [styles.error, styles.input] : styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      accessoryRight={accessoryRight}
      secureTextEntry={secureTextEntry}
      size="large"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    paddingVertical: 5,
    borderRadius: 20,
    fill: 'black',
  },
  error: {
    borderColor: 'red',
    color: 'red',
  },
});

export default CustomFormInput;
