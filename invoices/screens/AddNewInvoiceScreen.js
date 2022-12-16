import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import GoBack from '../components/GoBack';
import NewInvoiceForm from '../components/addNewInvoice/NewInvoiceForm';

const AddNewInvoiceScreen = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.navContainer}>
        <View style={styles.nav}>
          <GoBack navigation={navigation} />
          <TouchableOpacity
            onPress={() => navigation.navigate('InvoiceHomeScreen')}>
            <Text>X</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <NewInvoiceForm />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  navContainer: {
    backgroundColor: '#fff',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 20,
  },
  billFromText: {
    marginVertical: 15,
  },
});

export default AddNewInvoiceScreen;
