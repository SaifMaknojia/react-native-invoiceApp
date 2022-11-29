import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {Input, Button} from '@ui-kitten/components';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const apiRequestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username: username, password: password}),
  };

  const handleLogin = async () => {
    console.log('first');
    try {
      const res = await fetch(
        'http://localhost:8000/api/v1/users/login/',
        apiRequestOptions,
      );
      const result = await res.json();
      console.log(result);
      if (result) {
        console.log('first');
      }
      await AsyncStorage.setItem('token', result.token);
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('token');
      console.log(jsonValue);
    } catch (e) {
      // error reading value
    }
  };
  console.log(getData());

  return (
    <View style={styles.formik}>
      <Input
        style={styles.inputText}
        value={username}
        onChangeText={nextValue => setUsername(nextValue)}
        placeholder="Enter a Username"
        label="Username"
      />
      <Input
        style={styles.inputText}
        value={password}
        placeholder="Enter your password"
        onChangeText={nextValue => setPassword(nextValue)}
        label="Password"
      />
      <Button style={styles.button} onPress={handleLogin} size="medium">
        Submit
      </Button>
      <Text>Register</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  inputText: {
    marginVertical: 5,
    width: '75%',
    backgroundColor: 'transparent',
    color: 'blue',
  },
  formik: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#7e88c3',
  },
});

export default SignIn;
