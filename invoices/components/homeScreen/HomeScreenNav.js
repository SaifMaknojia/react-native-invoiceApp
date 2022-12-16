import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Text} from '@ui-kitten/components';
import HomeScreenNavModal from './HomeScreenNavModal';
import {useSelector} from 'react-redux';

const HomeScreenNav = ({navigation}) => {
  const {invoice} = useSelector(state => state.allUserInvoices);

  const handleNewInvoice = () => {
    navigation.navigate('AddNewInvoiceScreen');
  };
  return (
    <View style={styles.container}>
      <View style={styles.invoice}>
        <Text category="h2">Invoice</Text>
        <Text>{invoice.results} Invoices</Text>
      </View>
      <View>
        <HomeScreenNavModal />
      </View>
      <TouchableOpacity onPress={handleNewInvoice} style={styles.button}>
        <Text category="s1" style={styles.buttonText}>
          + Invoice
        </Text>
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
  button: {
    backgroundColor: '#7c5dfa',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
  },
  invoice: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreenNav;
