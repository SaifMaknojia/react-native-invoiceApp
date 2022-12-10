import React from 'react';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyStack from './navigation';
import axios from 'axios';
import * as Keychain from 'react-native-keychain';
import {Provider} from 'react-redux';
import store from './redux/store';

axios.interceptors.request.use(async config => {
  const token = await Keychain.getGenericPassword();

  config.headers['x-access-token'] = token.password;

  return config;
});

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <MyStack />
        </ApplicationProvider>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
