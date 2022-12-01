import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text, Input, Button, CheckBox, Icon} from '@ui-kitten/components';
const {height} = Dimensions.get('window');

const SignInScreen = () => {
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text} category="h2">
          Welcome Back!
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Input
          style={styles.input}
          size="large"
          placeholder="Enter Your Email"
          accessoryRight={<Icon style={{fill: 'black'}} name="email-outline" />}
        />
        <Input
          style={styles.input}
          size="large"
          placeholder="Enter Your Password"
          // caption={renderCaption}
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
          onChangeText={() => console.log('password')}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox style={styles.checkbox} status="primary">
            <Text style={{fontSize: 3}}> Remember Me</Text>
          </CheckBox>
          <TouchableOpacity>
            <Text style={styles.textColor} category="c1">
              Forgot Your Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        onPress={() => console.log('button was clicked')}
        style={styles.button}>
        Sign In
      </Button>
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
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    fill: 'black',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#252945',
    color: '#dfe3fa',
    borderRadius: 20,
    padding: 10,
    borderColor: 'transparent',
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
});

export default SignInScreen;
