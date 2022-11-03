import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {View} from 'react-native';
import Header from './component/Header';

const App = () => {
  console.log('App');

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <View>
        <Header />
      </View>
    </ApplicationProvider>
  );
};

export default App;
