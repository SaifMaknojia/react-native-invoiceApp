import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, Input, CheckBox, Icon} from '@ui-kitten/components';
import {Formik} from 'formik';
import {SignInValidationSchema} from '../components/ValidationSchema';

const {height} = Dimensions.get('window');

const SignInScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const [isAgreed, setIsAgreed] = useState(false);
  const handleCheckbox = () => {
    setIsAgreed(!isAgreed);
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const RenderIcon = props => {
    return (
      <TouchableWithoutFeedback onPress={toggleSecureEntry}>
        <Icon
          fill={props.error ? 'red' : 'grey'}
          {...props}
          name={secureTextEntry ? 'eye-off' : 'eye'}
        />
      </TouchableWithoutFeedback>
    );
  };

  const handleFormikSubmit = value => {
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text} category="h2">
          Welcome Back!
        </Text>
      </View>
      <Formik
        validationSchema={SignInValidationSchema}
        // validateOnChange={false}
        validateOnBlur={true}
        initialValues={{email: '', password: ''}}
        onSubmit={values => handleFormikSubmit(values)}>
        {({handleChange, handleSubmit, values, errors}) => (
          <>
            <View style={{marginTop: 10, paddingHorizontal: 20}}>
              <Input
                style={
                  errors.email
                    ? [styles.textInputError, styles.input]
                    : styles.input
                }
                placeholderTextColor={errors.email ? 'red' : 'gray'}
                onChangeText={handleChange('email')}
                size="large"
                placeholder="Enter Your Email"
                value={values.email.toLowerCase()}
                accessoryRight={
                  <Icon
                    fill={errors.email ? 'red' : 'grey'}
                    name="email-outline"
                  />
                }
              />
              {errors.email ? (
                <Text
                  style={{fontSize: 10, color: 'red', paddingHorizontal: 25}}>
                  {errors.email}
                </Text>
              ) : (
                <Text>&nbsp;</Text>
              )}
              <Input
                style={
                  errors.password
                    ? [styles.textInputError, styles.input]
                    : styles.input
                }
                size="large"
                placeholder="Enter Your Password"
                placeholderTextColor={errors.password ? 'red' : 'gray'}
                onChangeText={handleChange('password')}
                value={values.password}
                accessoryRight={<RenderIcon error={errors.password} />}
                secureTextEntry={secureTextEntry}
              />
              {errors.password ? (
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
              <View style={styles.checkboxContainer}>
                <CheckBox
                  checked={isAgreed}
                  onChange={handleCheckbox}
                  style={styles.checkbox}
                  status="primary">
                  <Text style={{fontSize: 3}}> Remember Me</Text>
                </CheckBox>
                <TouchableOpacity>
                  <Text
                    // onPress={handleSubmit}
                    style={styles.textColor}
                    category="c1">
                    Forgot Your Password
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit}>
              <Text style={styles.button}>Sign In</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <View
        style={[
          styles.checkbox,
          styles.checkboxContainer,
          {flexDirection: 'row'},
        ]}>
        <Text category="c1">Don't Have an account? </Text>
        <TouchableOpacity
          onPress={() => console.log('lets go to register Screen')}>
          <Text style={styles.textColor} category="c1">
            Register
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
    paddingVertical: 5,
    borderRadius: 20,
    fill: 'black',
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: '#252945',
    paddingVertical: 5,
    borderRadius: 5,
    paddingHorizontal: 12,
  },
  textInputError: {
    borderColor: 'red',
  },
  button: {
    color: '#dfe3fa',
    borderRadius: 20,
    padding: 10,
    borderColor: 'transparent',
  },
  checkbox: {
    fontSize: 5,
  },
  textColor: {
    color: '#7e88c3',
  },
  checkboxContainer: {
    marginTop: 10,
    flexDirection: 'row',
  },
});

export default SignInScreen;
