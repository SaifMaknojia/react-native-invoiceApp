import {Text, SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import * as Keychain from 'react-native-keychain';
import HomeScreenNav from '../components/homeScreen/HomeScreenNav';
import HomeScreenInvoiceCard from '../components/homeScreen/HomeScreenInvoiceCard';
import {useDispatch} from 'react-redux';
import {addInvoice} from '../redux/slice/InvoiceSlice';

const InvoiceHomeScreen = props => {
  const [token, setToken] = useState();

  const {navigation} = props;

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://10.0.0.76:8000/api/v1/invoice')
      .then(res => dispatch(addInvoice(res.data)))
      .catch(err => console.log(err));
  }, [dispatch]);

  const getToken = async () => {
    try {
      const newToken = await Keychain.getGenericPassword();
      setToken(newToken.password);
    } catch (err) {
      console.log(err);
    }
  };

  getToken();

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <Header />
      </SafeAreaView>
      <HomeScreenNav />
      <HomeScreenInvoiceCard navigation={navigation} />
      <Text onPress={() => navigation.navigate('Login')}>Login Screen</Text>
    </>
  );
};
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#fff',
  },
});

export default InvoiceHomeScreen;
