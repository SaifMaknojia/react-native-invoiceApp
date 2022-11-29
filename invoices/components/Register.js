import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Button} from '@ui-kitten/components';
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
      // style={styles.formik}
      initialValues={{email: '', userName: '', password: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View style={styles.formik}>
          <Input
            onChangeText={handleChange('username')}
            style={styles.inputText}
            placeholder="Enter a Username"
            label="Username"
          />
          <Input
            onChangeText={handleChange('email')}
            style={styles.inputText}
            placeholder="Email"
            label="Email"
          />
          <Input
            onChangeText={handleChange('password')}
            style={styles.inputText}
            placeholder="Password"
            label="password"
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Text style={[styles.button, styles.colorPrimary]}>Register</Text>
            </TouchableOpacity>
            <View>
              <Text style={styles.text}>Not a member</Text>
              <TouchableOpacity style={styles.text}>
                <Text style={[styles.button, styles.text]}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
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
  },
  colorPrimary: {
    backgroundColor: '#7e88c3',
    color: 'white',
  },
  button: {
    marginTop: 10,

    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 0,
    padding: 0,
  },
});

export default Register;
