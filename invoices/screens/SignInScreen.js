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
import {SignInValidationSchema} from '../components/ValidationSchema';
import CustomFormInput from '../components/CustomFormLoginInput';
import CustomFormLoginCheckbox from '../components/CustomFormLoginCheckbox';
import axios from 'axios';
import * as Keychain from 'react-native-keychain';

const {height} = Dimensions.get('window');

const SignInScreen = ({navigation}) => {
  // const navigation = useNavigation();
  const [loginData, setLoginData] = useState();
  const [loginError, setLoginError] = useState(false);
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

  const ErrorText = ({error}) => {
    return <Text style={styles.errorStyle}>{error}</Text>;
  };

  const EmptyText = () => {
    return <Text style={styles.emptyText}>&nbsp;</Text>;
  };
  const handleFormikSubmit = async value => {
    try {
      const apiData = await axios.post(
        'http://10.0.0.76:8000/api/v1/users/login',
        {
          email: value.email,
          password: value.password,
        },
      );

      const token = await apiData.data.token;

      const data = await Keychain.setGenericPassword('username', token);

      if (apiData.data.message === 'Success') {
        await navigation.navigate('InvoiceHomeScreen', {token: 'xx'});
        setLoginData(prev => {
          return {
            ...prev,
            ...apiData.data,
          };
        });
      } else {
        setLoginError(true);
      }
    } catch (err) {
      setLoginError(true);
      console.error(err);
    }
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
        validateOnChange={false}
        validateOnBlur={true}
        initialValues={{email: '', password: ''}}
        onSubmit={values => handleFormikSubmit(values)}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <>
            <View style={{marginTop: 10}}>
              <>
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
                {errors.email || loginError ? (
                  <ErrorText error={errors.email} />
                ) : (
                  <EmptyText />
                )}
              </>
              <>
                <CustomFormInput
                  placeholder="Enter Your Password"
                  onChangeText={handleChange('password')}
                  value={values.password}
                  errors={errors.password}
                  touched={touched.password}
                  secureTextEntry={secureTextEntry}
                  accessoryRight={<RenderIcon error={errors.password} />}
                />
                {errors.password || loginError ? (
                  <ErrorText error={errors.password} />
                ) : (
                  <EmptyText />
                )}
              </>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginLeft: -10,
                }}>
                <CustomFormLoginCheckbox
                  checked={isAgreed}
                  onChange={handleCheckbox}
                  status="primary"
                  text="Remember Me"
                />
                <TouchableOpacity
                  onPress={() => navigation.navigate('InvoiceHomeScreen')}
                  style={{alignSelf: 'flex-end', marginBottom: 4}}>
                  <Text style={styles.textColor} category="c1">
                    Forgot Your Password?
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
      <View style={styles.footer}>
        <Text category="c1">Don't Have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register', {headerShown: false})}>
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
    width: '100%',
    paddingVertical: 5,
    borderRadius: 20,
    fill: 'black',
    borderWidth: 1,
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

  textColor: {
    color: '#7e88c3',
  },

  footer: {
    flexDirection: 'row',
    marginTop: 15,
    marginTop: 10,
    flexDirection: 'row',
    paddingHorizontal: 20,
    fontSize: 5,
  },
  errorStyle: {
    fontSize: 10,
    color: 'red',
    paddingHorizontal: 25,
    marginVertical: 5,
  },
  emptyText: {
    paddingHorizontal: 25,
    fontSize: 10,
    marginVertical: 5,
  },
});

export default SignInScreen;
