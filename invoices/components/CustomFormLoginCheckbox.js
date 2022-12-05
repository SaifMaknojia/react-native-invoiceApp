import {View, StyleSheet} from 'react-native';
import {Text, CheckBox, Icon} from '@ui-kitten/components';
import React from 'react';

const CustomFormLoginCheckbox = ({onChange, checked, status, text}) => {
  return (
    <View style={styles.checkboxContainer}>
      <CheckBox
        checked={checked}
        onChange={onChange}
        style={styles.checkbox}
        status={status}>
        <Text>{text}</Text>
      </CheckBox>
    </View>
  );
};
const styles = StyleSheet.create({
  checkboxContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  checkbox: {
    paddingHorizontal: 20,
    fontSize: 5,
  },
});
export default CustomFormLoginCheckbox;
