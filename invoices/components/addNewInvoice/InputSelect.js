import React from 'react';
import {StyleSheet} from 'react-native';
import {Select, SelectItem, IndexPath} from '@ui-kitten/components';

const InputSelect = ({setFieldValue, isSubmitting}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

  const data = ['Next Day', 'Next 7 Days', 'Next 14 Days', 'Next 30 Days'];

  const displayValue = data[selectedIndex.row];

  const handleSelect = async i => {
    setSelectedIndex(i);

    if (selectedIndex.row === 0) {
      return await setFieldValue('paymentTerms', 1);
    } else if (selectedIndex.row === 1) {
      return await setFieldValue('paymentTerms', 7);
    } else if (selectedIndex.row === 2) {
      console.log(displayValue);
      return await setFieldValue('paymentTerms', 14);
    } else if (selectedIndex.row === 3) {
      return await setFieldValue('paymentTerms', 30);
    }
  };

  return (
    <Select
      style={styles.select}
      label="Payment Terms"
      selectedIndex={selectedIndex}
      value={displayValue}
      onSelect={index => handleSelect(index)}>
      <SelectItem title="Next Day" />
      <SelectItem title="Next 7 Days" />
      <SelectItem title="Next 14 Days" />
      <SelectItem title="Next 30 Days" />
    </Select>
  );
};

const styles = StyleSheet.create({
  select: {
    marginTop: 10,
  },
});

export default InputSelect;
