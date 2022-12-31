import React from 'react';

import {Datepicker, Icon} from '@ui-kitten/components';
import {View} from 'react-native';

const CalendarIcon = props => <Icon {...props} name="calendar" />;

const InputDate = ({setFieldValue, values}) => {
  const [date, setDate] = React.useState();
  //Keep it to ISO String

  const handleDate = newDate => {
    setFieldValue('createdAt', newDate);
    setDate(newDate);
  };
  return (
    <View>
      <Datepicker
        label="Invoice Date"
        placeholder="Pick Date"
        date={date}
        value={values}
        onSelect={nextDate => handleDate(nextDate)}
        accessoryRight={CalendarIcon}
      />
    </View>
  );
};

export default InputDate;
