import React from 'react';

import {Datepicker, Icon, Layout, Text} from '@ui-kitten/components';
import {StyleSheet, View} from 'react-native';

const CalendarIcon = props => <Icon {...props} name="calendar" />;

const InputDate = () => {
  const [date, setDate] = React.useState(new Date());
  //Keep it to ISO String
  return (
    <View>
      <Datepicker
        label="Invoice Date"
        placeholder="Pick Date"
        date={date}
        onSelect={nextDate => setDate(nextDate)}
        accessoryRight={CalendarIcon}
      />
    </View>
  );
};

export default InputDate;
