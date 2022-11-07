/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';
import Login from './screens/Login';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View style={styles.container}>
        <Login />
      </View>
    </ApplicationProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default App;
