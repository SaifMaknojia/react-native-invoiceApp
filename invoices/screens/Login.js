import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import SignIn from '../components/SignIn';
import Register from '../components/Register';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <View style={styles.container}>{isSignIn ? <SignIn /> : <Register />}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '90%',
  },
});

export default Login;
