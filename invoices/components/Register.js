import {Button, View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {Input} from '@ui-kitten/components';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  userName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const Register = () => {
  return (
    <Formik
      style={styles.formik}
      initialValues={{email: '', userName: '', password: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.formik}>
          <Input
            onChangeText={handleChange('username')}
            style={styles.inputText}
            // size="small"
            placeholder="Enter a Username"
            label="Username"
          />
          <Input
            onChangeText={handleChange('email')}
            style={styles.inputText}
            // size="small"
            placeholder="Email"
            label="Email"
          />
          <Input
            onChangeText={handleChange('username')}
            style={styles.inputText}
            // size="small"
            placeholder="Active"
            label="Username"
          />
          <Button style={styles.button} onPress={handleSubmit} title="Submit" />
          <Text clas>Sign In</Text>
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

export default Register;
