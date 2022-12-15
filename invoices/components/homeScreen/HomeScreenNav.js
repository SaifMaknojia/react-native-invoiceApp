import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';
import HomeScreenNavModal from './HomeScreenNavModal';
import {useSelector} from 'react-redux';

const HomeScreenNav = () => {
  const {invoice} = useSelector(state => state.allUserInvoices);

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text category="h2">Invoice</Text>
        <Text>{invoice.results} Invoices</Text>
      </View>
      <View>
        <HomeScreenNavModal />
      </View>
      <TouchableOpacity
        style={{backgroundColor: 'white', padding: 15, borderRadius: 20}}>
        <Text>+ Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkbox: {
    margin: 2,
  },
  controlContainer: {
    borderRadius: 4,
    margin: 2,
    padding: 6,
    backgroundColor: '#3366FF',
  },
  modal: {
    position: 'relative',
  },
});

export default HomeScreenNav;
