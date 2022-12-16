import React from 'react';

import {Select, SelectItem, IndexPath} from '@ui-kitten/components';

const InputSelect = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const data = ['Next Day', 'Next 7 Days', 'Next 14 Days', 'Next 30 Days'];
  const displayValue = data[selectedIndex.row];

  return (
    <Select
      label="Payment Terms"
      selectedIndex={selectedIndex}
      value={displayValue}
      onSelect={index => setSelectedIndex(index)}>
      <SelectItem value="1" title="Next Day" />
      <SelectItem value="7" title="Next 7 Days" />
      <SelectItem value="14" title="Next 14 Days" />
      <SelectItem value="30" title="Next 30 Days" />
    </Select>
  );
};

export default InputSelect;
