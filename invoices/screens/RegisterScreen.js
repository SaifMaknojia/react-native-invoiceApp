import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, Input, Button, CheckBox, Icon} from '@ui-kitten/components';
import {Formik} from 'formik';
import {RegisterValidationSchema} from '../components/Validations';

const {height} = Dimensions.get('window');

const RegisterScreen = () => {
  const [passwordEntryIcon, setPasswordEntryIcon] = useState(true);
  const [confirmPasswordEntryIcon, setConfirmPasswordEntryIcon] =
    useState(true);

  const HandlePasswordIcon = props => {
    return (
      <TouchableWithoutFeedback
        onPress={() => setPasswordEntryIcon(!passwordEntryIcon)}>
        <Icon
          fill={props.error && props.touched ? 'red' : 'grey'}
          {...props}
          name={passwordEntryIcon ? 'eye-off' : 'eye'}
        />
      </TouchableWithoutFeedback>
    );
  };

  const HandleConfirmPasswordIcon = props => {
    return (
      <TouchableWithoutFeedback
        onPress={() => setConfirmPasswordEntryIcon(!confirmPasswordEntryIcon)}>
        <Icon
          fill={props.error && props.touched ? 'red' : 'grey'}
          {...props}
          name={confirmPasswordEntryIcon ? 'eye-off' : 'eye'}
        />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text} category="h2">
          Lets Get Started!
        </Text>
      </View>
      <Formik
        validationSchema={RegisterValidationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          terms: false,
        }}
        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldValue,
        }) => (
          <>
            <View style={{marginTop: 10}}>
              <Input
                style={
                  errors.email && touched.email
                    ? [styles.textInputError, styles.input]
                    : styles.input
                }
                size="large"
                placeholder="Enter Your Email"
                value={values.email.toLowerCase()}
                onChangeText={handleChange('email')}
                accessoryRight={
                  <Icon
                    fill={errors.email && touched.email ? 'red' : 'grey'}
                    name="email-outline"
                  />
                }
              />
              {errors.email && touched.email ? (
                <Text
                  style={{fontSize: 10, color: 'red', paddingHorizontal: 25}}>
                  {errors.email}
                </Text>
              ) : (
                <Text
                  style={{fontSize: 10, color: 'red', paddingHorizontal: 25}}>
                  &nbsp;
                </Text>
              )}
              <Input
                style={
                  errors.password && touched.password
                    ? [styles.textInputError, styles.input]
                    : styles.input
                }
                size="large"
                onChangeText={handleChange('password')}
                value={values.password}
                placeholder="Enter Your Password"
                accessoryRight={
                  <HandlePasswordIcon
                    error={errors.password}
                    touched={touched.password}
                  />
                }
                secureTextEntry={passwordEntryIcon}
              />
              {errors.password && touched.password ? (
                <Text
                  style={{fontSize: 10, color: 'red', paddingHorizontal: 25}}>
                  {errors.password}
                </Text>
              ) : (
                <Text
                  style={{fontSize: 10, color: 'red', paddingHorizontal: 25}}>
                  &nbsp;
                </Text>
              )}
              <Input
                style={
                  errors.confirmPassword && touched.confirmPassword
                    ? [styles.textInputError, styles.input]
                    : styles.input
                }
                size="large"
                placeholder="Enter Your Password"
                value={values.confirmPassword}
                accessoryRight={
                  <HandleConfirmPasswordIcon
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                  />
                }
                secureTextEntry={confirmPasswordEntryIcon}
                onChangeText={handleChange('confirmPassword')}
              />
              {errors.confirmPassword ? (
                <Text
                  style={{fontSize: 10, color: 'red', paddingHorizontal: 25}}>
                  {errors.confirmPassword}
                </Text>
              ) : (
                <Text
                  style={{fontSize: 10, color: 'red', paddingHorizontal: 25}}>
                  &nbsp;
                </Text>
              )}

              <View>
                <View style={styles.checkboxContainer}>
                  <CheckBox
                    checked={values.terms}
                    onChange={nextValue => setFieldValue('terms', nextValue)}
                    style={errors.terms ? {color: 'red'} : styles.checkbox}
                    status="primary">
                    <Text style={{fontSize: 3}}>
                      I agree to Terms and Conditions
                    </Text>
                  </CheckBox>
                </View>
                {errors.terms && <Text>{errors.terms}</Text>}
              </View>
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit}>
              <Text style={styles.button}>Register</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <View
        style={[
          styles.checkbox,
          styles.checkboxContainer,
          {flexDirection: 'row', marginTop: 15},
        ]}>
        <Text category="c1">Already Have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.textColor} category="c1">
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height,
    paddingBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },

  checkbox: {
    paddingHorizontal: 20,
    fontSize: 5,
  },
  textColor: {
    color: '#7e88c3',
  },
  checkboxContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
  buttonContainer: {
    marginTop: 15,
    backgroundColor: '#252945',
    paddingVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 12,
  },
  button: {
    color: '#dfe3fa',
    borderRadius: 20,
    padding: 10,
    borderColor: 'transparent',
  },
  textInputError: {
    borderColor: 'red',
  },
});

export default RegisterScreen;
