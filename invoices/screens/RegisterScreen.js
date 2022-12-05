import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, Icon} from '@ui-kitten/components';
import {Formik} from 'formik';
import {RegisterValidationSchema} from '../components/ValidationSchema';
import CustomFormInput from '../components/CustomFormLoginInput';
import CustomFormLoginCheckbox from '../components/CustomFormLoginCheckbox';

const {height} = Dimensions.get('window');

const RegisterScreen = () => {
  const [passwordEntryIcon, setPasswordEntryIcon] = useState(true);
  const [confirmPasswordEntryIcon, setConfirmPasswordEntryIcon] =
    useState(true);

  const HandlePasswordIcon = props => {
    const {setStateProps, stateProps} = props;
    return (
      <TouchableWithoutFeedback onPress={() => setStateProps(!stateProps)}>
        <Icon
          fill={props.error && props.touched ? 'red' : 'grey'}
          {...props}
          name={stateProps ? 'eye-off' : 'eye'}
        />
      </TouchableWithoutFeedback>
    );
  };

  const ErrorText = ({error}) => {
    return (
      <Text
        style={{
          fontSize: 10,
          color: 'red',
          paddingHorizontal: 25,
          marginVertical: 3,
        }}>
        {error}
      </Text>
    );
  };

  const EmptyText = () => {
    return (
      <Text
        style={{
          fontSize: 10,
          color: 'red',
          paddingHorizontal: 25,
          marginVertical: 5,
        }}>
        &nbsp;
      </Text>
    );
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreedTerms: false,
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
        initialValues={initialValues}
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
              <CustomFormInput
                placeholder="First Name"
                onChangeText={handleChange('firstName')}
                value={values.firstName}
                errors={errors.firstName}
                touched={touched.firstName}
              />
              {errors.firstName && touched.firstName ? (
                <ErrorText error={errors.firstName} />
              ) : (
                <EmptyText />
              )}
              <CustomFormInput
                placeholder="Last Name"
                onChangeText={handleChange('lastName')}
                value={values.lastName}
                errors={errors.lastName}
                touched={touched.lastName}
              />
              {errors.lastName && touched.lastName ? (
                <ErrorText error={errors.lastName} />
              ) : (
                <EmptyText />
              )}
              <CustomFormInput
                placeholder="Enter Your Email Name"
                onChangeText={handleChange('email')}
                value={values.email.toLowerCase()}
                errors={errors.email}
                touched={touched.email}
                accessoryRight={
                  <Icon
                    fill={errors.email && touched.email ? 'red' : 'grey'}
                    name="email-outline"
                  />
                }
              />
              {errors.email && touched.email ? (
                <ErrorText error={errors.email} />
              ) : (
                <EmptyText />
              )}
              <CustomFormInput
                placeholder="Enter Your Password"
                onChangeText={handleChange('password')}
                value={values.password}
                errors={errors.password}
                touched={touched.password}
                secureTextEntry={passwordEntryIcon}
                accessoryRight={
                  <HandlePasswordIcon
                    error={errors.password}
                    touched={touched.password}
                    stateProps={passwordEntryIcon}
                    setStateProps={setPasswordEntryIcon}
                  />
                }
              />
              {errors.password && touched.password ? (
                <ErrorText error={errors.password} />
              ) : (
                <EmptyText />
              )}
              <CustomFormInput
                placeholder="Confirm your Password"
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                errors={errors.confirmPassword}
                touched={touched.confirmPassword}
                secureTextEntry={confirmPasswordEntryIcon}
                accessoryRight={
                  <HandlePasswordIcon
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    stateProps={confirmPasswordEntryIcon}
                    setStateProps={setConfirmPasswordEntryIcon}
                  />
                }
              />
              {errors.confirmPassword ? (
                <ErrorText error={errors.confirmPassword} />
              ) : (
                <EmptyText />
              )}

              <CustomFormLoginCheckbox
                checked={values.agreedTerms}
                onChange={nextValue => setFieldValue('agreedTerms', nextValue)}
                status={errors.agreedTerms ? 'danger' : 'primary'}
              />
            </View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit}>
              <Text style={styles.button}>Register</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
      <View style={styles.footer}>
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

  textColor: {
    color: '#7e88c3',
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
  footer: {
    flexDirection: 'row',
    marginTop: 15,
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    fontSize: 5,
  },
});

export default RegisterScreen;
