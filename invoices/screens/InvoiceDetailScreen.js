import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import GoBack from '../components/GoBack';
import InvoiceDetailStatusCard from '../components/invoiceDetail/InvoiceDetailStatusCard';
import InvoiceDetailsMainCard from '../components/invoiceDetail/InvoiceDetailsMainCard';
import InvoiceDetailButton from '../components/invoiceDetail/InvoiceDetailButton';

const InvoiceDetailScreen = ({navigation, route}) => {
  useEffect(() => {
    axios
      .get(`http://10.0.0.76:8000/api/v1/invoice/${route.params.id}`)
      .then(res => console.log(res.data.invoice))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <ScrollView style={{marginBottom: 75}}>
        <SafeAreaView style={{backgroundColor: '#fff'}}>
          <Header />
        </SafeAreaView>
        <View style={{padding: 20, position: 'relative'}}>
          <GoBack navigation={navigation} />
          <InvoiceDetailStatusCard />
          <InvoiceDetailsMainCard />
        </View>
      </ScrollView>
      <InvoiceDetailButton />
    </>
  );
};

export default InvoiceDetailScreen;
