/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Text} from '@ui-kitten/components';
import GetStarted from './screens/GetStarted';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <GetStarted />
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default App;
