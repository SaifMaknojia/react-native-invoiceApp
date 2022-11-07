import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Formik, resetForm, useFormikContext} from 'formik';
import {Input, Button} from '@ui-kitten/components';

const SignIn = () => {
  const initialValues = {username: '', password: ''};

  return (
    <Formik
      style={styles.formik}
      initialValues={initialValues}
      onSubmit={values => {
        console.log(values);
      }}>
      {({handleChange, handleSubmit, values}) => (
        <View style={styles.formik}>
          <Input
            onChangeText={handleChange('username')}
            style={styles.inputText}
            // value={values.username}
            placeholder="Enter a Username"
            label="Username"
          />
          <Input
            onChangeText={handleChange('password')}
            style={styles.inputText}
            placeholder="Enter your password"
            label="Password"
            // value={values.password}
          />
          <Button style={styles.button} onPress={handleSubmit} size="medium">
            Submit
          </Button>
          <Text>Register</Text>
        </View>
      )}
    </Formik>
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
