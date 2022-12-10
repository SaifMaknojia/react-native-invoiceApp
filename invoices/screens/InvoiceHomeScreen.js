import {Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';
import Header from '../components/Header';
import * as Keychain from 'react-native-keychain';
import HomeScreenNav from '../components/HomeScreenNav';
import HomeScreenInvoiceCard from '../components/HomeScreenInvoiceCard';
import {useDispatch, useSelector} from 'react-redux';

import {Button} from '@ui-kitten/components';
import {addInvoice} from '../redux/slice/InvoiceSlice';

const InvoiceHomeScreen = props => {
  const [token, setToken] = React.useState();

  const {navigation} = props;

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://10.0.0.76:8000/api/v1/invoice')
      .then(res => dispatch(addInvoice(res.data)))
      .catch(err => console.log(err));
  }, []);

  const getToken = async () => {
    try {
      const token = await Keychain.getGenericPassword();
      setToken(token.password);
    } catch (err) {
      console.log(err);
    }
  };

  getToken();

  return (
    <>
      <SafeAreaView style={{backgroundColor: '#fff'}}>
        <Header />
      </SafeAreaView>
      <HomeScreenNav />
      <Button>ADD</Button>
      <HomeScreenInvoiceCard />
      <Text onPress={() => navigation.navigate('Login')}>Login Screen</Text>
    </>
  );
};

export default InvoiceHomeScreen;
