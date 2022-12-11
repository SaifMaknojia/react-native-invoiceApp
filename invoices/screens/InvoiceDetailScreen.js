import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import GoBack from '../components/GoBack';

const InvoiceDetailScreen = ({navigation, route}) => {
  useEffect(() => {
    axios
      .get(`http://10.0.0.76:8000/api/v1/invoice/${route.params.id}`)
      .then(res => console.log(res.data.invoice))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <Header />
      </SafeAreaView>
      <View style={{padding: 20}}>
        <GoBack navigation={navigation} />
      </View>
    </>
  );
};

export default InvoiceDetailScreen;
