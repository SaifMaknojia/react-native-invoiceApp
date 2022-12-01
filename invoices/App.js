import React from 'react';
import {StyleSheet} from 'react-native';
import * as eva from '@eva-design/eva';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import SignInScreen from './screens/SignInScreen';
import RegisterScreen from './screens/RegisterScreen';

const App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <RegisterScreen />
        {/*     <SignInScreen /> */}
      </ApplicationProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default App;
