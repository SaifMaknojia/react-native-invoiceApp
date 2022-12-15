import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import GoBack from '../components/GoBack';
import InvoiceDetailStatusCard from '../components/invoiceDetail/InvoiceDetailStatusCard';
import InvoiceDetailsMainCard from '../components/invoiceDetail/InvoiceDetailsMainCard';
import InvoiceDetailButton from '../components/invoiceDetail/InvoiceDetailButton';
import {individualInvoice} from '../redux/slice/InvoiceDetailSlice';
import {useDispatch} from 'react-redux';

const InvoiceDetailScreen = ({navigation, route}) => {
  useEffect(() => {
    axios
      .get(`http://10.0.0.76:8000/api/v1/invoice/${route.params.id}`)
      .then(res => dispatch(individualInvoice(res.data.invoice)))
      .catch(err => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const dispatch = useDispatch();

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <Header />
      </SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <GoBack navigation={navigation} />
          <InvoiceDetailStatusCard />
          <InvoiceDetailsMainCard />
        </View>
      </ScrollView>
      <InvoiceDetailButton />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 75,
  },
  safeAreaView: {
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    position: 'relative',
  },
});

export default InvoiceDetailScreen;
